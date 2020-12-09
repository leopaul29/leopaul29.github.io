import React from "react"
import PropTypes from "prop-types"

export const WorksTimeLine = ({ startdate, title, timelineclass }) => (
  <div className={`timeline-item ${timelineclass}`}>
    <div className={`timeline-marker ${timelineclass}`}></div>
    <div className={`timeline-marker ${timelineclass} is-image is-32x32`}>
      <img
        src="https://bulma.io/images/placeholders/32x32.png"
        alt="placeholders"
      />
    </div>
    <div className="timeline-content">
      <p className="heading">{startdate}</p>
      <p>{title}</p>
    </div>
  </div>
)

Presentation.propTypes = {
  startdate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timelineclass: PropTypes.string.isRequired,
}
