import { useState } from "react";
import "./Style.css";
import "./Services.css";

const services = [
  {
    id: "01",
    title: "Landing Pages",
    content: [
      "Built with code, WordPress & modern tools",
      "Mobile-friendly & fully responsive",
      "Optimized for conversions",
    ],
  },
 
  {
    id: "02",
    title: "Business Websites",
    content: [
      "Professional business websites",
      "SEO-friendly structure",
      "Fast loading performance",
    ],
  },
  {
    id: "03",
    title: "Website Design",
    content: [
      "Custom website designs",
      "Responsive layouts",
      "Brand-focused visuals",
    ],
  },
   {
    id: "04",
    title: "UI/UX Design",
    content: [
      "Clean and modern interfaces",
      "User-focused layouts",
      "Wireframes & prototypes",
    ],
  },
  {
    id: "05",
    title: "Website Redesign",
    content: [
      "Modernize existing websites",
      "Improve speed & UX",
      "Increase conversions",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="section-heading">
          <span className="badge">
            ⦿ Services
          </span>

          <h2>
            What I Can Do <span>For You</span>
          </h2>

          <p>
            Explore a suite of design services to elevate your brand.
          </p>
        </div>

        <div className="services-box">
          {services.map((service, index) => (
            <div className="service-item" key={service.id}>
              <div
                className="service-header"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <h2>{service.title}</h2>
                <span>[{service.id}]</span>
              </div>

              {active === index && (
                <div className="service-content">
                  <ul>
                    {service.content.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}



{/* //////////// */}



          <div className="pricing-box">

  <h3>Services & Pricing</h3>

  <div className="price-row">
    <span>Landing Page</span>
    <span className="price">Starts at ₹10,000</span>
  </div>

  <div className="price-row">
    <span>Business Website</span>
    <span className="price">Starts at ₹30,000</span>
  </div>

  <div className="price-row">
    <span>Web Redesign</span>
    <span className="price">Starts at ₹20,000</span>
  </div>

  <div className="price-row">
    <span>Framer Development</span>
    <span className="price">Starts at ₹25,000</span>
  </div>

  <div className="price-row">
    <span>UI/UX Design</span>
    <span className="price">Starts at ₹50,000</span>
  </div>

  
  <h3 className="important-title">⚠️ Important:</h3>

    <p>Every project is unique. Final pricing depends on pages, features and timeline.</p>

<a href="#freelanceform" className="btn-white">
  Get a Quote
</a>
  

</div>
        </div>

        </div>
      </section>
    </>
  );
}