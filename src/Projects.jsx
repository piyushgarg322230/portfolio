import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { userData } from './userData';

const Projects = () => {
  const projectRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('all');

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

        {/* <div className="project-filters">
          {['all', 'company', 'self'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div> */}


        <div className="projects-grid">
          {userData.Project.map((project, index) => (
            <div
              key={index}
              className="project-card"
              ref={el => projectRefs.current[index] = el}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">

                  {project.liveLink && (
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
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

        {/* <div className="section-footer">
          <a href="#" className="btn-outline">
          <FaGithub style={{ marginRight: "8px" }} /> View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;