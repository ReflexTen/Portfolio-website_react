import React from 'react'
import Fade from 'react-reveal/Fade'
import { useRef } from 'react'

import myPhoto from './../../images/photos/sticker.png'
const About = ({ aboutRef }) => {
  const properties = {
    duration: 3000,
    distance: '80px',
    delay: 200,
  }

  return (
    <section ref={aboutRef} className="about section" id="about">
      <Fade left {...properties}>
        <div className="about__img-box">
          <img className="about__img" src={myPhoto} alt="Фото автора" />
        </div>
      </Fade>

      <Fade right {...properties}>
        <div className="about__content">
          <Fade top {...properties}>
            <h2 className="about__heading heading">
              Обо <span>мне</span>
            </h2>
          </Fade>

          <h3 className="about__content-subtitle subtitle">
            Front-end Developer
          </h3>
          <p className="about__content-text">
            Роман - фронтенд разработчик, полон страсти к изучению
            веб-разработки. Стремлюсь создавать красивые и функциональные
            веб-сайты, и веб-приложения, используя передовые технологии. Опыт
            работы с HTML, CSS, JavaScript и фреймворками, такими как React.
            Люблю учиться новому и постоянно совершенствовать свои навыки.
            Подписывайтесь на мои аккаунты в Vkontakte, Telegram и Instagram.
            Давайте создадим что-то потрясающее вместе!
          </p>

          {/* <a className="about__content-btn btn" href="#">
            Read more
          </a> */}
        </div>
      </Fade>
    </section>
  )
}

export default About
