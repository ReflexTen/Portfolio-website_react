import React from 'react'
import logo from './../images/logo/my-logo.png'
import navLinkList from './helpers/navLinkList'
import NavLink from './NavLink'
///////////////////////////////////////////////

const Header = ({ menuIcon, navBar, loh, activeLink, activeLinkClick }) => {
  return (
    <header className="header">
      <a className="logo" href="#">
        <img src={logo} alt="" />
      </a>

      <div ref={menuIcon} className="menu-icon" onClick={loh}>
        <span className="menu-icon__line"></span>
      </div>

      <nav ref={navBar} className="navbar">
        <ul className="navbar__list">
          {navLinkList.map(link => (
            <NavLink
              key={link.id}
              text={link.text}
              href={link.href}
              activeLink={activeLink}
              activeLinkClick={activeLinkClick}
              loh={loh}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
