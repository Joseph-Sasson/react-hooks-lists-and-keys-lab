import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technology = technologies.map((tech)=>{
    return <span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
