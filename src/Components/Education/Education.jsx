import React, { useEffect, useRef, useState } from "react";
import "./education.css";

function Education() {
  
  const eduRefs = useRef([]);
  const certRefs = useRef([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    eduRefs.current.forEach((el) =>  el && observer.observe(el));
    certRefs.current.forEach((el) =>  el && observer.observe(el));

    return () => observer.disconnect();
  }, [showMore]);

  const educationData = [
    {
      degree: "B.Sc. (Hons) in Software Engineering",
      institution: "Sabaragamuwa University of Sri Lanka",
      duration: "2021 – Present",
      description:
        "Focused on software development, and modern web technologies.",
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Mahmud Ladies College, Kalmunai",
      duration: "2019 – 2021",
      description:
        "Completed studies in Physical Science stream with excellent results.",
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "Mahmud Ladies College, Kalmunai",
      duration: "2018",
      description:
        "Achieved strong academic foundation with distinction in core subjects.",
    },
  ];

  const certificationsData = [
    {
      title: "Introduction to AI",
      issuer: "Google / Coursera",
      year: "2025",  
    },
    {
      title: "Minimize Productivity With AI Tools",
      issuer: "Google / Coursera",
      year: "2025",
    },
    {
      title: "Discover The art od Prompting",
      issuer: "Google / Coursera",
      year: "2025",
    },
    {
      title: "Professional English",
      issuer: "SriLanka Youth Club",
      year: "2022",
    },
    {
      title: "Foundation in Information Technology",
      issuer: "KDMC Nenasala",
      year: "2019",
    },
  ];

  // Show only first 3, then toggle to show all
  const visibleCerts = showMore
    ? certificationsData
    : certificationsData.slice(0, 3);
  

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            className="timeline-item hidden"
            key={index}
            ref={(el) => (eduRefs.current[index] = el)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="timeline-duration">{edu.duration}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title cert-title">Certifications</h2>

      <div className="cert-wrapper">
      <div className={`timeline ${showMore ? "expanded" : ""}`}>
        {visibleCerts.map((cert, index) => (
          <div
            className="timeline-item hidden"
            key={index}
            ref={(el) => (certRefs.current[index] = el)}
          >
            <div className="timeline-dot cert-dot"></div>
            <div className="timeline-content">
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <span className="timeline-duration">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>



      {/* ✅ Toggle Button */}
      <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
     </div> 
    </section>
    
  );
}

export default Education;

