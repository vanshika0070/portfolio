import { useState, useEffect } from "react";
import "./Reservation.css";
import "./Style.css";
import "./About.css";

export default function Reservation() {

  const [statusMessage, setStatusMessage] = useState("");
  const [timeGroup, setTimeGroup] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [minDate, setMinDate] = useState("");

  // ✅ existing useEffect (date)
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  // ✅ ADD THIS RIGHT HERE (NEW ONE)
  useEffect(() => {
    setTimeSlot("");
  }, [timeGroup]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!timeSlot) {
      setStatusMessage("Please select a preferred time.");
      return;
    }

    setStatusMessage("Submitting...");


const formData = new FormData(form);

// FORCE all values properly
formData.set("time_group", timeGroup || "");
formData.set("time_slot", timeSlot || "");

// DEBUG (keep for now)
for (let [key, value] of formData.entries()) {
  console.log("SEND:", key, value);
}

    try {
      const res = await fetch(
  "https://formsubmit.co/ajax/vanshikawork.0070@gmail.com",
  {
    method: "POST",
    body: formData
  }
);

      if (res.ok) {
        setStatusMessage("We look forward to welcoming you soon.");

        form.reset();
setTimeGroup("");
setTimeSlot("");
setStatusMessage("We look forward to welcoming you soon.");

      } else {
        setStatusMessage("Submission failed.");
      }
    } catch (err) {
      setStatusMessage("Network error.");
    }
  };

  return (
    <section className="about">
      {/* LEFT */}

      <div className="about-cell">
        <img
          src="/images/reservation-big.webp"
          alt="Interior of Lazeez fine dining restaurant"
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            Your Premium Dining Experience
          </p>

          <h1 className="hero-title">
            Fine Dining
            <br />
            Awaits
          </h1>

          <a href="/menu" className="btn">
            Discover Flavours
          </a>
        </div>
      </div>

      {/* RIGHT */}

      <div className="about-col">
        <div className="bocks">
          <h3 className="booking-title">
            Book an Experience
          </h3>

          <form id="bookingForm" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Table Booking Request"
            />

            {/* NAME + PHONE */}

            <div className="two-column">
              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  pattern="^[A-Za-z\s.\-']+$"
                  autoComplete="name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  required
                  placeholder="Enter Phone Number"
                  pattern="^[0-9]{10}$"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* DATE + GUESTS */}

            <div className="two-column">
              <div className="form-group">
                <label>Date</label>

                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={minDate}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Guests
                </label>

                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="25"
                  placeholder="Number of Guests"
                  required
                />
              </div>
            </div>

            {/* DINING EXPERIENCE */}

            <div className="form-group full">
              <label>Dining Experience</label>

              <div className="dining-options">
                <input
                  type="radio"
                  id="early"
                  name="time_group"
                  value="Early Evening"
                  required
                  onChange={() => setTimeGroup("early")}
                />
                <label htmlFor="early" className="chip">
                  Early Evening
                </label>

                <input
                  type="radio"
                  id="peak"
                  name="time_group"
                  value="Peak Dining"
                  onChange={() => setTimeGroup("peak")}
                />
                <label htmlFor="peak" className="chip">
                  Peak Dining
                </label>

                <input
                  type="radio"
                  id="late"
                  name="time_group"
                  value="Late Dinner"
                  onChange={() => setTimeGroup("late")}
                />
                <label htmlFor="late" className="chip">
                  Late Dinner
                </label>
              </div>
            </div>

           
           
            {/* TIME SLOTS */}

            <div className="form-group full">
              <label>Time Preffered</label>

              {timeGroup === "early" && (
  <div className="time-options active">
    <input
      type="radio"
      id="t1700"
      name="time_slot"
      value="17:00"
      checked={timeSlot === "17:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1700" className="chip">17:00</label>

    <input
      type="radio"
      id="t1730"
      name="time_slot"
      value="17:30"
      checked={timeSlot === "17:30"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1730" className="chip">17:30</label>

    <input
      type="radio"
      id="t1800"
      name="time_slot"
      value="18:00"
      checked={timeSlot === "18:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1800" className="chip">18:00</label>

    <input
      type="radio"
      id="t1830"
      name="time_slot"
      value="18:30"
      checked={timeSlot === "18:30"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1830" className="chip">18:30</label>
  </div>
)}

           {timeGroup === "peak" && (
  <div className="time-options active">
    <input
      type="radio"
      id="t1900"
      name="time_slot"
      value="19:00"
      checked={timeSlot === "19:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1900" className="chip">19:00</label>

    <input
      type="radio"
      id="t1930"
      name="time_slot"
      value="19:30"
      checked={timeSlot === "19:30"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t1930" className="chip">19:30</label>

    <input
      type="radio"
      id="t2000"
      name="time_slot"
      value="20:00"
      checked={timeSlot === "20:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t2000" className="chip">20:00</label>

    <input
      type="radio"
      id="t2030"
      name="time_slot"
      value="20:30"
      checked={timeSlot === "20:30"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t2030" className="chip">20:30</label>
  </div>
)}


             {timeGroup === "late" && (
  <div className="time-options active">
    <input
      type="radio"
      id="t2100"
      name="time_slot"
      value="21:00"
      checked={timeSlot === "21:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t2100" className="chip">21:00</label>

    <input
      type="radio"
      id="t2130"
      name="time_slot"
      value="21:30"
      checked={timeSlot === "21:30"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t2130" className="chip">21:30</label>

    <input
      type="radio"
      id="t2200"
      name="time_slot"
      value="22:00"
      checked={timeSlot === "22:00"}
      onChange={(e) => setTimeSlot(e.target.value)}
    />
    <label htmlFor="t2200" className="chip">22:00</label>
  </div>
)}

            </div>

            {/* DINING PREFERENCE */}

            <div className="form-group full">
              <label>Dining Preference</label>

              <div className="dining-options">
                <input
                  type="radio"
                  id="indoor"
                  name="dining"
                  value="Indoor"
                  required
                />
                <label htmlFor="indoor" className="chip">
                  Indoor
                </label>

                <input
                  type="radio"
                  id="outdoor"
                  name="dining"
                  value="Outdoor"
                />
                <label htmlFor="outdoor" className="chip">
                  Outdoor
                </label>

                <input
                  type="radio"
                  id="private"
                  name="dining"
                  value="Private Dining"
                />
                <label htmlFor="private" className="chip">
                  Private Dining
                </label>
              </div>
            </div>

            {/* MESSAGE */}

            <div className="form-group full">
              <label>Special Requests (optional)</label>

              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea"
                placeholder="Allergies, preferences, celebrations…"
              ></textarea>
            </div>

            <button className="btn-form" type="submit">
              Reserve Your Table
            </button>

            <p id="statusMessage">{statusMessage}</p>
          </form>
        </div>

        <div className="link-row">
          <a className="link-cell" href="/policies">
            <p className="policy-note d-none d-lg-block">
              By booking, you agree to our
            </p>

            <span className="link-label">
              House Policies
            </span>

            <span className="link-arrow">→</span>
          </a>

          <a
            className="link-cell"
            href="tel:+918860993732"
          >
            <span className="link-label">
              Reserve by Phone
            </span>

            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}