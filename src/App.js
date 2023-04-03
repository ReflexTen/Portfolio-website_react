import React, { useState } from 'react'
import { useRef } from 'react'

import './styles/style.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Contacts from './components/sections/Contacts'

// window.onscroll = () => {
// console.log(window)
// }

function App() {
  const menuIcon = React.createRef()
  const navBar = React.createRef()
  const about = useRef()
  const home = useRef()
  const portfolio = useRef()
  const contacts = useRef()

  function loh() {
    menuIcon.current.classList.toggle('active-menu')
    navBar.current.classList.toggle('active')
  }

  const [activeLink, setActiveLink] = useState('Home')

  const activeLinkHandler = link => {
    setActiveLink(link)
  }

  setTimeout(() => {
    // console.log(home.current)
    // console.log(about)

    window.onscroll = () => {
      const top = window.scrollY
      const offsetAbout = about.current.offsetTop - 150
      const heightAbout = about.current.offsetHeight

      const offsetHome = home.current.offsetTop - 150
      const heightHome = home.current.offsetHeight

      const offsetPortfolio = portfolio.current.offsetTop - 150
      const heightPortfolio = portfolio.current.offsetHeight

      const offsetContacts = contacts.current.offsetTop - 200
      const heightContacts = contacts.current.offsetHeight

      if (top >= offsetHome && top < offsetHome + heightHome) {
        activeLinkHandler('Home')
      }
      if (top >= offsetAbout && top < offsetAbout + heightAbout) {
        activeLinkHandler('About')
      }
      if (top >= offsetPortfolio && top < offsetPortfolio + heightPortfolio) {
        activeLinkHandler('Portfolio')
      }
      if (top >= offsetContacts && top < offsetContacts + heightContacts) {
        activeLinkHandler('Contacts')
      }
    }
  }, 1)

  return (
    <div className="App">
      <Header
        menuIcon={menuIcon}
        navBar={navBar}
        loh={loh}
        homeRef={home}
        aboutRef={about}
        activeLink={activeLink}
        activeLinkClick={activeLinkHandler}
      />

      <Main>
        <Home homeRef={home} />
        <About aboutRef={about} />
        <Portfolio portfolio={portfolio} />
        <Contacts contacts={contacts} />
      </Main>

      <Footer />
    </div>
  )
}

export default App
