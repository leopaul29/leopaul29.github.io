import React from "react"
import "../css/Contact.css"

export default function Contact() {
  return (
    <section className="section  has-text-white has-background-light mt-6">
      <div
        className="columns is-align-items-center has-text-centered has-background-link-dark mx-6 py-3"
        id="contact"
      >
        <div className="column is-one-third ">
          <h2 className="title has-text-white">Get In Touch</h2>
        </div>
        <div className="column is-one-third">
          <p className="is-size-5">
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </div>
        <div className="column is-one-third">
          <a
            className="button is-link is-medium is-inverted is-outlined is-rounded"
            href="mailto:leopaulmartin@hotmail.fr"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  )
}
