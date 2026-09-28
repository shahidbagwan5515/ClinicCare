import "../Files-css/Footer.css";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ClinicCare */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <CalendarTodayIcon />
            </div>

            <h2>ClinicCare</h2>
          </div>

          <p>
            Making healthcare accessible with smart
            <br />
            appointment management and instant
            <br />
            communication.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#appointment">Book Appointment</a>
            <a href="#dashboard">Clinic Dashboard</a>
            <a href="#notice">Notice Board</a>
            <a href="#features">Features</a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="footer-contact">
            <div>
              <PhoneIcon />
              <span>+1 (555) 123-4567</span>
            </div>

            <div>
              <EmailIcon />
              <span>support@cliniccare.com</span>
            </div>

            <div>
              <LocationOnIcon />
              <span>123 Healthcare Ave, Medical City</span>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="footer-column">
          <h3>Operating Hours</h3>

          <div className="footer-contact">
            <div>
              <AccessTimeIcon />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>

            <div>
              <AccessTimeIcon />
              <span>Saturday: 9:00 AM - 2:00 PM</span>
            </div>

            <div>
              <AccessTimeIcon />
              <span>Sunday: Emergency Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing.
        <span className="heart"> ❤️ </span>
        for better healthcare.
      </div>
    </footer>
  );
}

export default Footer;
