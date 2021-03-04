import React from "react"
import PropTypes from "prop-types"
import hero from "../images/hero.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Presentation = ({
  title,
  subtitle,
  htmlDescription,
  avatar,
  CVFRfile,
  ResumeENfile,
  RirekishoJPfile,
  ShokumukeirekishoJPfile,
}) => (
  <section className="hero is-white has-text-centered pt-3">
    <div className="container">
      <div className="hero-body">
        <div className="columns">
          {/* <div className="column is-3">
            <figure className="image is-square">
              <a href="https://myoctocat.com/" target="_blank" rel="noreferrer">
                <img className="is-rounded" src={avatar} alt="profile_image" />
              </a>
            </figure>
          </div> */}
          <div className="column has-text-centered">
            <h1 className="title is-1">{title}</h1>
            <h2 className="subtitle is-4 mt-3">{subtitle}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: htmlDescription }}
            ></div>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button is-link is-outlined is-rounded"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Download my Resume</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={["fas", "angle-down"]} />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href={CVFRfile} download={true} className="dropdown-item">
                    CV Français
                  </a>
                  <a
                    href={ResumeENfile}
                    download={true}
                    className="dropdown-item"
                  >
                    English Resume
                  </a>
                  <hr className="dropdown-divider" />
                  <a
                    href={RirekishoJPfile}
                    download={true}
                    className="dropdown-item"
                  >
                    履歴書
                  </a>
                  <a
                    href={ShokumukeirekishoJPfile}
                    download={true}
                    className="dropdown-item"
                  >
                    職務経歴書
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="columns is-centered is-mobile">
          <div className="column is-7">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  htmlDescription: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  downloadCVFile: PropTypes.any,
}
