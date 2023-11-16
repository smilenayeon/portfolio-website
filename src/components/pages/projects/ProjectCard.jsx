import React from 'react';
import "./ProjectCard.css";

function ProjectCard({ image, title, description, link, github }) {
  return (
    <div className="project-card">
        <img className="project-card-image" src={image} alt={title}/>
        <h2 className="project-card-title">{title}</h2>
        <p className="description">{description}</p>
        <div className="buttons">
          <a href={link}><button>Live Web</button></a>
        <a href={github}><button>GitHub</button></a>  
        </div>
        
    </div>
  )
}

export default ProjectCard