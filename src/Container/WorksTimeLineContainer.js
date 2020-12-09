import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { WorksTimeLine } from "../components/WorksTimeLine"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserGraduate,
  faUniversity,
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons"

const WorksTimeLineContainer = () => {
  const graduateIcon = (
    <span class="icon pr-2 is-large">
      <FontAwesomeIcon icon={faUserGraduate} size="lg" />
    </span>
  )
  const universityIcon = (
    <span class="icon pr-2 is-large">
      <FontAwesomeIcon icon={faUniversity} size="lg" />
    </span>
  )
  const planeDepartureIcon = (
    <span class="icon pr-2 is-large">
      <FontAwesomeIcon icon={faPlaneDeparture} size="lg" />
    </span>
  )
  const planeArrivalIcon = (
    <span class="icon pr-2 is-large ">
      <FontAwesomeIcon icon={faPlaneArrival} size="lg" />
    </span>
  )

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
            contract
            timelineclass
          }
        }
      }
    }
  `)

  function printWorksTimeLine(index) {
    const experience = data.allMarkdownRemark.nodes[index]
    const {
      startdate,
      contract,
      title,
      company,
      timelineclass,
    } = experience.frontmatter
    var titleConcat = contract + " " + title + " at " + company
    if (company === "") {
      titleConcat = title
    }

    return (
      <Link to={`#work${index}`}>
        <WorksTimeLine
          startdate={startdate}
          title={titleConcat}
          timelineclass={timelineclass}
        />
      </Link>
    )
  }

  function printTimeLineHeader(title, timelineclass, icon) {
    return (
      <header className="timeline-header">
        <span className={`tag is-medium ${timelineclass}`}>
          {icon} {title}
        </span>
      </header>
    )
  }

  return (
    <div className="timeline">
      {printTimeLineHeader("Today", "is-primary")}
      {printWorksTimeLine(0)}
      {printTimeLineHeader("2020", "is-primary", planeArrivalIcon)}
      {printWorksTimeLine(1)}
      {printTimeLineHeader("2019", "is-primary", planeDepartureIcon)}
      {printWorksTimeLine(2)}
      {printWorksTimeLine(3)}
      {printTimeLineHeader("2018", "is-primary")}
      {printWorksTimeLine(4)}
      {printTimeLineHeader("2017", "is-primary", graduateIcon)}
      {printWorksTimeLine(5)}
      {printTimeLineHeader("2016", "is-warning")}
      {printWorksTimeLine(6)}
      {printTimeLineHeader("2015", "is-warning")}
      {printWorksTimeLine(7)}
      {printTimeLineHeader("University", "is-warning", universityIcon)}
    </div>
  )
}

export default WorksTimeLineContainer
