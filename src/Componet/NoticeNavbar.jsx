import { useState } from "react";
import { Link } from "react-router-dom";
import "../Files-css/NoticeNavbar.css";

function NoticeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
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
      <div className="navbar-actions">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/NoticePage" onClick={closeMenu}>
          Login
        </Link>

        <Link to="/signin" className="get-started-btn" onClick={closeMenu}>
          Book Appointment
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/Register" onClick={closeMenu}>
            Login
          </Link>

          <Link to="/SignIn" className="mobile-get-started" onClick={closeMenu}>
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NoticeNavbar;
