import React from 'react';
import "./ProjectLine.css";
const ProjectLine = ({ title, location, textColor, paddingTop }) => {
  return (
    <div className="projectLine" style={{ color: textColor, paddingTop: paddingTop }}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  )
}

export default ProjectLine