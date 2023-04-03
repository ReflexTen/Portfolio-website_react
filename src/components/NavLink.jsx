const NavLink = ({ text, href, activeLink, activeLinkClick }) => {
  return (
    <li className="navbar__item">
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
