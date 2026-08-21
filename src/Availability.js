import "./Availability.css";

function Availability() {
  return (
    <div className="availability">
      <span className="dot"></span>

      <span className="availability-text">
        Available for work
      </span>

      <img
        src="/images/profile.webp"
        alt="Available for work"
        className="availability-image"
      />
    </div>
  );
}

export default Availability;