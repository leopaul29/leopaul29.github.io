import React from "react"
import PropTypes from "prop-types"

export const WorksTimeLine = ({ startdate, title, timelineclass }) => (
  <div class={`timeline-item ${timelineclass}`}>
    <div class={`timeline-marker ${timelineclass}`}></div>
    <div class={`timeline-marker ${timelineclass} is-image is-32x32`}>
      <img src="https://bulma.io/images/placeholders/32x32.png" alt="placeholders"/>
    </div>
    <div class="timeline-content">
      <p class="heading">{startdate}</p>
      <p>{title}</p>
    </div>
  </div>
)

Presentation.propTypes = {
  startdate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timelineclass: PropTypes.string.isRequired,
}
