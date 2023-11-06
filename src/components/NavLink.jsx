const NavLink = ({
  text,
  href,
  activeLink,
  setActiveLink,
  activeButtonMenu,
  setActiveButtonMenu,
}) => {
  return (
    <li
      className={`navbar__item ${
        activeLink == text ? 'navbar__item--active' : ''
      }`}
    >
      <a
        className="navbar__link"
        href={href}
        onClick={() => {
          setActiveLink(text)
          setActiveButtonMenu(!activeButtonMenu)
        }}
      >
        {text}
      </a>
    </li>
  )
}

export default NavLink
