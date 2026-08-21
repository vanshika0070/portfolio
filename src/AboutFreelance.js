import "./Why.css";

const reasons = [
  {
    number: "01.",
    title: "CUSTOM DESIGN",
    description: "Every website is Designed around your brand, goals and audience.",
  },
  {
    number: "02.",
    title: "RESPONSIVE",
    description: "Seamless experience across all devices.",
  },
  {
    number: "03.",
    title: "PERFORMANCE FOCUSED",
    description: "Clean code and optimized perform for faster loading and better results.",
  },
  {
    number: "04.",
    title: "BUSINESS FOCUSED",
    description:
      "Websites that communicates your value and help turn visitors into customers.",
  },
];

const AboutFreelance = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="aboutfull-grid">
          {/* Section Heading */}
          <div className="section-heading">
              <span className="badge">✦ Freelance Web Design </span>
              <h2>A Website Built For <span>Your Business</span></h2>
              <p>I help businesses and startups create websites that look professional, communicate clearly, and support real business goals.</p>
          </div>

          {/* Cards */}
          <div className="about-content">
            <h3>What You Get</h3>

            <ul>
              <li>⚡ Strategy-focused design</li>
              <li>⚡ Design + development together</li>
              <li>⚡ Responsive across devices</li>
              <li>⚡ Clear communication</li>
              <li>⚡ Clean, maintainable code</li>
            </ul>
          </div>

<br/>

<hr/>
<br/>

          <div className="about-card-grid">
            {reasons.map((reason, index) => (
              <article
                className="why-card">
                <div className="why-card-top">
                  <span className="why-number">{reason.number}</span>
                </div>

                <div className="why-card-content">
                  <h3>{reason.title}</h3>

                  <span className="why-line"></span>

                  <p>{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

                <div className="btn-direction">
                   <a href="#services"  className="btn-white">
                     See My Services
                   </a>
                </div>

      </div>
    </section>
  );
};

export default AboutFreelance;