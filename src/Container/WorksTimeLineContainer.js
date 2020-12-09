import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
        sort: { fields: frontmatter___order, order: ASC }
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
            timelineclass
          }
        }
      }
    }
  `)

  function printWorksTimeLine(experience) {
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
      <WorksTimeLine
        startdate={startdate}
        title={titleConcat}
        timelineclass={timelineclass}
      />
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
    <div className="timeline is-centered p-5">
      {printTimeLineHeader("Today", "is-primary")}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[7])}
      {printTimeLineHeader("2020", "is-primary", planeArrivalIcon)}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[6])}
      {printTimeLineHeader("2019", "is-primary", planeDepartureIcon)}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[5])}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[4])}
      {printTimeLineHeader("2018", "is-primary")}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[3])}
      {printTimeLineHeader("2017", "is-primary", graduateIcon)}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[2])}
      {printTimeLineHeader("2016", "is-warning")}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[1])}
      {printTimeLineHeader("2015", "is-warning")}
      {printWorksTimeLine(data.allMarkdownRemark.nodes[0])}
      {printTimeLineHeader("University", "is-warning", universityIcon)}
    </div>
  )
}

export default WorksTimeLineContainer
