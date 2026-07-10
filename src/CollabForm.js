import { useState } from "react";
import "./CollabForm.css";
import "./Style.css";



export default function ContactForm() {
  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();

  setResult("Sending...");

  const form = event.target;
  const formData = new FormData(form);

  formData.append(
    "access_key",
    "a98654f6-b8b6-40c6-8b6b-aa76c58c6e1e"
  );

  formData.append(
    "subject",
    "🚀 New Freelance Project Inquiry"
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult(
        "🎉 Thank you! Your project inquiry has been sent successfully."
      );
      form.reset();
    } else {
      console.log(data);
      setResult("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setResult("❌ Network error. Please try again.");
  }
};

  return (
    <form onSubmit={onSubmit}>

      <input
  type="checkbox"
  name="botcheck"
  className="hidden"
  style={{ display: "none" }}
/>

      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
          pattern="^[A-Za-z .'-]+$"
          autoComplete="name"
          placeholder="Enter Your Name"
        />
      </div>


     {/* Email + Niche */}
      <div className="two-column">
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
            autoComplete="email"
            placeholder="Enter Email Address"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="niche"
            name="niche"
            className="form-input"
            required
            pattern="^[A-Za-z .'-]+$"
            placeholder="Niche e.g. Restaurant, Real Estate"
          />
        </div>
      </div>

        {/* Service */}
      <div className="form-group">
        <select
          id="service"
          name="service"
          className="form-input"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a Service
          </option>

          <option value="Landing Page">Landing Page</option>
          <option value="Business Website">Business Website</option>
          <option value="Website Redesign">Website Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </div>

       {/* Budget */}
      <div className="form-group">
        <select
          id="budget"
          name="budget"
          className="form-input"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select your Budget
          </option>

          <option value="₹5,000-₹10,000">₹5,000-₹10,000</option>
          <option value="₹10,000-₹20,000">₹10,000-₹20,000</option>
          <option value="₹20,001-₹50,000">₹20,001-₹50,000</option>
          <option value="₹50,001+">₹50,001+</option>
        </select>
      </div>

      {/* Message */}
      <div className="form-group full">
        <textarea
          id="message"
          name="message"
          rows="5"
          className="form-textarea"
          placeholder="Tell me about your project, goals, timeline, or any specific requirements..."
        />
      </div>

       <button className="btn-form" type="submit">
        Send Project Inquiry
      </button>

      <p className="status-message">{result}</p>

      <p className="reply">
        (We will reach out to you within 24hrs)
      </p>

    
    </form>
  );
}