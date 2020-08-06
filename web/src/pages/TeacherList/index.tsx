import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css';


const TeacherList = () => {
  const [ teacherList, setTeacherList ] = useState([]);
  const [ subject, setSubject ] = useState('');
  const [ weekDay, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');

  useEffect(() => {
    async function getTeacherList() {
      const response = await api.get('/classes');
      setTeacherList(response.data);
    }

    getTeacherList();

  }, []);

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('/classes',{ params: {
      week_day: weekDay,
      time,
      subject
    } });

    setTeacherList(response.data);
  }


  return (
    <div id="page-teacher-list" className="container">
     <PageHeader title="Estes são os proffys disponíveis.">
       <form id="search-teachers" onSubmit={(e) => searchTeachers(e)}>

        <Select 
          name="subject" 
          label="Matéria" 
          value={subject}
          onChange={(e) => setSubject(e.target.value) }
          options={ [
            { label: 'Artes', value: 'Artes' },
            { label: 'Matemática', value: 'Matemática' },
            { label: 'Ciência', value: 'ciencia' },
            { label: 'Física', value: 'Física' },
            { label: 'Química', value: 'Química' },
            { label: 'História', value: 'História' },
          ]} 
        />

        <Select 
          name="week_day" 
          label="Dia da Semana" 
          value={weekDay}
          onChange={(e) => setWeekDay(e.target.value) }
          options={ [
            { label: 'Domingo', value: '0' },
            { label: 'Segunda', value: '1' },
            { label: 'Terça', value: '2' },
            { label: 'Quarta', value: '3' },
            { label: 'Quinta', value: '4' },
            { label: 'Sexta', value: '5' },
            { label: 'Sábado', value: '6' },
          ]} 
        />

        <Input 
          type="time" 
          name="time" 
          label="Hora" 
          value={time}
          onChange={(e) => setTime(e.target.value) }
        />

        <button type="submit">Buscar</button>

       </form>
     </PageHeader>

     <main>
       {
         teacherList[0] 
          ? teacherList.map( (teacher: Teacher) => (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
            />
          ))
          : (<div className="empty-result"><h6>Ops... nenhum professor encontrado.</h6></div>)
       }
     </main>
    </div>
  );
}

export default TeacherList;