import React from 'react';
import Profile from "../../../assets/images/profile.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
    <div className="profile-container">
    <img className="profile" src={Profile} alt="profile"/>
    <div className="circle"></div>
    </div>
    
    <div className="home-text">
      <h1> Hello, I'm Na Yeon</h1>
      <h2>Frontend Developer</h2>
      <h3>Bringing Your Digital Visions to Life</h3>
      <a href="mailto:smilenayeon@gmail.com?subject=Let's work together!&body= Dear Na Yeon, ">
        <button className="home-contact-me">Contact Me <i className="fa-regular fa-paper-plane"></i></button>
      </a>

      </div>

    </div>
  )
}

export default Home