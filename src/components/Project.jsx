const Project = ({ src, title, text, link, linkGitHub }) => {
  return (
    <li className="portfolio__box">
      <img className="portfolio__img" src={src} alt="Фото проекта" />
      <div className="portfolio__layer">
        <h4 className="portfolio__min-title min-title">{title}</h4>
        <p className="portfolio__text">{text}</p>
        <div className="portfolio__links">
          <a className="portfolio__link" href={link} target="blank">
            <i className="bx bx-link-external"></i>
          </a>

          <a className="portfolio__link" href={linkGitHub} target="blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </li>
  )
}

export default Project
