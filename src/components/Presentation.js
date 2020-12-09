import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

export const Presentation = ({
  heading,
  htmlDescription,
  profileImageSource,
  downloadCVFile,
}) => (
  <div className="container">
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-2 is-offset-1">
              <figure className="image is-128x128">
                <Link to="https://myoctocat.com/" target="_blank">
                  <img
                    className="is-rounded"
                    src={profileImageSource}
                    alt="profile_image"
                  />
                </Link>
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
  heading: PropTypes.string.isRequired,
  htmlDescription: PropTypes.string.isRequired,
  profileImageSource: PropTypes.string.isRequired,
  downloadCVFile: PropTypes.any,
}
