import "../Files-css/AppointmentPage.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PhoneIcon from "@mui/icons-material/Phone";
function AppointmentPage() {
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];
  return (
    <>
      <div className="appointment-page">
        {/* Heading */}
        <div className="appointment-heading">
          <Box>
            <div className="feature-icon blue">
              <span>
                <MedicalServicesIcon />
              </span>
            </div>
          </Box>
          <h1>
            Book Your <span>Appointment</span>
          </h1>

          <p>
            Select your preferred date and time. Get instant confirmation via
            SMS and
            <br />
            WhatsApp.
          </p>
        </div>

        {/* Main Cards */}
        <div className="appointment-wrapper">
          {/* Patient Information */}
          <div className="appointment-card patient-card">
            <div className="card-heading">
              <CalendarTodayIcon className="blue-icon" />

              <div>
                <h2>Patient Information</h2>
                <p>Fill in your details to book an appointment</p>
              </div>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label>
                <PersonIcon />
                Full Name
              </label>

              <input type="text" placeholder="Enter your full name" />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>
                <PhoneIcon />
                Phone Number
              </label>

              <input type="tel" placeholder="91+ 123-45679" />
            </div>

            {/* Date */}
            <div className="form-group">
              <label>
                <CalendarTodayIcon />
                Preferred Date
              </label>

              <div className="date-input-wrapper">
                <input type="date" />
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="appointment-card slots-card">
            <div className="card-heading">
              <AccessTimeIcon className="green-icon" />

              <div>
                <h2>Available Time Slots</h2>
                <p>Choose a time that works best for you</p>
              </div>
            </div>

            <div className="time-slots">
              {timeSlots.map((time, index) => (
                <button key={index} className="time-btn">
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentPage;
