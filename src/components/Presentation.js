import React from "react"

export const Presentation = () => (
  <div className="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div className="column is-2 is-offset-1">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
          <div className="column">
            <h1 class="title has-text-link-dark">
              Hi, I am Leo-Paul, Creative Technologist
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consequuntur sed, architecto quod ducimus doloribus pariatur eius
              natus nobis necessitatibus cumque assumenda odit obcaecati illo
              consectetur nisi mollitia? Sunt, cumque.
            </h2>
          </div>
          <button className="button is-danger">Download Resume</button>
        </div>
      </div>
    </section>
  </div>
)
