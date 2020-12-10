import { Link } from "gatsby"
import React from "react"

const Project = ({ title, techno, htmlDescription, github, live }) => {
  var htmlLive = (
    <p className="card-footer-item">
      <span>
        Live{" "}
        <Link to={live} target="_blank">
          here
        </Link>
      </span>
    </p>
  )

  if (live === "") htmlLive = ""

  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="subtitle">{techno}</p>
        <p dangerouslySetInnerHTML={{ __html: htmlDescription }} />
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            View on{" "}
            <Link to={github} target="_blank">
              Github
            </Link>
          </span>
        </p>
        {htmlLive}
      </footer>
    </div>
  )
}

export default Project
