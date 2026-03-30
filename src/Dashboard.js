import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="dash-nav">
        <div className="nav-logo">
          {/* Clicking the logo returns to landing */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="logo.jpeg" alt="Smart Study Assistant Logo" className="logo-img" />
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

      <main className="dash-content">
        {/* Welcome Banner */}
        <header className="welcome-banner">
          <div className="welcome-text">
            <h1>Welcome Back, Peter!</h1>
            <p>Let's go back to learning!</p>
            {/* Navigates to the Quiz Start page */}
            <button className="get-started-btn" onClick={() => navigate('/quiz-start')}>
              Get Started
            </button>
          </div>
          <div className="welcome-img">
            <img src="5.jpg" alt="Student Illustration" />
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="dash-grid">
          <div className="grid-left">
            <section className="widget schedule-widget">
              <h3>Study Smarter, Achieve more!</h3>
              <div className="calendar-schedule-flex">
                <div className="mini-calendar">
                  <p className="month-nav"> &lt; January &gt; </p>
                  <img src="1.jpg" alt="January 2026 Calendar" />
                </div>
                
                <div className="daily-tasks">
                  <h4>Monday, January 12</h4>
                  <div className="task-item">Mobile Application: 9am - 12pm</div>
                  <div className="task-item">Software QA: 12.30PM - 1.30pm</div>
                  <div className="task-item blue-task">DBMS: 2PM - 5pm</div>
                  {/* Redirects to the study plan creator */}
                  <button className="start-studying-btn" onClick={() => navigate('/plan')}>
                    Start studying
                  </button>
                </div>
              </div>
            </section>

            <section className="widget activities-widget">
              <h3>Upcoming Activities</h3>
              <div className="activities-list">
                <div className="activity-item">
                  <img src="people.png" alt="Workshop icon" className="activity-icon" style={{width: '40px', float: 'left', marginRight: '10px'}} />
                  <strong>Figmate Workshop</strong>
                  <span>Thursday, February 15</span>
                </div>
                <div className="activity-item">
                    <img src="people.png" alt="Workshop icon" className="activity-icon" style={{width: '40px', float: 'left', marginRight: '10px'}} />
                  <strong>Genz Chapter</strong>
                  <span>Wednesday, March 20</span>
                </div>
                <div className="activity-item">
                    <img src="people.png" alt="Workshop icon" className="activity-icon" style={{width: '40px', float: 'left', marginRight: '10px'}} />
                  <strong>SkillShare</strong>
                  <span>Monday, March 24</span>
                </div>
                <div className="activity-item">
                    <img src="people.png" alt="Workshop icon" className="activity-icon" style={{width: '40px', float: 'left', marginRight: '10px'}} />
                  <strong>Green Fiesta</strong>
                  <span>Monday, April 06</span>
                </div>
              </div>
            </section>
          </div>

          <div className="grid-right">
            <section className="widget quizzes-widget">
              <h3>Upcoming Quizzes & Deadlines</h3>
              <div className="quiz-card" onClick={() => navigate('/quiz-start')} style={{ cursor: 'pointer' }}>
                <span className="quiz-icon">📘</span>
                <div>
                  <p className="quiz-title">DBMS Quiz</p>
                  <p className="quiz-time">Tomorrow : 1.30pm</p>
                </div>
              </div>
              <div className="quiz-card" onClick={() => navigate('/quiz-start')} style={{ cursor: 'pointer' }}>
                <span className="quiz-icon">🛡️</span>
                <div>
                  <p className="quiz-title">Cyber Security Quiz</p>
                  <p className="quiz-time">Friday, February 20</p>
                </div>
              </div>
            </section>

            <section className="widget progress-widget">
              <h3>Your Progress</h3>
              <div className="progress-container">
                <button className="monthly-btn">Monthly Progress</button>
                <div className="bar-chart-placeholder">
                  <div className="bar orange" style={{height: '80%'}}></div>
                  <div className="bar blue" style={{height: '60%'}}></div>
                  <div className="bar green" style={{height: '40%'}}></div>
                  <div className="bar grey" style={{height: '70%'}}></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Week Topics & Recommendations Section */}
      <section className="recommendations-section">
        <div className="section-header">
          <h2>Week Topics & Recommendations</h2>
          <p>Join thousands of students improving their grades with our intelligent study assistant</p>
        </div>
        
        <div className="recommendation-cards">
          {/* Link to specific Grammar Article */}
          <div className="rec-card yellow-card" onClick={() => navigate('/article')} style={{ cursor: 'pointer' }}>
            <h4> Basics</h4>
            <div className="rec-image-wrapper">
              <img src="planning.png" alt="Grammar Basics" />
            </div>
          </div>

          {/* Link to Notifications page */}
          <div className="rec-card cyan-card" onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>
            <h4>Notifications</h4>
            <div className="rec-image-wrapper">
              <img src="alert.png" alt="Notifications" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
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

export default Dashboard;