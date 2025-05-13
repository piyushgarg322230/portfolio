import React, { useEffect } from 'react';
import { FaGraduationCap, FaSchool, FaCode, FaChartLine, FaUsers, FaLaptop, FaPercent, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css'; // Create this CSS file with the provided styles
import { userData } from './userData';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);


  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">My <span className="highlight">Education</span></h2>
        </div>

        {userData.Education.map((edu, index) => (
          <div className="edu-card" data-aos="fade-up" key={index}>
            <div className={`card-icon ${index % 2 === 0 ? '' : 'even'}`}>
              {edu.icon}
            </div>
            <div className="institution">
              <div>
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
              </div>
            </div>
            <div className="edu-meta">
              <span className="duration">{edu.duration}</span>
              <span className="status">{edu.status}</span>
            </div>
            <ul className="edu-highlights">
              {edu.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>
                  {highlight.icon}
                  {highlight.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;