import React from 'react';
import "./ProjectLine.css";
const ProjectLine = ({ title, location, textColor }) => {
  return (
    <div className="projectLine" style={{ color: textColor}}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  )
}

export default ProjectLine