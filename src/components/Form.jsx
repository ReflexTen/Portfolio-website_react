import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = ({ setActiveNotification }) => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_684619i',
        'template_g57ft34',
        form.current,
        'n5lTyT54eE5Y6RiiX'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    setTimeout(() => {
      e.target.reset()
    }, 2300)

    setActiveNotification(true)
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="contacts__form form">
      <div className="form__input-box">
        <input
          className="form__input"
          type="text"
          name="user_name"
          placeholder="Имя"
          required
        />
        <input
          className="form__input"
          type="email"
          name="user_email"
          placeholder="Адрес электронной почты"
          required
        />
      </div>

      <div className="form__input-box">
        <input
          className="form__input"
          type="number"
          name="user_number"
          placeholder="Номер мобильного телефона"
          required
        />
        <input
          className="form__input"
          type="text"
          name="letter_subject"
          placeholder="Тема письма"
          required
        />
      </div>

      <textarea
        className="form__textarea"
        name="message"
        cols="30"
        rows="10"
        placeholder="Ваше сообщение"
      ></textarea>
      <button className="form__btn btn" type="submit">
        Отправить сообщение
      </button>
    </form>
  )
}

export default Form
