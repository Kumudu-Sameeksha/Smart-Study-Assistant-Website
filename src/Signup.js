import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router tools
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  const handleSignup = (e) => {
    e.preventDefault();
    // --- Signup Logic Here ---
    // API calls to create user, etc.
    
    // 3. Navigate to login page on success
    navigate('/Login');
  };

  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <div className="title-underline"></div>

        {/* 4. Add onSubmit handler to the form */}
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="input-field-group">
            <label>Username</label>
            <input type="text" placeholder="" required />
          </div>

          <div className="input-field-group">
            <label>Password</label>
            <input type="password" placeholder="" required />
          </div>

          <div className="divider-row">
            <span className="line"></span>
            <span className="divider-text">or</span>
            <span className="line"></span>
          </div>

          <div className="social-icons-row">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" />
          </div>

          <button type="submit" className="signup-submit-btn">Sign Up</button>
        </form>

        <p className="login-redirect">
          Already have any account? {/* 5. Replace 'a' with 'Link' for Login */}
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;