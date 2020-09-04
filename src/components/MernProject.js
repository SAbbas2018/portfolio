import React from "react";
function MernProject(props) {
  const project = props.props;
  return (
    <div className="project-container">
      <div className="project-info">
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="tech-icons">
          <i className="devicon-mongodb-plain-wordmark tech-icon"></i>
          <i className="devicon-express-original-wordmark tech-icon"></i>
          <i className="devicon-react-original-wordmark tech-icon"></i>
          <i className="devicon-nodejs-plain-wordmark tech-icon"></i>
        </div>
      </div>
      <div className="image-container">
        <img src={project.image} alt="Project" className="project-img"></img>
        <div className="project-links">
          <div className="project-link">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="project-link">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MernProject;
