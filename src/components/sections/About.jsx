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
              About <span>me</span>
            </h2>
          </Fade>

          <h3 className="about__content-subtitle subtitle">
            Front-end Developer
          </h3>
          <p className="about__content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
            maxime exercitationem. Cumque inventore nam sequi delectus
            blanditiis! Aperiam, est? Saepe nesciunt cupiditate numquam, fuga
            facilis error quod dolor eum hic aspernatur doloremque omnis cum
            sapiente dolores officiis pariatur deleniti provident in
            voluptatibus accusantium porro? Quam?
          </p>

          <a className="about__content-btn btn" href="#">
            Read more
          </a>
        </div>
      </Fade>
    </section>
  )
}

export default About
