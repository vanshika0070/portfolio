import React from "react";
import {
  FaFileAlt,
  FaBuilding,
  FaSyncAlt,
} from "react-icons/fa";
import { SiFramer, SiFigma } from "react-icons/si";
import "./Services.css";


const services = [
  {
    icon: <FaFileAlt />,
    title: "LANDING PAGE",
    description:
      "High-converting landing pages for products, services, campaigns, or promotions.",
    price: "Starting at ₹10,000",
  },
  {
    icon: <FaBuilding />,
    title: "BUSINESS WEBSITE",
    description:
      "Professional, responsive websites that build credibility and give your business a strong online presence.",
    price: "Starting at ₹30,000",
  },
  {
    icon: <FaSyncAlt />,
    title: "WEBSITE REDESIGN",
    description:
      "Give your existing website a fresh look with better structure, responsiveness & performance.",
    price: "Starting at ₹20,000",
  },
  {
    icon: <SiFramer />,
    title: "FRAMER DEVELOPMENT",
    description:
      "Modern, interactive websites built with Framer for a smooth and engaging experience.",
    price: "Starting at ₹25,000",
  },
  {
    icon: <SiFigma />,
    title: "UI/UX DESIGN",
    description:
      "Intuitive and engaging UI/UX designs that enhance usability and create great experiences.",
    price: "Starting at ₹50,000",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
       <div className="section-heading">
          <span className="badge">✦ Services & Pricing</span>
          <h2>
            What I Can Do <span>For You</span>
          </h2>
          <p>
            Flexible solutions for your business — from design to development,
            tailored to deliver real results.
          </p>
        </div>

        {/* Services List */}
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-row" key={service.title}>

              {/* Icon */}
              <div className="service-icon">
                {service.icon}
              </div>

              {/* Number + Content */}
              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              {/* Price */}
              <div className="service-price">
                {service.price}
              </div>

            </div>
          ))}

          <div className="services-padding">
                <h3>Every project is different</h3>
                <p>Final pricing depends on the number of pages, features, content and timeline.</p>
                <div className="btn-direction">
                    <a href="#contactfreelance"  className="btn-white">
                       Get Your Project Estimation
                    </a>
                </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Services;



