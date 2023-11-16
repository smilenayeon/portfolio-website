import React from 'react';
import "./Skills.css";
import SkillsData from './SkillsData';
import SkillCard from './SkillCard';


function Skills() {
  return (
    <div className="skills-page">
    <h1 className="skill-main-title">- Skills -</h1>
    <div className="skill-card-stage">
    {SkillsData.map(({image, title}, index)=> 
    <SkillCard image={image} title={title} index={index}/>)}
    </div>
    </div>
  )
}

export default Skills