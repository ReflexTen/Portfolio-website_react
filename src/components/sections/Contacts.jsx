import Fade from 'react-reveal/Fade'
import Form from '../Form'
import SendMessage from '../SendMessage'
import { useState } from 'react'

const Contacts = ({ contacts }) => {
  const properties = {
    duration: 3000,
    distance: '80px',
    delay: 200,
  }

  const [activeNotification, setActiveNotification] = useState(false)

  return (
    <div>
      <section ref={contacts} className="contacts section" id="contacts">
        <Fade top {...properties}>
          <h2 className="contacts__heading heading">
            Связаться со <span>мной</span>
          </h2>
        </Fade>
        <Fade bottom {...properties}>
          <Form setActiveNotification={setActiveNotification} />
        </Fade>
      </section>

      <SendMessage
        activeNotification={activeNotification}
        setActiveNotification={setActiveNotification}
      />
    </div>
  )
}

export default Contacts
