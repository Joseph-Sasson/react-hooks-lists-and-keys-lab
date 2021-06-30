import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItem = projects.map((item)=>{
    return (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.about}</p>
      <nav>{item.technologies}</nav>
    </div>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItem}</div>
    </div>
  );
}

export default ProjectList;
