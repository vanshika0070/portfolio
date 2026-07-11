
import "./Projects.css";
import "./FreelanceForm.css";
import "./Style.css";

import CollabForm from "./CollabForm";

function FreelanceForm() {
  return (
    <section className="Freelance" id="freelanceform">
      <div className="container">

        <div className="section-heading">
          <span className="badge">⦿ Ready When You Are</span>

          <h2>
            Start Your <span>Project</span>
          </h2>

          <p>
            Have a project in mind? I'm available for freelance work and would
            love to hear your idea.
          </p>
        </div>

 <div className="about-grid">

          {/* Left */}

          <div className="form-card">

             <CollabForm />
             
          </div>

          {/* Right */}

          <div className="about-content">


<p className="subtitle">
  <strong>Email:  </strong>
  <a href="mailto:vanshikawork0070@gmail.com?subject=Project%20Inquiry">
      vanshikawork0070@gmail.com
  </a>
</p>


            <hr />

            <br />

            <p className="subtitle"><strong>Chat on WhatsApp</strong></p>
            <p className="subtitle">Scan to view my business profile and start a conversation.</p>


             <img
              src="/images/whatsapp_qr.webp"
              alt="qr" className="qr"
            />

          </div>
        </div>



        

      </div>
    </section>
  );
}

export default FreelanceForm;