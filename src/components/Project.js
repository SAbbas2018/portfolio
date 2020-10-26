import React from "react";
function Project(props) {
  const { project } = props;
  const widthStyle = { width: 25 + "em" };
  const backgroundStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="card" style={widthStyle}>
      <div
        className="card-img-top"
        style={{
          ...widthStyle,
          height: 14 + "em",
          ...backgroundStyle,
        }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.desc}</p>
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
            <i className="fas fa-map-marker-alt fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
