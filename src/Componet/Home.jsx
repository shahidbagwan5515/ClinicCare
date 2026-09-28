import "../Files-css/Home.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldIcon from "@mui/icons-material/Shield";
import GroupIcon from "@mui/icons-material/Group";

import AppointmentPage from "./AppointmentPage";
import ClinicDashboard from "./ClinicDashboard";
import Footer from "./Footer";
function Home() {
  const [activeTab, setActiveTab] = useState("appointments");

  const handleBookAppointment = () => {
    document
      .getElementById("appointments")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />

      <div className="HomeContainer">
        {/* Hero Content */}
        <div className="home-content">
          <h1>
            <span>Your Health,</span>
            <br />
            Our Priority
          </h1>

          <p>
            Book appointments instantly, receive confirmations via SMS &
            <br />
            WhatsApp, and stay connected with your healthcare providers.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <button className="book-btn" onClick={handleBookAppointment}>
              <span className="calendar-icon">▣</span>
              Book Appointment
            </button>

            <Link className="dashboard-btn" to="/SignIn">
              <span className="shield-icon">♢</span>
              Login to Dashboard
            </Link>
          </div>

          {/* Features */}
          <div className="home-features">
            {/* Feature 1 */}
            <div className="feature">
              <div className="feature-icon blue">
                <span>
                  <CalendarTodayIcon />
                </span>
              </div>

              <h3>Instant Booking</h3>
              <p>Book slots in seconds</p>
            </div>

            {/* Feature 2 */}
            <div className="feature">
              <div className="feature-icon green">
                <span>
                  <AccessTimeIcon />
                </span>
              </div>

              <h3>Smart Reminders</h3>
              <p>Never miss appointments</p>
            </div>

            {/* Feature 3 */}
            <div className="feature">
              <div className="feature-icon blue">
                <span>
                  <ShieldIcon />
                </span>
              </div>

              <h3>Secure &amp; Private</h3>
              <p>Your data protected</p>
            </div>

            {/* Feature 4 */}
            <div className="feature">
              <div className="feature-icon green">
                <span>
                  <GroupIcon />
                </span>
              </div>

              <h3>Easy Management</h3>
              <p>Simple clinic dashboard</p>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <span className="circle circle-one"></span>
        <span className="circle circle-two"></span>
        <span className="circle circle-three"></span>
        <span className="circle circle-four"></span>
      </div>

      <AppointmentPage />
      <ClinicDashboard />
      <Footer />
    </>
  );
}

export default Home;
