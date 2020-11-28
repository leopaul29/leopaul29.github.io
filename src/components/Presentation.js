import React from "react"
import PropTypes from "prop-types"

export const Presentation = ({ heading, htmlDescription }) => (
  <div className="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div className="columns">
            <div className="column is-2 is-offset-1">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </div>
            <div className="column">
              <h1 className="title has-text-link-dark">{heading}</h1>
              <h2
                className="subtitle"
                dangerouslySetInnerHTML={{ __html: htmlDescription }}
              />
              <a className="button is-danger">Télécharger mon CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

Presentation.propTypes = {
  headging: PropTypes.string.isRequired,
  htmlDescription: PropTypes.string.isRequired,
}
