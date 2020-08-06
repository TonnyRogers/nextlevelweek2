import React from 'react';

import api from '../../services/api';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


export interface Teacher {
  avatar: string,
  name: string,
  subject: string,
  bio: string,
  cost: number,
  whatsapp: string,
  id: number,
}
interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  async function createNewConnection(teacherId: number) {
    await api.post('/connections', { user_id: teacherId });
  }

  return (
    <article className="teacher-item">
         <header>
           <img src={teacher.avatar || `https://api.adorable.io/avatars/285/${teacher.name}.png`} alt={teacher.name}/>
           <div>
             <strong>{teacher.name}</strong>
             <span>{teacher.subject}</span>
           </div>
         </header>

         <p>
          {teacher.bio}
         </p>

         <footer>
           <p>
             Preço/Hora
             <strong>R${teacher.cost}</strong>
           </p>
           <a onClick={() => createNewConnection(teacher.id)} href={`https://wa.me/${teacher.whatsapp.replace('+','')}?text=Gostaria%20de%20saber%20a%20disponibilidade%20das%20aulas`} target="_blank" >
             <img src={whatsappIcon} alt="Whatsapp"/>
             Entrar em contato
           </a>
         </footer>

       </article>
  );
}

export default TeacherItem;