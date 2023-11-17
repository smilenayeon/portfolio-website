import React,{useContext} from 'react';
import "./Skills.css";
import SkillsData from './SkillsData';
import SkillCard from './SkillCard';
import { ThemeContext } from '../../ThemeContext';


function Skills() {
  const{isDark}=useContext(ThemeContext);
  return (
    <div className={`skills-page ${isDark?"dark":""}`}>
    <h1 className="skill-main-title">- Skills -</h1>
    <div className="skill-card-stage">
    {SkillsData.map(({image, title}, index)=> 
    <SkillCard image={image} title={title} index={index}/>)}
    </div>
    </div>
  )
}

export default Skills