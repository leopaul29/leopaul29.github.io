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
            startdate
            place
            enddate
            contract
          }
          html
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
                                <h1 align="center">
                                    {experience.frontmatter.title} - {' '}
                                    {experience.frontmatter.company}
                                </h1>
                                <h2>📆 {experience.frontmatter.startdate} - {experience.frontmatter.enddate}</h2>
                                <h3>🌍 {experience.frontmatter.place}</h3>
                                <p dangerouslySetInnerHTML={{__html: experience.html}} />
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default ExperiencesPage
