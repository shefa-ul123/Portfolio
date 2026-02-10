import React from "react";
import "./about.css";
import { FaCode, FaPalette, FaDatabase, FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava  } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {useState} from 'react';

function About() {

  const [showMore, setShowMore] = useState(false);
  
  // ✅ Skill data in array (easier to manage)
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", percent: 70 },
    { icon: <FaCss3Alt />, name: "CSS", percent: 65 },
    { icon: <FaJsSquare />, name: "JavaScript", percent: 60},
    { icon: <FaReact />, name: "React", percent: 55},
    { icon: <FaDatabase />, name: "MySQL", percent: 50 },
    { icon: <FaJava />, name: "Java", percent: 60 },
    { icon: <SiMongodb />, name: "MongoDB", percent: 40 },
  ];

  // ✅ Show first 4 skills, then toggle rest
  const visibleSkills = showMore ? skills : skills.slice(0, 4);

  return (
    <>
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-description">
          I'm a passionate Software Engineering student who enjoys building 
          user-friendly, scalable, and interactive digital experiences. 
          Here’s what I specialize in:
        </p>

        <div className="skills-container">
          <div className="skill-card">
            <div className="icon-wrapper">
              <FaCode className="skill-icon" />
            </div>
            <h3>Frontend Development</h3>
            <p>React, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <div className="icon-wrapper">
             <FaDatabase className="skill-icon" />
            </div>
            <h3>Backend Development</h3>
            <p>
              Working with Node.js, Express, and databases to build server-side apps.
            </p>
          </div>

          <div className="skill-card">
            <div className="icon-wrapper">
              <FaPalette className="skill-icon" />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Designing clean, intuitive, and user-friendly interfaces.
            </p>
          </div>

          <div className="skill-card">
            <div className="icon-wrapper">
              <FaLaptopCode className="skill-icon" />
            </div>
            <h3>Programming Languages</h3>
            <p>
              Skilled in JavaScript, Java, C, Python and SQL.
            </p>
          </div>
        </div>
      </div>
    </section> 

<section className="about-section" id="about">
      <div className="about-container2">
        
        {/* ✅ LEFT SIDE - Description */}
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I am a dedicated software engineering student with a strong passion 
            for web development and modern UI/UX practices. I enjoy building 
            clean, responsive, and user-focused applications using the latest 
            technologies. I love solving problems and continuously improving my 
            technical and creative skills.
          </p>
          <p>
            My journey in tech has allowed me to gain experience in both 
            frontend and backend development, and I’m always eager to learn, 
            collaborate, and take on new challenges.
          </p>
        </div>

        {/* ✅ RIGHT SIDE - Technologies */}
        <div className="about-right">
          <h3>Technologies & Skills</h3>


          {/* {visibleSkills.map((skill, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-label">
                  {skill.icon} {skill.name}
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))} */}

            {/* ✅ Always visible skills (first 4) */}
            {skills.slice(0, 4).map((skill, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-label">
                  {skill.icon} {skill.name}
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}

            {/* ✅ Animated expand/collapse section */}
            <div className={`show-more-content ${showMore ? "open" : ""}`}>
              {skills.slice(4).map((skill, index) => (
                <div className="skill-bar" key={index + 4}>
                  <div className="skill-label">
                    {skill.icon} {skill.name}
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>


            {/* ✅ Show More / Show Less Button */}
            <button
              className="toggle-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>

        </div>
      </div>
    </section>

  </>   
  );
}

export default About;
