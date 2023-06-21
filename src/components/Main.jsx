const Main = props => {
  window.onscroll = () => {
    props.children.forEach(sec => {
      const secCurrent = Object.values(sec.props)[0].current
      const name = sec.type.name

      const text =
        name == 'Home'
          ? 'Главный экран'
          : name == 'About'
          ? 'Обо мне'
          : name == 'Portfolio'
          ? 'Последние проекты'
          : name == 'Contacts'
          ? 'Связаться со мной'
          : ''

      const top = window.scrollY
      const offset = secCurrent.offsetTop - 200
      const height = secCurrent.offsetHeight

      if (top >= offset && top < offset + height) {
        props.activeLinkScroll(text)
      }
    })
  }

  return <main className="main">{props.children}</main>
}

export default Main
