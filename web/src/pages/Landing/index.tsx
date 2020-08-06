import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

export default function Landing() {
  const [ totalConnections,setTotalConnections] = useState(0);

  useEffect(() => {
    async function getTotalConnections () {
      const response = await api.get('/connections');
      setTotalConnections(response.data.total);
    }

    getTotalConnections();
  },[]);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landing} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Dar Aula
          </Link>
        </div>

        <span className="total-connections">
          Total de <b>&nbsp; {totalConnections} conexões &nbsp;</b>  já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  );
}