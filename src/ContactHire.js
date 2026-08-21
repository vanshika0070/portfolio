import React from "react";
import "./Contact.css";
import ContactHireForm from "./ContactHireForm";
import {
FaBriefcase,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";


import {
  LuUser,
  LuMapPin,
  LuBriefcase,
} from "react-icons/lu";



function HireContact() {
   return (
       <section className="ContactHire">
        <div className="container">
              <div className="section-heading">
                  <span className="badge">✦ Open to Opportunities</span>
                  <h2>Think I’d Be <span>a Good Fit?</span></h2>
                  <p> I’m open to frontend, web design, and UI/UX roles. If you’re building a team and think we’d be a great match, I’d love to hear about the opportunity.</p>
              </div>
  
              <div className="hire-contact-grid">
  
                   {/* LEFT — ABOUT ME */}
                  <div className="contact-about-card">
                      <div className="contact-card-heading">
                          <div className="card-icon"> <LuUser />
                      </div>
  
                      <div>
                          <h3>A little about me</h3>
                          <p>I create clean, responsive websites and intuitive interfaces that look good and work even better.</p>
                      </div>
                  </div>
  
                  <div className="hire-divider" />
  
                  <div className="contact-info-list">
                      <div className="contact-info-item">
                          <span className="contact-icon">✉</span>
                          <div>
                              <small>Email</small>
                              <a href="mailto:vanshikawork.0070@gmail.com" >vanshikawork0070.@gmail.com</a>
                          </div>
                      </div>
              
                      <div className="contact-info-item">
                          <span className="contact-icon"> < LuMapPin/></span>
                          <div>
                              <small>Location</small>
                              <p className="contact-info-text">New Delhi, India</p>
                          </div>
                      </div>
  
                      <div className="contact-info-item">
                          <span className="contact-icon"><LuBriefcase/></span>
                          <div>
                              <small>Open to</small>
                              <div className="role-tags">
                                <span className="contact-info-text">Frontend</span>
                                <i>•</i>
                                <span className="contact-info-text">Web Design</span>
                                <i>•</i>
                                <span className="contact-info-text">UI/UX</span>
                              </div>
                          </div>
                      </div>
                  </div>
  
                   {/* Resume */}
  
                  <a href="/Vanshika_Manav_resume_Web Designer  UIUX Designer  Front-End Developer.pdf" className="resume-btn" target="_blank" rel="noreferrer">
                      <span >▤</span>
                      <span>Download Resume</span>
                      <span className="resume-arrow">→</span>
                  </a>
  
                  <div className="hire-divider" />
  
                 {/* Socials */}
                  <div className="social-section">
                      <span>Find me on</span>
  
                      <div className="social-icons">
                          <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                              <FaGithub />
                          </a>
            
                          <a
                            href="https://dribbble.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                              <FaDribbble />
                          </a>
  
                          <a
                            href="https://behance.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                              <FaBehance />
                          </a>
            
                          <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                      </div>
                  </div>
              </div>
  
          {/* RIGHT — HIRING FORM */}
  
              <div className="contact-about-card">
                  <div className="contact-card-heading"><div className="card-icon"> < FaBriefcase/></div>
  
                  <div>
                      <h3>Tell me about the opportunity</h3>
                      <p> Share the details and I’ll get back to you.</p>
                  </div>
              </div>
  
            <br/>
            <br/>

{/* /////////Form */}
                <ContactHireForm />
           
            </div>
        </div>
  
        {/* WHATSAPP */}
        <div className="whatsapp-card">
            <div className="whatsapp-content">
  
                <div>
                    <h3>Prefer a quick chat?</h3>
                    <p>Message me directly on WhatsApp.</p>
                </div>
            </div>
  
            <div className="whatsapp-qr-wrapper">
                <img src="/images/whatsapp_qr.webp"
                  alt="Scan to contact me on WhatsApp"
                  className="whatsapp-qr"
                />
  
                <span className="qr-text">
                    ← Scan to chat
                </span>
                <span className="qr-text-mobile">
                     Scan to chat
                </span>
            </div>
  
            <a
              href="https://wa.me/9191266363466"
              className="whatsapp-button"
              target="_blank"
              rel="noreferrer"
            >
            <span className="whatsapp-small-icon">◉</span>
            <strong>WhatsApp</strong>
            <span>·</span>
            <span>+91 9266 363466</span>
          </a>
  
        </div>
        
          </div>
      </section>
    );
  };

export default HireContact;

