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
    <h1 className="greeting">
    <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>, <span>I</span>'<span>m</span> <span>D</span><span>i</span><span>a</span><span>n</span><span>a</span>
</h1>

<h2 className="job-title">
    <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>e</span><span>n</span><span>d</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
</h2>

<h3 className="phrase">
    <span>B</span><span>r</span><span>i</span><span>n</span><span>g</span><span>i</span><span>n</span><span>g</span> <span>Y</span><span>o</span><span>u</span><span>r</span> <span>D</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span> <span>V</span><span>i</span><span>s</span><span>i</span><span>o</span><span>n</span><span>s</span> <span>t</span><span>o</span> <span>L</span><span>i</span><span>f</span><span>e</span>
</h3>

      <a href="mailto:smilenayeon@gmail.com?subject=Let's work together!&body= Dear Na Yeon, ">
        <button className="home-contact-me">Contact Me <i className="fa-regular fa-paper-plane"></i></button>
      </a>

      </div>

    </div>
  )
}

export default Home