import React, { useContext } from 'react';
import "./ProjectCard.css";
import { ThemeContext } from '../../ThemeContext';

function ProjectCard({ image, title, description, link, github }) {
  const{isDark}=useContext(ThemeContext);
  return (
    <div className={`project-card ${isDark?"dark":""}`}>
        <img className="project-card-image" src={image} alt={title}/>
        <h2 className="project-card-title">{title}</h2>
        <p className="description">{description}</p>
        <div className="buttons">
        <a href={link} target="_blank" rel="noopener noreferrer"><button>Live Web</button></a>
        <a href={github} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
        </div>
        
    </div>
  )
}

export default ProjectCard