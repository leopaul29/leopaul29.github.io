import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresentationContainer from "../Container/PresentationContainer"
import ProjectsContainer from "../Container/ProjectsContainer"
import Contact from "../components/Contact"
// import fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PresentationContainer />
      <ProjectsContainer />
      <Contact />
    </Layout>
  )
}

export default IndexPage
