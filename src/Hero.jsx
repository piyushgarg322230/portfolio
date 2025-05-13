import React from 'react';
import { userData } from './userData';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="highlight">{userData.Home.user}</span></h1>
          <h2 className="hero-subtitle">{userData.Home.title}</h2>
          <p className="hero-description">{userData.Home.description}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="./image2.png" alt="Profile" className="profile-img" />
          <div className="circle-animation"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;