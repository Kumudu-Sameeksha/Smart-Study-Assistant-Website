import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 1. Added Link import
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  // 1. State to manage input fields
  const [profileData, setProfileData] = useState({
    fullName: "Peter Parker",
    email: "peter@uni.edu",
    mobile: "",
    address: "",
    nic: "",
    personalEmail: "",
    telephone: "",
    dob: "",
    nationality: "",
    religion: "",
    district: "",
    province: "",
    school: "",
    eduYear: ""
  });

  // 2. Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // 3. Handle Saving Data
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving data:", profileData);
    alert("Profile updated successfully!");
    // Here you would call your API to save the data
  };

  const handleLogout = () => {
    // Logic to clear user session
    navigate('/Login');
  };

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="dash-nav">
        <div className="nav-logo">
          {/* Clicking the logo returns to landing */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
  
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Plan">Study plans</Link>
          <Link to="/Quiz">Quizzess</Link>
          <Link to="/Resources">Resources</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>

        <div className="nav-right">
          <span className="icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>
      {/* Removed the premature closing </div> here */}
      
      <div className="profile-page-wrapper">
        <div className="profile-card">
          {/* Avatar Section */}
          <div className="profile-header">
            <div className="avatar-circle">
              <img src="boy.jpg" alt="User Profile" />
            </div>
            <div className="status-badge">Enrolled</div>
          </div>

          {/* 4. Form wrapper for handling Save/Submit */}
          <form onSubmit={handleSave}>
            {/* Top Info Fields */}
            <div className="profile-row inline-row">
              <div className="input-group small">
                <label>ID </label>
                <input type="text" readOnly value="12345" />
              </div>
              <div className="input-group small">
                <label>Intake </label>
                <input type="text" readOnly value="2024" />
              </div>
            </div>

            {/* Main Fields */}
            <div className="input-group full">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group full">
              <label>University Email</label>
              <input type="email" readOnly value={profileData.email} />
            </div>

            {/* Updated Fields to use State */}
            <div className="input-group full">
              <label>Address</label>
              <input 
                type="text" 
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <h3 className="section-divider">Personal Details</h3>
          
            <div className="input-group full">
              <label>NIC</label>
              <input type="text" name="nic" value={profileData.nic} onChange={handleInputChange} required />
            </div>

            <div className="input-group full">
              <label>Email</label>
              <input type="email" name="personalEmail" value={profileData.personalEmail} onChange={handleInputChange} required />
            </div>

            <div className="profile-row inline-row">
              <div className="input-group half">
                <label>Mobile No.</label>
                <input type="text" name="mobile" value={profileData.mobile} onChange={handleInputChange} required />
              </div>
              <div className="input-group half">
                <label>Telephone No.</label>
                <input type="text" name="telephone" value={profileData.telephone} onChange={handleInputChange} />
              </div>
            </div>

            <div className="input-group half">
              <label>Date Of Birth</label>
              <input type="date" name="dob" value={profileData.dob} onChange={handleInputChange} required />
            </div>

            <div className="profile-row inline-row">
              <div className="input-group half">
                <label>Nationality</label>
                <input type="text" name="nationality" value={profileData.nationality} onChange={handleInputChange} />
              </div>
              <div className="input-group half">
                <label>Religion</label>
                <input type="text" name="religion" value={profileData.religion} onChange={handleInputChange} />
              </div>
            </div>

            <div className="profile-row inline-row">
              <div className="input-group half">
                <label>District</label>
                <input type="text" name="district" value={profileData.district} onChange={handleInputChange} />
              </div>
              <div className="input-group half">
                <label>Province</label>
                <input type="text" name="province" value={profileData.province} onChange={handleInputChange} />
              </div>
            </div>

            {/* Education Section */}
            <h3 className="section-divider">Education</h3>

            <div className="input-group full">
              <label>School</label>
              <input type="text" name="school" value={profileData.school} onChange={handleInputChange} />
            </div>

            <div className="input-group half">
              <label>Year</label>
              <input type="text" name="eduYear" value={profileData.eduYear} onChange={handleInputChange} />
            </div>

            {/* 5. Save Button and Logout Button */}
            <div className="button-container" style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
            <button type="submit" className="save-btn" style={{backgroundColor: '#2a9be2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
              Save Changes
            </button>
              <button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;