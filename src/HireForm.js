import { useState } from "react";
import "./CollabForm.css";
import "./Style.css";

export default function HireForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);

    formData.set(
      "access_key",
      "a98654f6-b8b6-40c6-8b6b-aa76c58c6e1e"
    );

    formData.set(
      "subject",
      "💼 New Hiring Inquiry"
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
          "🎉 Thank you! Your hiring inquiry has been sent successfully."
        );
        form.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit}>

      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
      />

      {/* Name */}
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


      {/* Email + Company */}
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
          id="company"
          name="company"
          className="form-input"
          required
          placeholder="Enter Your Company name"
        />
       </div>

    </div>

      {/* Job Title */}
       <div className="form-group">
        <input
          type="text"
          id="job_title"
          name="job_title"
          className="form-input"
          required
          placeholder="Job Title"
        />
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
        Send Hiring Inquiry
      </button>

      <p className="status-message">{result}</p>

      <p className="reply">
        (I'll respond within 24 hours)
      </p>

    </form>
  );
}