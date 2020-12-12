import React from "react"
import PropTypes from "prop-types"

export const WorksTimeLine = ({
  startdate,
  title,
  timelineclass,
  imageSource,
}) => (
  <div className={`timeline-item ${timelineclass}`}>
    <div className={`timeline-marker ${timelineclass}`}></div>
    <div className={`timeline-marker ${timelineclass} is-image is-48x48`}>
      <img src={imageSource} alt="placeholders" />
    </div>
    <div className="timeline-content">
      <p className="heading">{startdate}</p>
      <p>{title}</p>
    </div>
  </div>
)

WorksTimeLine.propTypes = {
  startdate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timelineclass: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
}
