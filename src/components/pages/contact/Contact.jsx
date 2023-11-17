import React, { useState, useContext, useRef,useEffect } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../ThemeContext';
import "./Contact.css";


function Contact() {
  const{isDark} = useContext(ThemeContext);

  const focusRef=useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isShown, setIsShown] =useState(false); //show the compose email button
  const showButton=()=>{setIsShown(!isShown)};

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send-email', { name, email, message });
      alert("Message is sent. Thank you");
    } catch (error) {
      alert("Sorry there is no server. Please send email to smilenayeon@gmail.com by clicking \"Compose Email\" button.");
      showButton();
    }
  };

  return (
    <div className={`contact-page ${isDark ? "dark" : ""}`}>
    <div className="contact-board">
    <h1 className="contact-main-title">Contact</h1>
    <form  className="message-form" onSubmit={handleSubmit}>
      <label htmlFor="name" >Name</label>
        <input ref={focusRef} type="text" id="name" placeholder="Name" value={name} onChange={handleNameChange} required/>
      <label htmlFor="email">e-mail</label>
        <input type="email" id="email" placeholder="Your email address" onChange={handleEmailChange} required/>
      <label htmlFor="message">Message</label>
        <input type="text" id="message" placeholder="Message" value={message} onChange={handleMessageChange} required/>
      <input  className= {`submit-button ${isShown? "hidden":""}`} type="submit" value="Submit"/>

    </form>

    </div>
      <a href="mailto:smilenayeon@gmail.com?subject=Let's work together!&body= Dear Na Yeon, ">
        <button className={`compose-email-button ${isShown?"shown":""}`}>Compose Email<i className="fa-regular fa-paper-plane"></i></button>
      </a>
    </div>
  )
}

export default Contact;