import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import api from '../../services/api';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm = () => {
  const history = useHistory();

  const [ scheduleItems, setScheduleItems ] = useState([{ week_day: 0, from: '', to: '' }]);
  const [ name, setName ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ bio, setBio ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ cost, setCost ] = useState('');

  function addScheduleList () {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const filteredScheduleItem = scheduleItems.map( (scheduleItem,index) => {
      if(index === position) {
        return {
          ...scheduleItem,
          [field]: value
        }
      }

      return scheduleItem;
     });

     setScheduleItems(filteredScheduleItem);
  }

  async function handleCreateClass (e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule: scheduleItems
      });

      history.push('/');
    } catch (error) {
      alert('Erro ao cadastrar professor');
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrivel que você quer dar aulas."
      description="O primeiro passo, é preencher este formulário de inscrição."
      >
      </PageHeader>

      <main>
        <form onSubmit={(e) => handleCreateClass(e) }>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name" 
              label="Nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar} 
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp} 
              onChange={(e) => setWhatsapp(e.target.value)} 
            />
            <TextArea 
              name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria" 
              options={ [
                { label: 'Artes', value: 'Artes' },
                { label: 'Matemática', value: 'Matemática' },
                { label: 'Ciência', value: 'Ciência' },
                { label: 'Física', value: 'Física' },
                { label: 'Química', value: 'Química' },
                { label: 'História', value: 'História' }, 
              ]}
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
            />
            <Input 
              name="cost" 
              label="Custo" 
              value={cost} 
              onChange={(e) => setCost(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
              <button type="button" onClick={addScheduleList}>
                + Novo horário
              </button>
            </legend>

            { scheduleItems.map( (schedule,index) => (
              <div key={schedule.week_day} className="schedule-item">
              <Select 
                name="week_day" 
                label="Dia da Semana"
                value={schedule.week_day}
                onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value)} 
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
                name="from" 
                label="Das" 
                type="time"
                value={schedule.from} 
                onChange={ e => setScheduleItemValue(index, 'from', e.target.value)} 
              />
              <Input 
                name="to" 
                label="Até" 
                type="time"
                value={schedule.to} 
                onChange={ e => setScheduleItemValue(index, 'to', e.target.value)} 
              />
            </div>
            )) }
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar</button>
          </footer>
        </form>
      </main>
      
    </div>
  );
}

export default TeacherForm;