import { Link } from "gatsby"
import React from "react"

export default function Navigation() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link class="navbar-item" to="/works">
            Works
          </Link>
          <Link class="navbar-item" to="#">
            Blog
          </Link>
          <Link class="navbar-item" to="#">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
