import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import './Pass.css';

const Pass = () => {
  const navigate = useNavigate(); // 2. Initialize hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your logic to validate 
    // passwords and call your backend API...

    // 3. Redirect to login page after update
    alert("Password updated successfully!");
    navigate('/Login');
  };

  return (
    <div className="pass-page-container">
      <div className="pass-card">
        <h1 className="pass-title">Change Your Password</h1>
        <p className="pass-subtitle">Enter new password to change your password</p>

        {/* 4. Add onSubmit handler */}
        <form className="pass-form" onSubmit={handleSubmit}>
          <div className="input-field-group">
            <label>Email</label>
            <input type="email" placeholder="" required />
          </div>

          <div className="input-field-group">
            <label>New password</label>
            <input type="password" placeholder="" required />
          </div>

          <div className="input-field-group">
            <label>Confirm password</label>
            <input type="password" placeholder="" required />
          </div>

          <button type="submit" className="update-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Pass;