import React from "react"
import PropTypes from "prop-types"

export const Presentation = ({ heading, htmlDescription, profileImageSource,downloadCVFile }) => (
  <div className="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div className="columns">
            <div className="column is-2 is-offset-1">
              <figure className="image is-128x128">
                <img className="is-rounded" src={profileImageSource} alt="profile_image" />
              </figure>
            </div>
            <div className="column">
              <h1 className="title has-text-link-dark">{heading}</h1>
              <h2
                className="subtitle"
                dangerouslySetInnerHTML={{ __html: htmlDescription }}
              />
              <a
                className="button is-danger"
                href={downloadCVFile}
                download={true}
              >
                Télécharger mon CV
              </a>
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
  profileImageSource: PropTypes.string.isRequired,
  downloadCVFile: PropTypes.any,
}
