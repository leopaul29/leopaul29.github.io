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
              fixed(width: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const { frontmatter, html, excerpt } = data.markdownRemark
  const { heading, picture } = frontmatter
  const { fixed } = picture.childImageSharp

  return (
    <Layout>
      <SEO title="Home" />
      <Presentation
        heading={frontmatter.heading}
        htmlDescription={excerpt}
        fixed={fixed}
      />
    </Layout>
  )
}

export default IndexPage
