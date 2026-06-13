import { useState } from "react";
import "./Style.css";
import "./Header.css";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <nav id="navbar">
        {/* LEFT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          
          <button
            className={`nav-toggler ${isModalOpen ? "open" : ""}`}
            aria-label="Open navigation"
            aria-expanded={isModalOpen}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a href="/" className="nav-logo">
            LAZEEZ
          </a>
        </div>

        {/* CENTER LINKS */}
        <ul className="nav-links">
          <li>
            <a href="/menu">Specials</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>

        {/* RIGHT BUTTON */}
        <div>
          <a href="/reservation" className="btn">
            Reserve Table
          </a>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </header>
  );
}

export default Header;