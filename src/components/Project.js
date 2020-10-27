import React from "react";
function Project(props) {
  const { project } = props;
  const { tech } = project;
  return (
    <div className="card">
      <div className={`card-img-top ${project.name}`}></div>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.desc}</p>
        <div className="project-tech">
          {tech.map((technology) => {
            return <div className="technology">{technology}</div>;
          })}
        </div>
        <div className="project-links">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <button type="button" className="btn btn-info btn-sm live-app">
              Live App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
