import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Presentation } from "../components/Presentation"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/(profile)/" }) {
        id
        html
        excerpt
        frontmatter {
          heading
          picture {
            childImageSharp {
              fixed(width: 150) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const { frontmatter, html, excerpt } = data.markdownRemark
  const { heading, picture } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <Presentation heading={frontmatter.heading} htmlDescription={excerpt} />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/experiences/">Go to experiences page</Link> <br />
      <Link to="/skills/">Go to skills page</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
