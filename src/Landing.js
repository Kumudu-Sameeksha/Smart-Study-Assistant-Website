import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Router tools
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  // Function to handle "Get Started" and "Join Now" buttons
  const handleStartClick = () => {
    navigate('/Signup'); 
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          {/* Clicking the logo usually returns you to home (Landing) */}
          <Link to="/">
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
          </Link>
          <span className="logo-text">Smart Study</span>
        </div>
        
        <div className="nav-left">
          <Link to="/Landing">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>

        <div className="nav-auth">
          <Link to="/Login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/Signup">
            <button className="Signup-nav-btn">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Accelerate Your Learning With <br />
            <span className="highlight-text">Smart Study Assistant</span>
          </h1>
          <p>Personalized study plans, AI-powered quizzes and progress tracking to boost your success.</p>
          <button className="get-started-btn" onClick={handleStartClick}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="girl.jpg" alt="Student using AI Assistant" />
        </div>
      </header>

      {/* Feature Cards */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="planning.png" alt="Study Plan Icon" className="feature-icon-img" />
          </div>
          <h3>Personalized study plan</h3>
          <p>Custom schedule tailored to your needs.</p>
          <Link to="/Plan" className="learn-more-link">Learn More &gt;</Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="artificial-intelligence.png" alt="AI Quiz Icon" className="feature-icon-img" />
          </div>
          <h3>AI-Powered Quizzes</h3>
          <p>Smart quizzes to strengthen your weak areas.</p>
          <Link to="/Quiz" className="learn-more-link">Learn More &gt;</Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="growth.png" alt="Progress Tracking Icon" className="feature-icon-img" />
          </div>
          <h3>Track your progress</h3>
          <p>Monitor performance & achievements</p>
          <Link to="/Dashboard" className="learn-more-link">Learn More &gt;</Link>
        </div>
      </section>

      {/* Transform Section */}
      <section className="transform-section">
        <h2>Transform Your Study Experience</h2>
        <p>Join thousands of students improving their grades with our intelligent study assistant</p>
        
        <div className="step-cards">
          <div className="step-card teal">
            <h4>Create custom study plans</h4>
            <div className="image-wrapper">
              <img src="4.jpg" alt="Study Schedule Planner" />
            </div>
          </div>

          <div className="step-card yellow">
            <h4>Take adaptive quizzes</h4>
            <div className="image-wrapper">
              <img src="2.jpg" alt="Quiz Interface" />
            </div>
          </div>

          <div className="step-card green">
            <h4>Analyze your performance</h4>
            <div className="image-wrapper">
              <img src="3.jpg" alt="Performance Chart" />
            </div>
          </div>
        </div>
        
        <button className="join-now-btn" onClick={() => navigate('/signup')}>
          Join Now
        </button>
      </section>
  
      {/* Footer */}
      <footer className="noti-footer">
        <h3>Study Smarter, Achieve more!</h3>
        <div className="footer-action-btns">
          <button className="btn-footer-sign" onClick={() => navigate('/signup')}>
            Sign up now
          </button>
          <button className="btn-footer-learn" onClick={() => navigate('/about')}>
            Learn more
          </button>
          <div className="footer-copyright">
            © 2024 Smart Study Assistant - All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;