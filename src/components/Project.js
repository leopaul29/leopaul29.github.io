import { Link } from "gatsby"
import React from "react"

const Project = ({ title, techno, htmlDescription, github, live }) => {
  return (
    <div class="card">
      <div class="card-content">
        <p class="title">{title}</p>
        <p class="subtitle">{techno}</p>
        <p dangerouslySetInnerHTML={{ __html: htmlDescription }} />
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            View on{" "}
            <Link to={github} target="_blank">
              Github
            </Link>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            Live{" "}
            <Link to={live} target="_blank">
              here
            </Link>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Project
