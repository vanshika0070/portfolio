import "./Why.css";

const reasons = [
  {
    number: "01.",
    title: "CLEAR COMMUNICATION",
    description: [
      "No guessing where your project stands.",
    ],
  },
  {
    number: "02.",
    title: "THOUGHTFUL WORK",
    description: [
      "I care about the details, not just getting the page finished.",
    ],
  },
  {
    number: "03.",
    title: "PRACTICAL DECISIONS",
    description: [
      "Design choices are made around your needs and goals.",
    ],
  },
    {
    number: "04.",
    title: "SMOOTH PROCESS",
    description: [
      "From first discussion to final delivery, everything stays organized.",
    ],
  },
];

const Why = () => {
  return (
    <section className="why" >
      <div className="container">
         <div className="section-heading">
          <span className="badge">✦ Why choose me</span>

          <h2>What You Can <span>Expect</span></h2>

          <p>A thoughtful approach, clear communication, and a process you can rely on.</p>
        </div>

        {/* Cards */}
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <article
              className={`why-card ${
                index < 2 ? "why-card-large" : "why-card-small"
              }`}
              key={reason.number}
            >
              <div className="why-card-top">
                <span className="why-number">{reason.number}</span>
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