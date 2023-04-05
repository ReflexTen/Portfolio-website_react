import React from 'react'
import Fade from 'react-reveal/Fade'
import Project from '../Project'
import projectList from './../helpers/projectList'

const Portfolio = ({ portfolio }) => {
  const properties = {
    duration: 3000,
    distance: '80px',
    delay: 200,
  }

  return (
    <section ref={portfolio} className={`portfolio section`} id="portfolio">
      <Fade top {...properties}>
        <h2 className="portfolio__heading heading">
          Latest <span>project</span>
        </h2>
      </Fade>
      <Fade bottom {...properties}>
        <ul className="portfolio__container">
          {projectList.map(project => (
            <Project
              key={project.id}
              src={project.src}
              title={project.title}
              text={project.text}
              link={project.link}
            />
          ))}
        </ul>
      </Fade>
    </section>
  )
}

export default Portfolio
