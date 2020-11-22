import { Link } from 'gatsby'
import React from 'react'

export default function Navigation() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <Link class="navbar-item">Works</Link>
                    <Link class="navbar-item">Blog</Link>
                    <Link class="navbar-item">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
