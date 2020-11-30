import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorksPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(experiences)/" } }
        sort: { fields: frontmatter___order }
      ) {
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
      <SEO title="Works" />
      <div>
        <h1>My Works</h1>
        <ol>
          {data.allMarkdownRemark.nodes.map(experience => {
            return (
              <Link to={`#${experience.id}`}>
                <li key={experience.id}>
                  {experience.frontmatter.contract}{" "}
                  {experience.frontmatter.title} at{" "}
                  {experience.frontmatter.company}
                </li>
              </Link>
            )
          })}
        </ol>
      </div>
      <div>
        {data.allMarkdownRemark.nodes.map(experience => {
          return (
            <div key={experience.id}>
              <h1 align="center" id={experience.id}>
                {experience.frontmatter.title} -{" "}
                {experience.frontmatter.company}
              </h1>
              <h2>
                <span role="img" aria-label="calendar">
                  📆
                </span>{" "}
                {experience.frontmatter.startdate} -{" "}
                {experience.frontmatter.enddate}
              </h2>
              <h3>
                <span role="img" aria-label="globe">
                  🌍
                </span>{" "}
                {experience.frontmatter.place}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: experience.html }} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default WorksPage
