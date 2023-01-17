import React from 'react'
import './Background.css'

const Background = () => {
  return (
    <section className="stage">
      <div className="sky">
        <div className="cloud" />
        <div className="cloud" />
      </div>
      <div className="train">
        <div className="wagon" />
        <div className="wagon" />
        <div className="wagon" />
        <div className="locomotive">
          <div className="cabin" />
          <div className="motor" />
          <div className="chimney">
            <div className="smoke" />
          </div>
          <div className="light" />
        </div>
      </div>
    </section>

  )
}

export default Background