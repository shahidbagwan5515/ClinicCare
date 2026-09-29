import "../Files-css/SignIn.css";

import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="signin-page">
      {/* Logo / Header */}
      <div className="signin-header">
        <div className="signin-logo">
          <svg
            width="32"
            height="32"
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

        <h1>ClinicCare</h1>
        <p>Welcome back to your healthcare portal</p>
      </div>

      {/* Sign In Card */}
      <div className="signin-card">
        <h2>Sign In</h2>

        <p className="signin-subtitle">
          Enter your credentials to access your account
        </p>

        {/* Email */}
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div className="input-group password-group">
          <label>Password</label>

          <div className="password-input">
            <input type="password" placeholder="Enter your password" />

            <span className="eye-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="signin-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>

          <span>Sign In</span>
        </button>

        {/* Signup */}
        <p className="signup-text">
          Don't have an account?
          <Link to="/register">Sign up here</Link>
        </p>
      </div>

      {/* Back Home */}
      <a href="/" className="back-home">
        ← Back to Home
      </a>
    </div>
  );
}

export default SignIn;
