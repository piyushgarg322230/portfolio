import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // adjust based on navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  

  return (
    <nav className="navbar">
      {/* {`navbar ${scrolled ? 'scrolled' : ''}`}> */}
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <div className="logo">
            <div className="symbol">&lt;</div>
            <div className="initials">PG</div>
            <div className="name">
              <div>PIYUSH</div>
              <div>GARG</div>
            </div>
          </div>
        </a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>About</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}>Projects</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); handleLinkClick('education'); }}>Education</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>Contact</a></li>
          {/* <li className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </li> */}
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;