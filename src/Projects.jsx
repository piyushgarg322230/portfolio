import React, { useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality.',
    tech: ['JavaScript', 'Firebase', 'CSS3'],
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality.',
    tech: ['JavaScript', 'Firebase', 'CSS3'],
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality.',
    tech: ['JavaScript', 'Firebase', 'CSS3'],
    image: 'https://picsum.photos/id/237/200/300'
  }
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = projectRefs.current.filter(Boolean);
    currentRefs.forEach(ref => observer.observe(ref));

    return () => {
      currentRefs.forEach(ref => observer.unobserve(ref));
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              ref={el => projectRefs.current[index] = el}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#" className="project-link"><FaExternalLinkAlt /></a>
                  <a href="#" className="project-link"><FaGithub /></a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;