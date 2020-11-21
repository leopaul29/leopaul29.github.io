import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(skills)/" } }
      ) {        
        nodes {
          id
          frontmatter {
            title
            level
          }
          html
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Skills" />
      <div>
        <h1>My skills</h1>
        <ol>
          {
            data.allMarkdownRemark.nodes.map(skill => {
              return (
                  <li key={skill.id}>
                    {skill.frontmatter.title} - {skill.frontmatter.level}
                  </li>
              )
            })
          }
        </ol>
      </div>
    </Layout>
  )
}

export default ExperiencesPage
