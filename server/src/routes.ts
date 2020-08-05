import express from 'express';
import db from './database/connection';

import convertHoursToMinutes from './utils/convertHoursToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

routes.post('/classes', async (request,response) => {
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
  
    await trx.commit();

    return response.status(201).send();
  } catch (error) {
    trx.rollback();
    console.log(error);
    return response.status(400).json({ error: 'Unexpected error while creating a new class, try again' });
  }
  
});

export default routes;