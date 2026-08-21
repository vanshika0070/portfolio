import "./Why.css";

const reasons = [
  {
    number: "01.",
    title: "PURPOSEFUL DESIGN",
    description: [
      "Design decisions are based on your business goals, not just what looks nice.",
    ],
    icon: "✦",
  },
  {
    number: "02.",
    title: "DESIGN + DEVELOPMENT",
    description: [
      "From Figma to responsive websites, I can take your project from concept to implementation.",
    ],
    icon: "</>",
  },
  {
    number: "03.",
    title: "CLEAR COMMUNICATION",
    description: [
      "Transparent updates, realistic timelines, and straightforward communication from start to finish.",
    ],
    icon: "•••",
  },

];

const Why = () => {
  return (
    <section className="why">
      <div className="container">
         <div className="section-heading">
          <span className="badge">✦ Why choose me</span>

          <h2>Built Around Your <span> Goals</span></h2>

          <p>Thoughtful design, strong development, and websites built around what you need.</p>
        </div>

        {/* Cards */}
        <div className="grid">
          {reasons.map((reason, index) => (
             <article
                className="why-card">
              <div className="why-card-top">
                <span className="why-number">{reason.number}</span>

                <div className="why-icon">
                  {reason.icon}
                </div>
              </div>

              <div className="why-card-content">
                <h3>{reason.title}</h3>

                <span className="why-line"></span>

                <ul>
                  {reason.description.map((point) => (
                    <li key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Why;