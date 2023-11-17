import React,{useState,useContext} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import { ThemeContext } from '../../ThemeContext';



function Navbar() {
    const [isOpen, setIsOpen]=useState(false);
    const toggleOpen= ()=>{setIsOpen(!isOpen)};
    const  { isDark, themeSwitch } = useContext(ThemeContext);

  return (
    <div className={`navbar ${isDark? "dark" : ""}`}>
    <div className="logo">
        <h1><span className="logo-highlight">D</span>ia<span className="logo-highlight">n</span>a</h1>
    </div>
    <button className="hamburger-menu" onClick={toggleOpen}>
        <div className={`bars ${isOpen ? 'open' : ''}`}></div>
    </button>

    <ul className= {`navbar-links ${isOpen ? 'visible' : 'hidden'}`}>
      <li onClick={toggleOpen} ><Link to="/">Home</Link></li>
      <li onClick={toggleOpen} ><Link to="/projects">Projects</Link></li>
      <li onClick={toggleOpen} ><Link to="/about">About</Link></li>
      <li onClick={toggleOpen} ><Link to="/skills">Skills</Link></li>
      <li onClick={toggleOpen} ><Link to="/contact">Contact</Link></li>
      <li onClick={toggleOpen}><i className={`fa-solid fa-lightbulb theme-switch ${isDark ? "dark" : ""}`}  onClick={themeSwitch}></i></li>
    </ul>
    </div>
  )
}

export default Navbar;