import { useState } from "react";
import { Link } from "react-router-dom";
import "../Files-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          <span>ClinicCare</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#appointment">Book Appointment</a>
          <Link to="/NoticePage">Notice Board</Link>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Right Side */}
        <div className="navbar-actions">
          <Link to="/signin" className="login-link">
            Login
          </Link>

          <Link to="/register" className="get-started-btn">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={closeMenu}>
            <div className="sidebar-logo-icon">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <span>ClinicCare</span>
          </Link>

          {/* Close Button */}
          <button className="sidebar-close" onClick={closeMenu}>
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="sidebar-links">
          <a href="#appointment" onClick={closeMenu}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            <span>Book Appointment</span>
          </a>

          <a href="#notice" onClick={closeMenu}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3h9l4 4v14H6z" />
              <path d="M14 3v5h5" />
              <line x1="9" y1="12" x2="16" y2="12" />
              <line x1="9" y1="16" x2="16" y2="16" />
            </svg>

            <span>Notice Board</span>
          </a>

          <a href="#contact" onClick={closeMenu}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16v11H8l-4 4z" />
            </svg>

            <span>Contact</span>
          </a>
        </div>

        {/* Sidebar Actions */}
        <div className="sidebar-actions">
          <Link to="/signin" className="sidebar-login" onClick={closeMenu}>
            Login
          </Link>

          <Link
            to="/register"
            className="sidebar-get-started"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
