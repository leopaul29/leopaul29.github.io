import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/works.css"
import WorksTimeLineContainer from "../Container/WorksTimeLineContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const WorksPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(experiences)/" } }
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
  const arrowLeftIcon = (
    <span class="icon mr-3 is-large ">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
    </span>
  )

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
          <div className="mt-5 has-text-centered">
            <Link to="/">
              <button className="button is-info is-rounded">
                {arrowLeftIcon}Go back to the homepage
              </button>
            </Link>
          </div>
          <p className="menu-label">Works</p>
          <WorksTimeLineContainer />
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
