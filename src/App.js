import React, { useState } from 'react'
import { useRef } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Contacts from './components/sections/Contacts'
import './styles/style.scss'

function App() {
  const [activeLink, setActiveLink] = useState('Главный экран')
  const [activeButtonMenu, setActiveButtonMenu] = useState(false)

  const portfolio = useRef()
  const contacts = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()

  const activeLinkHandler = link => {
    setActiveLink(link)
  }

  return (
    <div className="App">
      <Header
        activeButtonMenu={activeButtonMenu}
        setActiveButtonMenu={setActiveButtonMenu}
        // ///////////////
        activeLink={activeLink}
        setActiveLink={setActiveLink}
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
