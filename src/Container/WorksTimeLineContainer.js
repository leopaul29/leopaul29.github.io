import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WorksTimeLine } from "../components/WorksTimeLine"

const WorksTimeLineContainer = () => {
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
            timelineclass
          }
        }
      }
    }
  `)

  return (
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">End</span>
      </header>
      {data.allMarkdownRemark.nodes.map((experience, index) => {
        let titleConcat =
          experience.frontmatter.contract +
          " " +
          experience.frontmatter.title +
          " at " +
          experience.frontmatter.company
        if (index > 0) {
          return (
            <>
              <header class="timeline-header">
                <span class="tag is-primary">2017</span>
              </header>
              <WorksTimeLine
                startdate={experience.frontmatter.startdate}
                title={titleConcat}
                timelineclass={experience.frontmatter.timelineclass}
              />
            </>
          )
        } else {
          return (
            <>
              <WorksTimeLine
                startdate={experience.frontmatter.startdate}
                title={titleConcat}
                timelineclass={experience.frontmatter.timelineclass}
              />
            </>
          )
        }
      })}
      <header class="timeline-header"><span class="icon"><i class="fas fa-user-graduate"></i>
</span>
        <span class="tag is-medium is-primary">
          Start
        </span>
      </header>
    </div>
  )
}

export default WorksTimeLineContainer
