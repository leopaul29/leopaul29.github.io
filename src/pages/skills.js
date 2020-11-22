import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          excerpt
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
        <h1 class="title is-1">My skills</h1>
        <div class="content">
          <ol>
            {
              data.allMarkdownRemark.nodes.map(skill => {
                return (
                    <div key={skill.id}>
                      <h4 class="title is-4">
                      {skill.frontmatter.title} - {skill.frontmatter.level}
                      </h4>
                      <p>
                      {skill.frontmatter.excerpt}
                      </p>
                      <p dangerouslySetInnerHTML={{__html: skill.html}} />
                    </div>
                )
              })
            }
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default ExperiencesPage
