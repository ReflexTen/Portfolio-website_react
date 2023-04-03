const NavLink = ({ text, href, activeLink, activeLinkClick, loh }) => {
  return (
    <li className="navbar__item" onClick={loh}>
      <a
        className={`navbar__link ${activeLink == text ? 'active' : ''}`}
        href={href}
        onClick={() => activeLinkClick(text)}
      >
        {text}
      </a>
    </li>
  )
}

export default NavLink
