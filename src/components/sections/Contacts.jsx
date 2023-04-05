import React from 'react'
import Fade from 'react-reveal/Fade'
const Contacts = ({ contacts }) => {
  const properties = {
    duration: 3000,
    distance: '80px',
    delay: 200,
  }

  return (
    <section ref={contacts} className="contacts section" id="contacts">
      <Fade top {...properties}>
        <h2 className="contacts__heading heading">
          Contact <span>Me!</span>
        </h2>
      </Fade>
      <Fade bottom {...properties}>
        <form className="contacts__form form" action="#">
          <div className="form__input-box">
            <input
              className="form__input"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="form__input"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form__input-box">
            <input
              className="form__input"
              type="number"
              placeholder="Mobile Number"
              required
            />
            <input
              className="form__input"
              type="text"
              placeholder="Email Subject"
              required
            />
          </div>

          <textarea
            className="form__textarea"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="form__btn btn" type="submit">
            Send Message
          </button>
        </form>
      </Fade>
    </section>
  )
}

export default Contacts
