import React from 'react'
import { useRef } from 'react'

import Project from '../Project'
import projectList from './../helpers/projectList'

const Portfolio = ({ portfolio }) => {
  return (
    <section ref={portfolio} className={`portfolio section`} id="portfolio">
      <h2 className="portfolio__heading heading">
        Latest <span>project</span>
      </h2>

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
    </section>
  )
}

export default Portfolio
