import { Link } from "gatsby"
import React from "react"

const Navigation = () => {
  return (
    <nav className="navbar mt-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          to="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/#projects">
            Projects
          </Link>
          {/* <Link className="navbar-item" to="/works">
            Works
          </Link> */}
          <a
            className="navbar-item"
            href="https://lpm.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>

          <div class="navbar-item">
            <div class="field ">
              <p class="control">
                <a
                  className="button is-link is-outlined is-rounded"
                  href="mailto:leopaulmartin@hotmail.fr"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
