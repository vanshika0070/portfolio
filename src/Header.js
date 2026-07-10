import { useState } from "react";
import "./Style.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <nav id="navbar">
        {/* LEFT SIDE */}
       <div className="nav-left">
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
    <img src="/images/logo.webp" alt="Lazeez Logo" className="logo" />
  </a>
</div>

        {/* CENTER LINKS */}
        <ul className="nav-links">
          <li>
            <Link to="/#why-me">Why Me?</Link>
          </li>
          <li>
            <Link to="/#featured-work">Featured Work</Link>
          </li>
           <li>
            <Link to="/#about">About</Link>
          </li>
        </ul>

      </nav>

      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </header>
  );
}

export default Header;