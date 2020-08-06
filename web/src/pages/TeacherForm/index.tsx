import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm = () => {
  const [ scheduleItems, setScheduleItems ] = useState([{ week_day: 0, from: '', to: '' }]);

  function addScheduleList () {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrivel que você quer dar aulas."
      description="O primeiro passo, é preencher este formulário de inscrição."
      >
      </PageHeader>

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria" 
            options={ [
              { label: 'Artes', value: 'artes' },
              { label: 'Matemática', value: 'matematica' },
              { label: 'Ciência', value: 'ciencia' },
              { label: 'Física', value: 'fisica' },
              { label: 'Química', value: 'quimica' },
            ]} 
          />
          <Input name="cost" label="Custo" />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponiveis
            <button type="button" onClick={addScheduleList}>
              + Novo horário
            </button>
          </legend>

          { scheduleItems.map( schedule => (
            <div key={schedule.week_day} className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da Semana" 
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
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
          )) }
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar</button>
        </footer>

      </main>
      
    </div>
  );
}

export default TeacherForm;