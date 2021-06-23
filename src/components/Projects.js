import React from "react";
import { projectData as pd } from "../assets/projectData";
import { Box } from "@chakra-ui/react";
import Project from "./Project";
function Projects() {
	const projects = [...pd];
	return (
		<section className="project-section wrapper" id="projects">
			<header className="projects-header">Projects</header>
			<Box p={3} d="grid" gridTemplateColumns="1fr" placeItems="center">
				{projects.map((project) => {
					return <Project key={project.id} project={project} />;
				})}
			</Box>
			<div className="spacer"></div>
		</section>
	);
}

export default Projects;
