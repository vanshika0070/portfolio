import { Link } from "react-router-dom";

function Offcanvas({ isOpen, closeOffcanvas }) {
  return (
    <>
      <div
        className={`offcanvas-overlay ${isOpen ? "active" : ""}`}
        onClick={closeOffcanvas}
      />
      <div className={`offcanvas ${isOpen ? "active" : ""}`}>
        <button
          className="offcanvas-close"
          aria-label="Close navigation"
          onClick={closeOffcanvas}
        >
          <span></span>
          <span></span>
        </button>

<div className="inner">
  <h3>VANSHIKA MANAV</h3>
<h4>Frontend Developer <br />
Crafting modern, responsive web experiences.</h4>
</div>


        <ul className="offcanvas-links">
          <li>
            <Link to="/#featured-work" onClick={closeOffcanvas}>Featured Work</Link>
          </li>      
          <li>
            <Link to="/#about" onClick={closeOffcanvas}>About</Link>
          </li>
          <li>
            <Link to="/freelance" onClick={closeOffcanvas}>Services</Link>
          </li>
          <li>
            <Link to="/hire" onClick={closeOffcanvas}>Work With Me</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Offcanvas;