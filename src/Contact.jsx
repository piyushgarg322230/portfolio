import React from 'react';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { userData } from './userData';
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";


const Contact = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   alert('Thank you for your message! I will get back to you soon.');
  //   e.target.reset();
  // };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        userData.contactUs.YOUR_SERVICE_ID,
        userData.contactUs.YOUR_TEMPLATE_ID,
        form.current,
        userData.contactUs.YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!", {
            position: "top-right",
            duration: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("Failed to send. Try again later!", {
            position: "top-right",
            duration: 3000,
          });
        }
      );
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
                <span>{userData.contactUs.gmail}</span>
              </div>
              {/* <div className="contact-item">
                <FaPhone className="icon" />
                <span>{userData.contactUs.mobileNumber}</span>
              </div> */}
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>{userData.contactUs.location}</span>
              </div>
            </div>
            <div className="social-links">
              <a href={userData.contactUs.github}><FaGithub /></a>
              <a href={userData.contactUs.linkedIn}><FaLinkedin /></a>
              {/* <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a> */}
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="user_name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="user_email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="user_subject" required />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea id="message" name="user_message" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;