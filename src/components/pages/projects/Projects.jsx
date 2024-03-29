import React,{useContext} from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectsData";
import "./Projects.css";
import { ThemeContext } from "../../ThemeContext";

function Projects() {
  const {isDark}=useContext(ThemeContext);
  return (
    <div className={`project-page ${isDark?"dark":""}`}>
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
          showLiveButton
        />
      ))}
      </div>
    </div>
  );
}

export default Projects;
