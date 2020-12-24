import React from "react"

export default function Contact() {
  return (
    <section className="section my-5">
      <div className="container">
        <h2 className="title is-2 has-text-link-dark has-text-centered">
          Get In Touch
        </h2>
        <div className="columns  is-centered">
          <div className="column is-half has-text-centered">
            <p className="is-size-5 pb-5">
              I am currently looking for new opportunities in web development
              for 2021 as long term job in Japan. Whether you have a question or
              just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              className="button is-link is-medium is-outlined is-rounded"
              href="mailto:leopaulmartin@hotmail.fr"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
