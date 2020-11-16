import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencesPage = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          excerpt
          frontmatter {
            company
            order
            title
          }
        }
      }
    }
  `)

    return (
        <Layout>
            <SEO title="Experiences" />
            <div>
                {
                    data.allMarkdownRemark.nodes.map(experience => {
                        return (
                            <div key={experience.id}>
                                <h4>
                                    {experience.frontmatter.title} - {' '}
                                    {experience.frontmatter.company}
                                </h4>
                                <p>{experience.excerpt}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default ExperiencesPage
