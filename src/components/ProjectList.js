
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => (
          <ProjectItem
            key={project.id} // Unique key for each ProjectItem
            name={project.name} // Pass project name
            about={project.description} // Pass project description (renamed to "about")
            technologies={project.technologies || []} // Pass technologies, default to empty array
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
