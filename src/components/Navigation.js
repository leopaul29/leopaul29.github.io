import { Link } from "gatsby"
import React from "react"
import avatar from "../images/octocat-1607453320426.png"

const Navigation = () => {
  return (
    <nav className="navbar py-3" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navmenu">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              href="https://myoctocat.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logo__img" src={avatar} alt="logo" />
            </a>
          </div>

          <div id="navbarBasicExample" className="">
            <div className="navmenu-end">
              <Link className="navbar-item" to="/#top-projects">
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

              <div className="navbar-item">
                <div className="field ">
                  <p className="control">
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
        </div>
      </div>
    </nav>
  )
}

export default Navigation
