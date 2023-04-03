const Project = ({ src, title, text, link }) => {
  return (
    <li className="portfolio__box">
      <img className="portfolio__img" src={src} alt="Фото проекта" />
      <div className="portfolio__layer">
        <h4 className="portfolio__min-title min-title">{title}</h4>
        <p className="portfolio__text">{text}</p>
        <a className="portfolio__link" href={link}>
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </li>
  )
}

export default Project
