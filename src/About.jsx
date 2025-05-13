import React, { useRef, useEffect } from 'react';
import { userData } from './userData';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>
        <div className="about-content">
        <div className="about-image" ref={aboutRef}>
            <img src="https://picsum.photos/id/237/200/300" alt="About" className="about-img" />
          </div>
          <div className="about-text">
            <p>{userData.About.description}</p>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-tags">
                {userData.About.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;