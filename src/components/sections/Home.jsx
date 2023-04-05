import React from 'react'
import myPhoto from './../../images/photos/sticker.png'

import Fade from 'react-reveal/Fade'

const Home = ({ homeRef }) => {
  const properties = {
    duration: 3000,
    distance: '80px',
    delay: 200,
  }

  return (
    <section ref={homeRef} className="home section" id="home">
      <Fade top {...properties}>
        <div className="home__content">
          <h1 className="home__title title">
            <span>Front-end React </span>разработчик
          </h1>

          <p className="home__text">
            Привет, меня зовут Буланов Роман. Увлеченный Front-end React
            разработчик из России.
          </p>

          <ul className="home__social-media social-media">
            <li className="social-media__item">
              <a className="social-media__link" href="#">
                <i className="bx bxl-whatsapp"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a className="social-media__link" href="#">
                <i className="bx bxl-telegram"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a className="social-media__link" href="#">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a className="social-media__link" href="#">
                <i className="bx bxl-vk"></i>
              </a>
            </li>
          </ul>

          <div className="home__tech-stack">
            <div className="home__stacks-text">Технологические стеки</div>
            <ul className="home__stacks">
              <li className="home__stack">
                <i className="bx bxl-html5"></i>
              </li>

              <li className="home__stack">
                <i className="bx bxl-css3"></i>
              </li>

              <li className="home__stack">
                <i className="bx bxl-sass"></i>
              </li>

              <li className="home__stack">
                <i className="bx bxl-javascript"></i>
              </li>

              <li className="home__stack">
                <i className="bx bxl-react"></i>
              </li>

              <li className="home__stack">
                <i className="bx bxl-github"></i>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
      <Fade bottom {...properties}>
        <div className="home__img-box">
          <img className="home__img" src={myPhoto} alt="фото автора" />
        </div>
      </Fade>
    </section>
  )
}

export default Home
