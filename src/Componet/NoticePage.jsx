import "../Files-css/NoticePage.css";
import NoticeNavbar from "./NoticeNavbar";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
function NoticePage() {
  const categories = [
    {
      name: "All Notices",
      count: 1,
      icon: <DescriptionOutlinedIcon />,
      active: true,
    },
    {
      name: "Holidays",
      count: 0,
      icon: <CalendarMonthOutlinedIcon />,
    },
    {
      name: "Events",
      count: 0,
      icon: <EventOutlinedIcon />,
    },
    {
      name: "Announcements",
      count: 0,
      icon: <DescriptionOutlinedIcon />,
    },
    {
      name: "Schedule",
      count: 0,
      icon: <ScheduleOutlinedIcon />,
    },
    {
      name: "Health Updates",
      count: 0,
      icon: <HealthAndSafetyOutlinedIcon />,
    },
    {
      name: "Services",
      count: 0,
      icon: <MedicalServicesOutlinedIcon />,
    },
  ];

  return (
    <>
      <NoticeNavbar />

      <div className="notice-page">
        {/* Header */}
        <div className="notice-header">
          <div className="notice-logo">
            <DescriptionOutlinedIcon />
          </div>

          <h1>
            Notice <span>Board</span>
          </h1>

          <p>
            Stay updated with important announcements, schedules, and health
            <br className="desktop-break" />
            information from our clinic.
          </p>
        </div>

        {/* Main Content */}
        <div className="notice-container">
          {/* Sidebar */}
          <aside className="notice-sidebar">
            <h2>Categories</h2>

            <div className="category-list">
              {categories.map((category, index) => (
                <div
                  className={`category-item ${category.active ? "active" : ""}`}
                  key={index}
                >
                  <div className="category-left">
                    <span className="category-icon">{category.icon}</span>
                    <span>{category.name}</span>
                  </div>

                  <span className="category-count">{category.count}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Notice Card */}
          <main className="notice-content">
            <div className="notice-card">
              <div className="notice-card-top">
                <div className="notice-title-section">
                  <div className="notice-title-row">
                    <DescriptionOutlinedIcon className="card-icon" />

                    <span className="priority-badge">medium priority</span>

                    <span className="general-badge">general</span>
                  </div>

                  <h2>Welcome to HealthCare Plus</h2>

                  <div className="notice-meta">
                    <span>By Clinic Admin</span>
                    <span className="dot">•</span>
                    <span>April 28, 2026</span>
                  </div>
                </div>

                <span className="status-badge">Active</span>
              </div>

              <p className="notice-description">
                Our clinic is now online. Book appointments anytime.
              </p>
            </div>
          </main>

          <aside className="notice-sidebar">
            <div className="contact-card">
              <h2>Contact Us</h2>

              <div className="contact-item">
                <PhoneOutlinedIcon />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="contact-item">
                <LocationOnOutlinedIcon />
                <span>123 Healthcare Ave, Medical City</span>
              </div>

              <div className="contact-item">
                <AccessTimeOutlinedIcon />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default NoticePage;
