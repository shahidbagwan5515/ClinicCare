import "../Files-css/ClinicDashboard.css";
import { useState } from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import SendIcon from "@mui/icons-material/Send";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function ClinicDashboard() {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="clinic-dashboard">
      {/* ========================================
          DASHBOARD HEADER
      ======================================== */}

      <div className="clinic-header">
        <div className="clinic-logo">
          <MedicalServicesIcon />
        </div>

        <h1>
          Clinic <span>Dashboard</span>
        </h1>

        <p>
          Manage appointments, send notifications, and track your clinic's
          <br />
          performance.
        </p>
      </div>

      {/* ========================================
          STATISTICS
      ======================================== */}

      <div className="clinic-stats">
        <div className="stat-card">
          <CalendarTodayIcon className="stat-blue-icon" />

          <h2>24</h2>

          <p>Total Appointments</p>
        </div>

        <div className="stat-card">
          <CheckCircleIcon className="stat-green-icon" />

          <h2>18</h2>

          <p>Confirmed</p>
        </div>

        <div className="stat-card">
          <AccessTimeIcon className="stat-yellow-icon" />

          <h2>4</h2>

          <p>Pending</p>
        </div>

        <div className="stat-card">
          <ChatBubbleIcon className="stat-green-icon" />

          <h2>156</h2>

          <p>Messages Sent</p>
        </div>
      </div>

      {/* ========================================
          MAIN DASHBOARD
      ======================================== */}

      <div className="clinic-main-box">
        {/* ========================================
            TABS
        ======================================== */}

        <div className="clinic-tabs">
          <button
            className={`clinic-tab ${
              activeTab === "appointments" ? "active" : ""
            }`}
            onClick={() => setActiveTab("appointments")}
          >
            <CalendarTodayIcon />
            <span>Appointments</span>
          </button>

          <button
            className={`clinic-tab ${
              activeTab === "messaging" ? "active" : ""
            }`}
            onClick={() => setActiveTab("messaging")}
          >
            <ChatBubbleIcon />
            <span>Messaging</span>
          </button>

          <button
            className={`clinic-tab ${activeTab === "notices" ? "active" : ""}`}
            onClick={() => setActiveTab("notices")}
          >
            <DescriptionIcon />
            <span>Notices</span>
          </button>

          <button
            className={`clinic-tab ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => setActiveTab("reports")}
          >
            <BarChartIcon />
            <span>Reports</span>
          </button>
        </div>

        {/* ========================================
            APPOINTMENTS TAB
        ======================================== */}

        {activeTab === "appointments" && (
          <div className="tab-content">
            <div className="tab-content-header">
              <div>
                <h2>Today's Appointments</h2>

                <p>Manage your patients and upcoming appointments.</p>
              </div>

              <button className="primary-action-btn">
                <AddIcon />
                Add New
              </button>
            </div>

            <div className="appointment-list">
              {/* Appointment 1 */}

              <div className="dashboard-appointment">
                <div className="patient-left">
                  <div className="patient-icon">
                    <PersonIcon />
                  </div>

                  <div className="patient-info">
                    <h4>John Smith</h4>

                    <p>
                      <AccessTimeIcon />
                      09:00 AM
                      <span>•</span>
                      +1 555-0101
                    </p>
                  </div>
                </div>

                <div className="patient-actions">
                  <span className="status confirmed">Confirmed</span>

                  <button className="reschedule-btn">Reschedule</button>
                </div>
              </div>

              {/* Appointment 2 */}

              <div className="dashboard-appointment">
                <div className="patient-left">
                  <div className="patient-icon">
                    <PersonIcon />
                  </div>

                  <div className="patient-info">
                    <h4>Emma Johnson</h4>

                    <p>
                      <AccessTimeIcon />
                      10:30 AM
                      <span>•</span>
                      +1 555-0102
                    </p>
                  </div>
                </div>

                <div className="patient-actions">
                  <span className="status pending">Pending</span>

                  <button className="reschedule-btn">Reschedule</button>
                </div>
              </div>

              {/* Appointment 3 */}

              <div className="dashboard-appointment">
                <div className="patient-left">
                  <div className="patient-icon">
                    <PersonIcon />
                  </div>

                  <div className="patient-info">
                    <h4>Michael Brown</h4>

                    <p>
                      <AccessTimeIcon />
                      02:00 PM
                      <span>•</span>
                      +1 555-0103
                    </p>
                  </div>
                </div>

                <div className="patient-actions">
                  <span className="status confirmed">Confirmed</span>

                  <button className="reschedule-btn">Reschedule</button>
                </div>
              </div>

              {/* Appointment 4 */}

              <div className="dashboard-appointment">
                <div className="patient-left">
                  <div className="patient-icon">
                    <PersonIcon />
                  </div>

                  <div className="patient-info">
                    <h4>Sarah Davis</h4>

                    <p>
                      <AccessTimeIcon />
                      03:30 PM
                      <span>•</span>
                      +1 555-0104
                    </p>
                  </div>
                </div>

                <div className="patient-actions">
                  <span className="status cancelled">Cancelled</span>

                  <button className="reschedule-btn">Reschedule</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================
            MESSAGING TAB
        ======================================== */}

        {activeTab === "messaging" && (
          <div className="tab-content">
            <div className="tab-content-header">
              <div>
                <h2>Messaging Center</h2>

                <p>
                  Send reminders, updates and important messages to patients.
                </p>
              </div>

              <button className="primary-action-btn">
                <SendIcon />
                Send Message
              </button>
            </div>

            <div className="message-cards">
              {/* SMS */}

              <div className="message-card">
                <div className="message-card-icon blue">
                  <ChatBubbleIcon />
                </div>

                <div className="message-card-content">
                  <h3>SMS & WhatsApp</h3>

                  <p>
                    Quickly communicate with patients through instant messaging.
                  </p>
                </div>

                <div className="message-actions">
                  <button>
                    <NotificationsActiveIcon />
                    Appointment Reminders
                  </button>

                  <button>
                    <ChatBubbleIcon />
                    Health Tips Newsletter
                  </button>

                  <button>
                    <GroupIcon />
                    Special Offers
                  </button>
                </div>
              </div>

              {/* Email */}

              <div className="message-card">
                <div className="message-card-icon green">
                  <EmailIcon />
                </div>

                <div className="message-card-content">
                  <h3>Bulk Email</h3>

                  <p>Send professional email campaigns to your patients.</p>
                </div>

                <div className="message-actions">
                  <button>
                    <EmailIcon />
                    Appointment Reminders
                  </button>

                  <button>
                    <EmailIcon />
                    Health Newsletter
                  </button>

                  <button>
                    <EmailIcon />
                    Promotional Emails
                  </button>
                </div>
              </div>

              {/* Templates */}

              <div className="message-card">
                <div className="message-card-icon purple">
                  <DescriptionIcon />
                </div>

                <div className="message-card-content">
                  <h3>Email Templates</h3>

                  <p>
                    Ready-to-use templates for common patient communication.
                  </p>
                </div>

                <div className="template-list">
                  <div className="template-box">
                    <strong>Appointment Reminder</strong>

                    <p>
                      Dear [patient], this is a reminder of your appointment
                      tomorrow at [time].
                    </p>
                  </div>

                  <div className="template-box">
                    <strong>Health Camp Invitation</strong>

                    <p>
                      Join our free health screening camp on [date]. Limited
                      slots available.
                    </p>
                  </div>

                  <div className="template-box">
                    <strong>Feedback Request</strong>

                    <p>
                      Thank you for visiting our clinic. Please share your
                      experience with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================
            NOTICES TAB
        ======================================== */}

        {activeTab === "notices" && (
          <div className="tab-content">
            <div className="tab-content-header">
              <div>
                <h2>Notice Board</h2>

                <p>Share important announcements and clinic updates.</p>
              </div>

              <button className="primary-action-btn">
                <AddIcon />
                Add Notice
              </button>
            </div>

            <div className="notice-list">
              {/* Notice 1 */}

              <div className="notice-card">
                <div className="notice-icon green">
                  <EventNoteIcon />
                </div>

                <div className="notice-info">
                  <div className="notice-title">
                    <h3>Holiday Schedule</h3>

                    <span className="notice-status active">Active</span>
                  </div>

                  <p>
                    Clinic will be closed on March 20th for Holi celebration.
                  </p>

                  <small>Posted 2 days ago</small>
                </div>
              </div>

              {/* Notice 2 */}

              <div className="notice-card">
                <div className="notice-icon blue">
                  <MedicalServicesIcon />
                </div>

                <div className="notice-info">
                  <div className="notice-title">
                    <h3>Free Health Checkup Camp</h3>

                    <span className="notice-status active">Active</span>
                  </div>

                  <p>
                    Free diabetes and blood pressure screening on March 25th.
                  </p>

                  <small>Posted 1 week ago</small>
                </div>
              </div>

              {/* Notice 3 */}

              <div className="notice-card">
                <div className="notice-icon orange">
                  <WarningAmberIcon />
                </div>

                <div className="notice-info">
                  <div className="notice-title">
                    <h3>Clinic Timing Update</h3>

                    <span className="notice-status upcoming">Upcoming</span>
                  </div>

                  <p>
                    Evening consultation hours will start from 5:00 PM next
                    Monday.
                  </p>

                  <small>Posted yesterday</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================
            REPORTS TAB
        ======================================== */}

        {activeTab === "reports" && (
          <div className="tab-content">
            <div className="tab-content-header">
              <div>
                <h2>Clinic Reports</h2>

                <p>
                  Review your clinic's appointments and communication
                  performance.
                </p>
              </div>

              <button className="download-report-btn">
                <DownloadIcon />
                Download Report
              </button>
            </div>

            {/* Report overview */}

            {/* <div className="report-overview">
              <div className="report-mini-card">
                <div className="report-mini-icon blue">
                  <CalendarTodayIcon />
                </div>

                <div>
                  <span>Total Bookings</span>
                  <strong>47</strong>
                </div>
              </div>

              <div className="report-mini-card">
                <div className="report-mini-icon green">
                  <CheckCircleIcon />
                </div>

                <div>
                  <span>Completed</span>
                  <strong>42</strong>
                </div>
              </div>

              <div className="report-mini-card">
                <div className="report-mini-icon orange">
                  <AccessTimeIcon />
                </div>

                <div>
                  <span>Pending</span>
                  <strong>4</strong>
                </div>
              </div>

              <div className="report-mini-card">
                <div className="report-mini-icon purple">
                  <TrendingUpIcon />
                </div>

                <div>
                  <span>Growth</span>
                  <strong>18%</strong>
                </div>
              </div>
            </div> */}

            {/* Report cards */}

            <div className="report-grid">
              {/* Weekly Summary */}

              <div className="report-card">
                <div className="report-card-header">
                  <div>
                    <h3>Weekly Summary</h3>
                    <p>March 10 - 16, 2024</p>
                  </div>

                  <BarChartIcon />
                </div>

                <div className="report-row">
                  <span>Total Bookings</span>
                  <b>47</b>
                </div>

                <div className="report-row">
                  <span>Completed</span>
                  <b className="green-text">42</b>
                </div>

                <div className="report-row">
                  <span>No-shows</span>
                  <b className="red-text">3</b>
                </div>

                <div className="report-row">
                  <span>Cancelled</span>
                  <b className="yellow-text">2</b>
                </div>
              </div>

              {/* Message Delivery */}

              <div className="report-card">
                <div className="report-card-header">
                  <div>
                    <h3>Message Delivery</h3>
                    <p>Last 7 days</p>
                  </div>

                  <ChatBubbleIcon />
                </div>

                <div className="report-row">
                  <span>SMS Sent</span>
                  <b>89</b>
                </div>

                <div className="report-row">
                  <span>WhatsApp Sent</span>
                  <b>89</b>
                </div>

                <div className="report-row">
                  <span>Emails Sent</span>
                  <b>67</b>
                </div>

                <div className="report-row">
                  <span>Delivery Rate</span>
                  <b className="green-text">96%</b>
                </div>

                <div className="report-row">
                  <span>Read Rate</span>
                  <b className="green-text">78%</b>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClinicDashboard;
