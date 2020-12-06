import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresentationContainer from "../Container/PresentationContainer"
import WorksTimeLineContainer from "../Container/WorksTimeLineContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PresentationContainer />
      <WorksTimeLineContainer />
    </Layout>
  )
}

export default IndexPage
