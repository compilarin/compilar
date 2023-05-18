import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact" id='Contact'>
        <div className="contact-wrapper">
        <div className="contact-left">
            <h1>Get in Touch</h1>
            <p>Have a query? Get connected to our support team.<br/>
            We'll get back to you ASAP.</p>
        </div>


        <div className="contact-right">
        <div class="contact-container">
    <form class="form">
      <div class="input">
          <input required="" autocomplete="off" type="text"/>
          <label for="name">Name</label>
      </div>

      <div class="input">
          <input required="" autocomplete="off" name="email" type="text"/>
          <label for="email">E-mail</label>
      </div>

      <div class="input">
          <textarea required="" cols="30" rows="1" id="message"></textarea>
          <label for="message">Message</label>
      </div>
      <button>Send message →</button>
    </form>
</div>

        </div>
        </div>
    </div>
  )
}

export default Contact