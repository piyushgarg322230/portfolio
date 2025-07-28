import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { userData } from './userData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {userData.footerMessage}</p>
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;