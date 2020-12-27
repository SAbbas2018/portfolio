import React from "react";
import { projectData as pd } from "../assets/projectData";
import Project from "./Project";
function Projects() {
  const projects = [...pd];
  return (
    <section className="project-section wrapper" id="projects">
      <header className="projects-header">Projects</header>
      <section class="projects">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </section>
      <div className="spacer"></div>
    </section>
  );
}

export default Projects;
