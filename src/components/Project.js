import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = ({ title, techno, htmlDescription, github, live }) => {
  var htmlGithub = (
    <span>
      <a href={github} target="_blank" rel="noreferrer" aria-label="github link">
        <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
      </a>
    </span>
  )
  if (!github) htmlGithub = ""

  var htmlLive = (
    <span>
      <a href={live} target="_blank" rel="noreferrer" aria-label="live link">
        <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="lg" />
      </a>
    </span>
  )
  if (!live) htmlLive = ""

  const technoList = techno.split(",")
  const technoTags = []
  for (let i = 0; i < technoList.length; i++) {
    technoTags.push(
      <span key={i} className="tag is-info is-light">
        {technoList[i]}
      </span>
    )
  }

  return (
    <article className="card">
      <div className="card-content">
        <p className="title">{title}</p>
        <div className="tags">{technoTags}</div>
        <p dangerouslySetInnerHTML={{ __html: htmlDescription }} />
      </div>
      <footer className="card-footer ">
        <div className="card-footer-item is-flex is-justify-content-space-evenly">
          {htmlGithub}
          {htmlLive}
        </div>
      </footer>
    </article>
  )
}

export default Project
