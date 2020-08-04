import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponiveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
            <div>
              <strong>Diego Fernandes</strong>
              <span>Quimica</span>
            </div>
          </header>
          <p>
          Enthusiast of the best web & mobile development technologies.
          <br/> <br/>
          Passionate about education and changing people's lives through programming. More than 200,000 people have already undergone one of my trainings. "Nothing in this world beats good old persistence. Talent does not surpass. Nothing more common than talented failures. Genius does not overcome. Unrecognized geniuses is practically a cliche. Education does not exceed. The world is full of educated fools. Persistence and determination alone are powerful."
          </p>

          <footer>
            <p>
              Preço/Hora 
              <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Zap Zap"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;