import { Request, Response } from 'express';

import db from '../database/connection';

import convertHoursToMinutes from '../utils/convertHoursToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

class ClassController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if(!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({ error: 'Missing search filters.' })
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users','classes.user_id', '=', 'users.id')
      .select(['classes.*','users.*']);

    return response.json(classes);
  }

  async create(request: Request,response: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
  
    const trx = await db.transaction();
  
    try {
  
      const userId = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });
    
      const user_id = userId[0];
    
      const classId = await trx('classes').insert({
        subject,
        cost,
        user_id
      });
    
      const class_id = classId[0];
    
      const classSchedule = schedule.map( (scheduleItem: ScheduleItem)  => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to),
        }
      })
    
      await trx('class_schedules').insert(classSchedule);

      const createdUser = await trx('users')
        .where('users.id','=',user_id)
        .join('classes','classes.id','=',class_id as any)
        .select(['users.*','classes.*']);

      await trx.commit();
  
      return response.status(201).json(createdUser);
    } catch (error) {
      trx.rollback();
      console.log(error);
      return response.status(400).json({ error: 'Unexpected error while creating a new class, try again' });
    }
    
  }
}

export default new ClassController();