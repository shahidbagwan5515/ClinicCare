import "../Files-css/Register.css";

function Register() {
  return (
    <div className="register-page">
      {/* Header */}
      <div className="register-header">
        <div className="register-logo">
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

        <h1>Join ClinicCare</h1>
        <p>Create your account to get started</p>
      </div>

      {/* Register Card */}
      <div className="register-card">
        <h2>Create Account</h2>

        <p className="register-subtitle">
          Fill in your information to register
        </p>

        {/* Full Name */}
        <div className="register-input-group">
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        {/* Email */}
        <div className="register-input-group">
          <label>Email Address *</label>
          <input type="email" placeholder="Enter your email address" />
        </div>

        {/* Password */}
        <div className="register-input-group">
          <label>Password *</label>

          <div className="register-password">
            <input type="password" placeholder="Create a password " />

            <span className="register-eye">
              <svg
                width="19"
                height="19"
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

        {/* Confirm Password */}
        <div className="register-input-group">
          <label>Confirm Password *</label>

          <input type="password" placeholder="Confirm your password" />
        </div>

        {/* Button */}
        <button className="register-btn">
          <svg
            width="19"
            height="19"
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

          <span>Create Account</span>
        </button>

        {/* Login */}
        <p className="login-text">
          Already have an account?
          <a href="/signin"> Sign in here</a>
        </p>
      </div>

      {/* Back Home */}
      <a href="/" className="register-back-home">
        ← Back to Home
      </a>
    </div>
  );
}

export default Register;
