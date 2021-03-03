import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresentationContainer from "../Container/PresentationContainer"
import Contact from "../components/Contact"
// import fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import AllReactProjectsContainer from "../Container/AllReactProjectsContainer"
import HackathonProjectsContainer from "../Container/HackathonProjectsContainer"
library.add(fab, fas)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PresentationContainer />
      <AllReactProjectsContainer/>
      {/* <AllProjectsContainer/> */}
       {/* <ReactProjectContainer/> */}
      <HackathonProjectsContainer />
      <Contact />
    </Layout>
  )
}

export default IndexPage
