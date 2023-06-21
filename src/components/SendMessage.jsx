import React from 'react'
import { useRef } from 'react'

const SendMessage = ({ activeNotification, setActiveNotification }) => {
  const line = useRef()

  if (activeNotification) {
    let lineTime = setInterval(() => {
      const widthLine = line.current.offsetWidth

      if (widthLine) {
        line.current.style.width = widthLine - 1 + 'px'
      } else {
        clearInterval(lineTime)
        console.log('stop')
        setActiveNotification(false)

        setTimeout(() => {
          line.current.style.width = 100 + '%'
        }, 400)
      }
    }, 10)
  }

  return (
    <div
      className={`notification ${
        activeNotification ? 'notification--active' : ''
      }`}
    >
      <i className="bx bx-check-circle"></i>
      <p className="notification__text">Сообщение отправлено</p>
      <div ref={line} className="line"></div>
    </div>
  )
}

export default SendMessage
