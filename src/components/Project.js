import React from "react"

const Project = ({ title, techno, htmlDescription, github, live }) => {
  var htmlLive = (
    <p className="card-footer-item">
      <span>
        Live{" "}
        <a href={live} target="_blank" rel="noreferrer">
          here
        </a>
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
            <a href={github} target="_blank" rel="noreferrer">
              Github
            </a>
          </span>
        </p>
        {htmlLive}
      </footer>
    </div>
  )
}

export default Project
