import { useState } from "react";
import "./Style.css";
import "./Services.css";

const services = [
  {
    id: "01",
    title: "Landing Pages",
    content: [
      "Focused pages designed to explain your offer clearly and drive action.",
    ],
  },
 
  {
    id: "02",
    title: "Business Websites",
    content: [
      "Complete websites that give your business a professional and trustworthy online presence.",
    ],
  },
  {
    id: "03",
    title: "Website Design",
    content: [
      "Custom layouts and interfaces designed around your brand, content, and users.",
    ],
  },
   {
    id: "04",
    title: "UI/UX Design",
    content: [
      "Clear, intuitive interfaces that make websites easier and more enjoyable to use.",
    ],
  },
  {
    id: "05",
    title: "Website Redesign",
    content: [
      "Improve an existing website's structure, visuals, usability, and responsiveness.",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="section-heading">
          <span className="badge">
            ✦ Services
          </span>

          <h2>
            What I Can Do <span>For You</span>
          </h2>

          <p>Choose what you need, or tell me what you're trying to build and I'll help you figure out the right approach.</p>
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
                      <li key={i}> {item}</li>
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
    <span className="price">Starting at ₹10,000</span>
  </div>

  <div className="price-row">
    <span>Business Website</span>
    <span className="price">Starting at ₹30,000</span>
  </div>

  <div className="price-row">
    <span>Web Redesign</span>
    <span className="price">Starting at ₹20,000</span>
  </div>

  <div className="price-row">
    <span>Framer Development</span>
    <span className="price">Starting at ₹25,000</span>
  </div>

  <div className="price-row">
    <span>UI/UX Design</span>
    <span className="price">Starting at ₹50,000</span>
  </div>

  
  <h3 className="important-title">Every project is different</h3>

    <p>Final pricing depends on the number of pages, features, content, and timeline.</p>

<a href="#freelanceform" className="btn-white">
  Get a project estimate
</a>
  

</div>
        </div>

        </div>
      </section>
    </>
  );
}