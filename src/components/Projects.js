import React, { useState } from "react";
import { mernProjectData as pd } from "../assets/mernProjectData";
import MernProject from "./MernProject";
function Projects() {
  const [mernProjects] = useState(pd);
  return (
    <div className="projects-container" id="projects">
      {mernProjects.map((project, index) => {
        return (
          <div key={index}>
            <MernProject props={project} />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
