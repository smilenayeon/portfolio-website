import React from 'react';
import "./SkillCard.css";

function SkillCard({image, title, index}) {
  return (
    <div className="skill-card" key={index}>
        <img className="skill-card-logo" src={image} alt="title"/>
        <h3 className="skill-card-title">{title}</h3>
      </div>
  )
}

export default SkillCard