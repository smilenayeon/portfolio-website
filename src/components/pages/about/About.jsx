import React,{useContext} from "react";
import "./About.css";
import Profile from "../../../assets/images/profile.jpg";
import {ThemeContext} from "../../ThemeContext";

function About() {
  const {isDark}=useContext(ThemeContext);
  return (
    <div className={`about-page ${isDark?"dark":""}`}>
      <div className="title-CV-container">
        <h1 className="about-main-title">
          About... <span>Diana Go </span>
        </h1>
        <a  className="link-for-CV" target="_blank" href="https://drive.google.com/file/d/1s4T2yjeuelnntC2SlPtKU5FzxZMAWVXD/view?usp=drive_link">Download CV</a>
      </div>
      <img className="about-profile" src={Profile} alt="profile_Diana" />
      <div className="about-paragraphs">
        <p>
          Hello! I'm a tenacious <em>Canadian frontend developer</em> with a
          zest for challenges, <em>currently residing inSouth Korea</em>.My
          journey in the tech world began unexpectedly while working as an
          English Instructor and Program Developer with two online academies.
          After seven years in education, frequently encountering and reporting
          software bugs, my curiosity piqued towards the mechanics of user
          interfaces and the seamless user experiences they could offer.
        </p>

        <p>
          <em>In October 2022, I took the plunge and started coding.</em> It
          wasn't long before HTML, CSS, JavaScript, and React captured my
          imagination and my heart. I'm disciplined with deadlines, boast
          excellent communication skills, and bring the same rigor to frontend
          development that helped me thrive in the remote working environment
          for nearly a decade
        </p>

        <p>
          As I seek out a <em>Junior Frontend Developer</em> role, I bring not
          just my technical skills but also a global perspective on remote
          collaboration and a relentless drive to solve problems. I'm a proud
          dogmom to a delightful bichonpoo who's been my sidekick for six years,
          embodying the joy and continuous learning I strive for every day.
        </p>

        <p>
          My education in coding began with an
          <em>Udemy Frontend Developer Bootcamp</em>, leading to a
          <em>Meta Frontend Developer Certificate</em>. I also hold a
          <em>Bachelor of Science degree from the University of Toronto</em>.
          But the learning never stops — I'm constantly absorbing new knowledge
          from YouTube, blogs, Instagram, Stack Overflow, GitHub, Open AI, and
          hands-on experience from personal projects. With a vision to evolve
          into a Fullstack Developer, I'm on a never-ending quest to refine my
          skills and grow within the tech industry.
        </p>

        <p>
          If you're looking for a <em>dedicated and passionate developer</em> to
          join your team, <em>let's connect!</em>
        </p>
      </div>
    </div>
  );
}

export default About;
