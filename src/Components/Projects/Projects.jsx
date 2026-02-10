import React from "react";
import "./projects.css";
import SaveBite from "../../assets/SaveBite.png"
import LegalAssistantAI from "../../assets/LegalAssistantAI.png"
import Portfolio from "../../assets/Portfolio.png"
import BookStore from "../../assets/BookStore.png"
import InstaClone from "../../assets/Insta clone.png"
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample projects data
const projectsData = [
  {
    title: "SaveBite",
    description: "Connect with local businesses to purchase surplus food at discounted prices, reducing waste and supporting the community.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    image: SaveBite,
    liveDemo: "#",
    github: "https://github.com/AhmedHaseen/SE4106-Web-Project",
  },
  {
    title: "Legal Assitant AI",
    description: "An AI-powered legal assistant that helps users draft legal documents and provides basic legal advice.",
    tech: ["React", "CSS", "FastAPI", "RAG", "Pinecone", "LLM" ],
    image: LegalAssistantAI,
    liveDemo: "#",
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
    title: "Book Store",
    description: "An online platform to browse, search, and purchase books from various genres.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: BookStore,
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Instagram Clone",
    description: "A social media platform that mimics Instagram's core features, allowing users to share photos, follow others, and like posts.",
    tech: ["React", "CSS", "Firebase"],
    image: InstaClone,
    liveDemo: "#",
    github: "#",
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
