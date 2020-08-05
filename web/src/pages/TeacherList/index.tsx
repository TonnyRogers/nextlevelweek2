import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';


const teachers = [
  {
    id: 1,
    avatar_url:"https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4",
    name:"Tony Amaral",
    price:125.00,
    subject:"Algebra",
    bio:"Professor de algebra há 20 anos, mesmo eu tendo 20. você não vai se arrepender"
  },
  {
    id: 2,
    avatar_url:"",
    name:"Lucas Silva",
    price:100.00,
    subject:"Fisica",
    bio:"Vem aprender as leis da física comigo."
  },
  {
    id: 3,
    avatar_url:"",
    name:"Beatriz Marques",
    price:90.00,
    subject:"Química",
    bio:"Ciêntista louca, vamos fazer um experimento"
  }
]

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
     <PageHeader title="Estes são os proffys disponíveis.">
       <form id="search-teachers">
         <div className="input-block">
           <label htmlFor="subject">Matéria</label>
           <input type="text" id="subject" />
         </div>

         <div className="input-block">
           <label htmlFor="week_day">Dia da Semana</label>
           <input type="text" id="week_day"/>
         </div>

         <div className="input-block">
           <label htmlFor="time">Hora</label>
           <input type="text" id="time"/>
         </div>
       </form>
     </PageHeader>

     <main>
       {
         teachers.map( teacher => (
           <TeacherItem 
            avatar_url={teacher.avatar_url}
            name={teacher.name}
            bio={teacher.bio}
            subject={teacher.subject}
            price={teacher.price}
           />
         ))
       }
     </main>
    </div>
  );
}

export default TeacherList;