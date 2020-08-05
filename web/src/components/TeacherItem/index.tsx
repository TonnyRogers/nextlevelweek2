import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
  avatar_url: string,
  name: string,
  subject: string,
  bio: string,
  price: number,
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
         <header>
           <img src={props.avatar_url || `https://api.adorable.io/avatars/285/${props.name}.png`} alt={props.name}/>
           <div>
             <strong>{props.name}</strong>
             <span>{props.subject}</span>
           </div>
         </header>

         <p>
          {props.bio}
         </p>

         <footer>
           <p>
             Preço/Hora
             <strong>R${props.price}</strong>
           </p>
           <button type="button">
             <img src={whatsappIcon} alt="Whatsapp"/>
             Entrar em contato
           </button>
         </footer>

       </article>
  );
}

export default TeacherItem;