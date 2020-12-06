/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navigation from "./Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <head>
        <script
          src="https://kit.fontawesome.com/fabad74e7d.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <div className="container">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
