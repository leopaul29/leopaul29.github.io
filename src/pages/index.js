import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresentationContainer from "../Container/PresentationContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PresentationContainer />
    </Layout>
  )
}

export default IndexPage
