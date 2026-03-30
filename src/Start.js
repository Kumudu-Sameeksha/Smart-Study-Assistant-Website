import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router tools
import './Start.css';

const Start = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  return (
    <div className="start-quiz-container">
      {/* Top Navbar */}
      <nav className="quiz-nav">
        <div className="nav-logo">
          {/* Logo links to Dashboard */}
          <Link to="/Dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="mind.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
        <div className="nav-left">
          {/* 3. Replaced 'a' tags with 'Link' components */}
          <Link to="/Landing">Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Plan">Study plans</Link>
          <Link to="/Quiz">Quizzess</Link>
          <Link to="/Resources">Resources</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="nav-right">
          {/* Added click handlers for icons */}
          <span className="notification-icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="quiz-hero-banner">
        <div className="quiz-hero-text">
          <h1>Mobile Application Quiz</h1>
          <p>Do and Check your progress</p>
          {/* Button navigates to quiz taking page */}
          <button className="quiz-get-started" onClick={() => navigate('/quiz-take')}>Get Started</button>
        </div>
        <div className="quiz-hero-illustration">
          <img src="6.jpg" alt="Resources Search" />
        </div>
      </section>

      {/* Main Instructions Card */}
      <main className="quiz-container">
        <div className="instructions-card">
          <div className="card-header">
            <span className="quiz-icon">💬</span>
            <h3>Start Quiz</h3>
          </div>
          
          <div className="instructions-body">
            <ol>
              <li>Click on the attempt quiz now button to start the quiz</li>
              <li>When you have finished click on finish attempt button</li>
              <li>Click on the submit all and the finish button on the summary page to submit your answers to marking.</li>
            </ol>

            <div className="quiz-meta-info">
              <p>The quiz has a time limit of 40 mins.</p>
              <p>You have 30 Mcq Questions</p>
              <p>Grading Method: Highest Grade</p>
            </div>
            
            {/* Main action button navigates to quiz taking page */}
            <button className="attempt-btn" onClick={() => navigate('/quiz-take')}>Attempt quiz now</button>
          </div>
        </div>
      </main>

      {/* Dark Footer */}
      <footer className="quiz-footer">
        <h3>Study Smarter, Achieve more!</h3>
        <div className="footer-action-btns">
          <button className="btn-footer-sign" onClick={() => navigate('/Signup')}>Sign up now</button>
          <button className="btn-footer-learn" onClick={() => navigate('/About')}>Learn more</button>
          <div className="footer-copyright">
            © 2024 Smart Study Assistant - All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Start;