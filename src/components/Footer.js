import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GatsbyLogo from "../images/gatsby-logo.svg"

export default function Footer() {
  const githubURL = "https://github.com/leopaul29"
  const linkedinURL =
    "https://www.linkedin.com/in/l%C3%A9o-paul-martin-882158a9/"
  const twitterURL = "https://twitter.com/leopaul29"
  const gatsbyURL = "https://www.gatsbyjs.com"
  const bulmaURM = "https://bulma.io"
  const madeWithBulmaImageURL =
    "https://bulma.io/images/made-with-bulma--white.png"

  return (
    <footer className="footer has-background-info has-text-centered">
      <div className="container is-narrow">
        <div className="social-icons">
          <p className="field">
            <a
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="button is-medium is-white is-outlined"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </span>
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
              className="button is-medium is-white is-outlined"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </span>
            </a>
            <a
              href={twitterURL}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="button is-medium is-white is-outlined"
            >
              <span className="icon  is-small">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </span>
            </a>
            <a
              className="button is-medium is-white is-outlined"
              href="mailto:leopaulmartin@hotmail.fr"
              aria-label="Contact"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={["fas", "at"]} />
              </span>
            </a>
          </p>
        </div>
        <div className="copyright">
          <p>
            <a
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              className="has-text-white"
            >
              © {new Date().getFullYear()}, Design and Built by Léo-Paul MARTIN
            </a>
          </p>
        </div>
        <div className="made-with columns is-centered is-align-items-center mt-3">
          <div className="column is-narrow">
            <a
              href={bulmaURM}
              target="_blank"
              rel="noreferrer"
              aria-label="Bulma"
            >
              <img
                src={madeWithBulmaImageURL}
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
          <div className="column is-narrow">
            <a
              href={gatsbyURL}
              target="_blank"
              rel="noreferrer"
              aria-label="Gatsby"
            >
              <img
                src={GatsbyLogo}
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
