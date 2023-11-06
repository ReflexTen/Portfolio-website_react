import React from 'react'
import logo from './../images/logo/my-logo.png'
import navLinkList from './helpers/navLinkList'
import NavLink from './NavLink'
///////////////////////////////////////////////

const Header = ({
  // menuIcon,
  // navBar,
  // elementActivation,

  activeButtonMenu,
  setActiveButtonMenu,

  activeLink,
  setActiveLink,
}) => {
  return (
    <header className="header">
      <a className="logo" href="#">
        <img src={logo} alt="" />
      </a>

      <div
        className={`menu-icon ${activeButtonMenu ? 'active-menu' : ''}`}
        onClick={() => setActiveButtonMenu(!activeButtonMenu)}
      >
        <span className="menu-icon__line"></span>
      </div>

      <nav className={`navbar ${activeButtonMenu ? 'active' : ''}`}>
        <ul className="navbar__list">
          {navLinkList.map(link => (
            <NavLink
              key={link.id}
              text={link.text}
              href={link.href}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              ///////////////////////
              activeButtonMenu={activeButtonMenu}
              setActiveButtonMenu={setActiveButtonMenu}
              // elementActivation={elementActivation}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
