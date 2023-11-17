import React,{useContext} from "react";
import LinkedIn from "../../../assets/images/LinkedIn.svg";
import GitHub from "../../../assets/images/GitHub.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ThemeContext } from "../../ThemeContext";

function Footer() {
  const {isDark}=useContext(ThemeContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className={`footer-section ${isDark?"dark":""}`}>
      <div className="footer-outer-links">
        <a href="https://www.linkedin.com/in/na-yeon-go-31998a297/"><img src={LinkedIn} alt="LinkedIn" /></a>
        <a href="https://github.com/smilenayeon?tab=repositories"><img src={GitHub} alt="GitHub" /></a>
      </div>
      <ul className="footer-nav">
        <li onClick={scrollToTop}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/skills">Skills</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/contact-me">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
