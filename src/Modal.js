function Modal({ isOpen, closeModal }) {
  return (
    <div
      id="navModal"
      className={isOpen ? "active" : ""}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      onClick={closeModal}   // Close when clicking outside
    >
      <div
        className="modal-inner"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        
        <ul className="modal-nav-links">
          <li><a href="/menu">Specials</a></li>
          <li><a href="/reservation">Reservation</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/policies">Policy</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;