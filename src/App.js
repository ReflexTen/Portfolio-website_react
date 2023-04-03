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

function App() {
  const menuIcon = useRef()
  const navBar = useRef()

  const portfolio = useRef()
  const contacts = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()

  function loh() {
    menuIcon.current.classList.toggle('active-menu')
    navBar.current.classList.toggle('active')
  }

  const [activeLink, setActiveLink] = useState('Главный экран')

  const activeLinkHandler = link => {
    setActiveLink(link)
  }

  return (
    <div className="App">
      <Header
        menuIcon={menuIcon}
        navBar={navBar}
        loh={loh}
        activeLink={activeLink}
        activeLinkClick={activeLinkHandler}
      />

      <Main activeLinkScroll={activeLinkHandler}>
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Portfolio portfolio={portfolio} />
        <Contacts contacts={contacts} />
      </Main>

      <Footer />
    </div>
  )
}

export default App
