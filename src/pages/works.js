import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/works.css"
import WorksTimeLineContainer from "../Container/WorksTimeLineContainer"

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

  function printWorksTimeLine(experience, index) {
    const {
      id,
      title,
      company,
      startdate,
      enddate,
      place,
    } = experience.frontmatter
    return (
      <section className="section" key={id}>
        <h1 align="center" id={`work${index}`}>
          {title} - {company}
        </h1>
        <h2>
          <span role="img" aria-label="calendar">
            📆
          </span>{" "}
          {startdate} - {enddate}
        </h2>
        <h3>
          <span role="img" aria-label="globe">
            🌍
          </span>{" "}
          {place}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: experience.html }} />
      </section>
    )
  }

  return (
    <Layout>
      <SEO title="Works" />
      <div className="columns">
        <aside className="column is-4 is-narrow-mobile is-fullheight section is-hidden-mobile sidebar">
          <p className="menu-label">Works</p>
          <WorksTimeLineContainer />
          <div className="mt-5 has-text-centered">
            <Link to="/">
              <button className="button is-info is-rounded">
                Go back to the homepage
              </button>
            </Link>
          </div>
        </aside>
        <div className="column content">
          {data.allMarkdownRemark.nodes.map((experience, index) => {
            return printWorksTimeLine(experience, index)
          })}
        </div>
      </div>
    </Layout>
  )
}

export default WorksPage
