import React from "react";
import "./hero.css";
import profilePic from "../../assets/profile Pic.jpeg";
import CV from "../../assets/CV_Shefa UL.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; 
import { HiOutlineDownload } from "react-icons/hi";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Shefa 👋</span>
          </h1>
          <h2>A Software Engineering Student & Aspiring Web Developer</h2>
          <p>
            I build creative, responsive, and user-friendly web experiences.
            Passionate about turning ideas into modern digital solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={CV} 
               className="btn btn-secondary" 
               download="CV_Shefa UL.pdf"
                >
               <HiOutlineDownload className="download-icon" /> Download Resume
            </a>
          </div>
           <div className="hero-socials">
            <a href="https://github.com/shefa-ul123" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shefa-uthumalebbe-6b95b4320/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:shefaul810@gmail.com" className="social-icon">
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Shefa Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
