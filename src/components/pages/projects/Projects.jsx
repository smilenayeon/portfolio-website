import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectsData";
import "./Projects.css";

function Projects() {
  return (
    <div className="project-page">
      <h1 className="project-main-title">- Projects -</h1>
      <div className="card-stage">
      {ProjectData.map(({ image, title, description, link, github }, index) => (
        <ProjectCard
          key={index}
          image={image}
          title={title}
          description={description}
          link={link}
          github={github}
        />
      ))}
      </div>
    </div>
  );
}

export default Projects;
