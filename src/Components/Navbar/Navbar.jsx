import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo"> <a href="#hero">Shefa UL</a> </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hamburger menu for mobile */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;

