import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  const githubURL = "https://github.com/leopaul29"
  const linkedinURL =
    "https://www.linkedin.com/in/l%C3%A9o-paul-martin-882158a9/"
  const gatsbyURL = "https://www.gatsbyjs.com"
  const gatsbyImageURL =
    "https://www.gatsbyjs.com/static/2c9d8be34028a568f89f36ef143f3e17/a3df1/local-futura.jpg"
  const bulmaURM = "https://bulma.io"
  const madeWithBulmaImageURL = "https://bulma.io/images/made-with-bulma.png"

  return (
    <footer className=" footer">
      <div className="content has-text-centered">
        <div>
          <a href={githubURL} target="_blank" rel="noreferrer">
            <span className="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </span>
          </a>
          <a href={linkedinURL} target="_blank" rel="noreferrer">
            <span className="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </span>
          </a>
          <a href="mailto:leopaulmartin@hotmail.fr">
            <span className="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fas", "at"]} size="2x" />
            </span>
          </a>
        </div>
        <div className="my-4">
          <p>
            <a href={githubURL} target="_blank" rel="noreferrer">
              © {new Date().getFullYear()}, Design and Built by Léo-Paul MARTIN
            </a>
          </p>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <a href={gatsbyURL} target="_blank" rel="noreferrer">
            <img
              src={gatsbyImageURL}
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
          <a href={bulmaURM} target="_blank" rel="noreferrer">
            <img
              src={madeWithBulmaImageURL}
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
