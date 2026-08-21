import React from "react";
import "./Contact.css";
import ContactFreelanceForm from "./ContactFreelanceForm";
import {
    FaWhatsapp,
} from "react-icons/fa";


import { FaPen } from "react-icons/fa6";

function ContactFreelance() {
   return (
       <section className="ContactFreelance" id="contactfreelance">
        <div className="container">
              <div className="section-heading">
                <span className="badge">✦ Have something in mind?</span>
                <h2>Let's Build Something <span>Great</span></h2>
                <p>Have a website, redesign, or digital product in mind? Tell me what you're working on, and let's see how I can help.</p>
              </div>
  
              <div className="freelance-contact-grid">
                
                <div className="contact-about-card">
                  <div className="contact-card-heading"><div className="card-icon"> <FaPen /> </div>
  
                  <div>
                      <h3>Tell me about your project</h3>
                      <p> I'm excited to hear about your ideas.</p>
                  </div>
                 </div>
  
                <br/>

                <div className="hire-divider" />

{/* /////////Form */}
                <ContactFreelanceForm />
           
              </div>


                   {/* LEFT — ABOUT ME */}
              <div className="contact-about-card">
                      <div className="contact-card-heading">
                          <div className="card-icon-whatsapp"> <FaWhatsapp />
                      </div>
  
                      <div>
                           <h3>Prefer a quick chat?</h3>
                           <p>If you'd would rather taltk directly, message me directly on WhatsApp.</p>
                      </div>
                  </div>

                  <br/>
                  <br/>
  
            <div className="whatsapp-scan-wrapper">
                <img src="/images/whatsapp_qr.webp"
                  alt="Scan to contact me on WhatsApp"
                  className="whatsapp-scan"
                />
  
                <span className="scan-text">
                     Scan to chat
                </span>
            </div>
  
            <a
              href="https://wa.me/9191266363466"
              className="whatsapp-btn"
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
          </div>
      </section>
    );
  };

export default ContactFreelance;










