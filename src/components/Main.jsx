import Home from './sections/Home'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Contacts from './sections/Contacts'

const Main = props => {
  console.log(props.children[0].type.name)
  return (
    <main className="main">
      {props.children}

      {/* <Home />

      <About />

      <Portfolio />

      <Contacts /> */}
    </main>
  )
}

export default Main
