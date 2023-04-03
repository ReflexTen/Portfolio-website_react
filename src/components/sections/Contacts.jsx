import { useRef } from 'react'

import React from 'react'
const Contacts = ({ contacts }) => {
  return (
    <section ref={contacts} className="contacts section" id="contacts">
      <h2 className="contacts__heading heading">
        Contact <span>Me!</span>
      </h2>

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
    </section>
  )
}

export default Contacts
