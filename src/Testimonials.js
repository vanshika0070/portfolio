import "./Testimonials.css";

const testimonials = [
  {
    name: "Rishab Singh",
    role: "Startup Founder",
    image: "/images/profile1.webp",
    rating: 4.5,
    review:
      "Really smooth process. She understood our goals and delivered exactly what we needed.",
  },
  {
    name: "Shreya Singh",
    role: "E-commerce Owner",
    image: "/images/profile2.webp",
    rating: 4.9,
    review:
      "She transformed my ideas into a clean and responsive website. Very easy to work with.",
  },
  {
    name: "Divyansh",
    role: "Freelance Developer",
    image: "/images/profile3.webp",
    rating: 4.7,
    review:
      "As a small business owner, I appreciated how simple and stress-free the whole process was.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="badge">✦ Client Results</span>

          <h2>
            Hear It From <span>Them</span>
          </h2>

          <p>
            A few words from people I've worked with.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="testimonial-top">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>

              </div>

              <div className="divider"></div>

              <div className="rating">
  <span className="rating-number">{item.rating}</span>

  <div className="stars">
    {[1, 2, 3, 4, 5].map((star) => {
      const fill = Math.max(0, Math.min(1, item.rating - (star - 1)));

      return (
        <span className="star" key={star}>
          <span className="star-empty">★</span>

          <span
            className="star-fill"
            style={{ width: `${fill * 100}%` }}
          >
            ★
          </span>
        </span>
      );
    })}
  </div>
</div>

              <p>{item.review}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;