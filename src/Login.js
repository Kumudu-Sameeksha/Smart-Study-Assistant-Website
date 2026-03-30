import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router components
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // 2. Initialize the navigation hook

  const handleLogin = (e) => {
    e.preventDefault();
    // --- Login Logic Here ---
    // Validate credentials, API calls, etc.
    
    // 3. Programmatically navigate to Dashboard on success
    navigate('/Dashboard');
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <div className="title-underline"></div>

        {/* 4. Add onSubmit handler to the form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-field-group">
            <label>Username</label>
            <input type="text" placeholder="" required />
          </div>

          <div className="input-field-group">
            <label>Password</label>
            <input type="password" placeholder="" required />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            {/* 5. Replace 'a' with 'Link' for Forgot Password */}
            <Link to="/Pass" className="forgot-pass">Forgot password?</Link>
          </div>

          <button type="submit" className="login-submit-btn">Login</button>
        </form>

        <p className="signup-redirect">
          If you don't have any account? {/* 6. Replace 'a' with 'Link' for Signup */}
          <Link to="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;