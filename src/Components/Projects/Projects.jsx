import React from "react";
import "./projects.css";
import SaveBite from "../../assets/SaveBite.png"
import LegalAssistantAI from "../../assets/LegalAssistantAI.png"
import SmartHotel from "../../assets/SmartHotel.png"
import AttendanceSystem from "../../assets/AttendanceSystem.png"
import Portfolio from "../../assets/Portfolio.png"
import BookStore from "../../assets/BookStore.png"
import InstaClone from "../../assets/Insta clone.png"
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample projects data
const projectsData = [
  {
    title: "Hybrid Mobile based Student Attendance System",
    description: "Smart mobile attendance system leveraging QR code scanning, facial recognition, and GPS-based location verification for secure, real-time tracking.",
    tech: ["React Native", "FastAPI", "Node.js", "MongoDB", "Tailwind CSS", "OpenCV"],
    image: AttendanceSystem,
    liveDemo: "#",
    github: "https://github.com/SE6101-Community-Project/Student_Attendance_System",
  },
  {
    title: "SaveBite",
    description: "Connect with local businesses to purchase surplus food at discounted prices, reducing waste and supporting the community.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    image: SaveBite,
    liveDemo: "https://www.linkedin.com/posts/shefa-uthumalebbe-6b95b4320_webdevelopment-savebites-teamwork-ugcPost-7370010234465067008-IarL/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7370010564158201856&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE_Fe0Bl-vaxhVWMi9OKBiJy5iSJLnHBdM",
    github: "https://github.com/AhmedHaseen/SE4106-Web-Project",
  },
  {
    title: "Legal Assitant AI",
    description: "An AI-powered legal assistant that helps users draft legal documents and provides basic legal advice.",
    tech: ["React", "CSS", "FastAPI", "RAG", "Pinecone", "LLM" ],
    image: LegalAssistantAI,
    liveDemo: "https://www.linkedin.com/posts/shefa-uthumalebbe-6b95b4320_ai-legaltech-machinelearning-ugcPost-7444391022048149504-styE/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7444391510336430080&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE_Fe0Bl-vaxhVWMi9OKBiJy5iSJLnHBdM",
    github: "https://github.com/kirushikan0508/legal-law-chatbot-mini-project-",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience.",
    tech: ["React", "CSS"],
    image: Portfolio,
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Smart Hotel Management System",
    description: " Full-featured hotel management system with distinct admin and customer roles, supporting room management, room sevices, and reservations with AI chat assistant integration.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Stripe", "Gemini AI"],
    image: SmartHotel,
    liveDemo: "#",
    github: "https://github.com/shefa-ul123/Hotel-Management-System",
  },
  {
    title: "Book Store",
    description: "An online platform to browse, search, and purchase books from various genres.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: BookStore,
    github: "https://github.com/shefa-ul123/E-Book-Store",
  },
  {
    title: "Instagram Clone",
    description: "A social media platform that mimics Instagram's core features, allowing users to share photos, follow others, and like posts.",
    tech: ["React", "CSS", "Firebase"],
    image: InstaClone,
    github: "https://github.com/shefa-ul123/Instagram_Clone",
  },
  
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <p>Some of my best work highlighted.</p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                
                <a href={project.github} target="_blank" rel="noopener noreferrer" >
                    <FaGithub className="extra-button"/>
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" >
                   <FaExternalLinkAlt className="extra-button" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
