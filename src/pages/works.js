import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/works.css"

const WorksPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(experiences)/" }
          frontmatter: { visibleWork: { eq: true } }
        }
        sort: { fields: frontmatter___order, order: DESC }
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
      <div className="columns">
        <aside class="menu">
          <p class="menu-label">Works</p>
          <nav id="work-list">
            <ul class="menu-list">
              {data.allMarkdownRemark.nodes.map((experience, index) => {
                return (
                  <li key={experience.id}>
                    <Link to={`#work${index}`}>
                      {experience.frontmatter.contract}{" "}
                      {experience.frontmatter.title} at{" "}
                      {experience.frontmatter.company}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        <div className="column content">
          {data.allMarkdownRemark.nodes.map((experience, index) => {
            return (
              <section class="section" key={experience.id}>
                <h1 align="center" id={`work${index}`}>
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
              </section>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default WorksPage
