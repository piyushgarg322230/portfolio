import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>hello@example.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" required />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea id="message" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;