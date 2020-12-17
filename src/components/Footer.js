import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  const githubURL = "https://github.com/leopaul29"
  const linkedinURL =
    "https://www.linkedin.com/in/l%C3%A9o-paul-martin-882158a9/"
  const gatsbyURL = "https://www.gatsbyjs.com"
  const bulmaURM = "https://bulma.io"
  const madeWithBulmaImageURL = "https://bulma.io/images/made-with-bulma.png"

  return (
    <footer className=" footer">
      <div className="content has-text-centered">
        <p>
          <a href={githubURL} target="_blank" rel="noreferrer">
            <span class="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </span>
          </a>
          <a href={linkedinURL} target="_blank" rel="noreferrer">
            <span class="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </span>
          </a>
          <a href="mailto:leopaulmartin@hotmail.fr">
            <span class="icon pr-2 is-large">
              <FontAwesomeIcon icon={["fas", "at"]} size="2x" />
            </span>
          </a>
        </p>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href={gatsbyURL} target="_blank" rel="noreferrer">
            Gatsby
          </a>{" "}
          and{" "}
          <a href={bulmaURM} target="_blank" rel="noreferrer">
            <img
              src={madeWithBulmaImageURL}
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
        </p>
      </div>
    </footer>
  )
}
