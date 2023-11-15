import React,{useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen]=useState(false);
    const toggleOpen= ()=>{setIsOpen(!isOpen)};
  return (
    <div className="navbar">
    <div className="logo">
        <h1><span className="logo-highlight">N</span>a<span className="logo-highlight">Y</span>eon</h1>
    </div>
    <button className="hamburger-menu" onClick={toggleOpen}>
        <div className="bars"></div>
    </button>

    <ul className= {`navbar-links ${isOpen ? 'visible' : 'hidden'}`}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/contact-me">Contact Me</Link></li>
    </ul>
    </div>
  )
}

export default Navbar;