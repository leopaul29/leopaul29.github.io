import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresentationContainer from "../Container/PresentationContainer"
import ProjectsContainer from "../Container/ProjectsContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PresentationContainer />
      <ProjectsContainer />
    </Layout>
  )
}

export default IndexPage
