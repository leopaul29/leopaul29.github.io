import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Presentation } from "../components/Presentation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Presentation/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/experiences/">Go to experiences page</Link> <br />
    <Link to="/skills/">Go to skills page</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
