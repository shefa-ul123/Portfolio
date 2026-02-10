import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h3>Shefa UL</h3>
          <p>Software Engineering Undergraduate</p>
        </div>

        {/* Center */}
        <div className="footer-socials">
          <a href="https://github.com/shefa-ul123" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shefa-uthumalebbe-6b95b4320/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:shefaul810@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shefa UL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
