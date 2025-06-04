import React from 'react';

const Exprience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out for collaborations!</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                {/* <FaEnvelope className="icon" /> */}
                                <span>hello@example.com</span>
                            </div>
                            <div className="contact-item">
                                {/* <FaPhone className="icon" /> */}
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="contact-item">
                                {/* <FaMapMarkerAlt className="icon" /> */}
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                        {/* <div className="social-links">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Exprience;