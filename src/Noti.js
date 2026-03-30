import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router tools
import './Noti.css';

const Noti = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  const notificationsToday = [
    {
      type: 'Deadline',
      title: 'Upcoming Deadline: History Assignment Due Tomorrow!',
      desc: "Don't forget your history assignment on Ancient Rome is due tomorrow. Check your study plan for details.",
      time: '15 mins ago',
      icon: '📅'
    },
    {
      type: 'Update',
      title: 'Quiz Score Update: New Math Quiz Result',
      desc: 'You scored 8/10 on your recent Algebra quiz. Review your progress and try again to improve your score.',
      time: '30 mins ago',
      icon: '📝'
    },
    {
      type: 'Reminder',
      title: 'Study Reminder: Review English Grammar',
      desc: 'Your daily study reminder: Spend time reviewing basic grammar rules today.',
      time: '1 hour ago',
      icon: '🔔'
    }
  ];

  return (
    <div className="noti-container">
      {/* Top Navbar */}
      <nav className="dash-nav">
        <div className="nav-logo">
          {/* 3. Link logo back to Dashboard */}
          <Link to="/Dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
        <div className="nav-left">
          {/* 4. Replaced 'a' tags with 'Link' components */}
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
          <span className="notification-icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      {/* Header Banner */}
      <header className="noti-header">
        <div className="header-content">
          <h1>Notifications</h1>
          <p>Stay updated with your important tasks, reminders, and alerts.</p>
          <div className="filter-bar">
            <button className="filter-btn active">All</button>
            <button className="filter-btn" onClick={() => navigate('/Plan')}>Study Plan</button>
            <button className="filter-btn" onClick={() => navigate('/Quiz')}>Quizzes</button>
            <button className="filter-btn">General</button>
            <button className="check-box-btn">✔️</button>
          </div>
        </div>
        <div className="header-illustration">
          <img src="ac.jpg" alt="bell illustration" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="noti-main">
        <div className="noti-content-left">
          <div className="section-title-row">
            <h3>Recent Notifications</h3>
            <button className="clear-all-btn">Clear All</button>
          </div>

          <h4 className="day-divider">Today</h4>
          {notificationsToday.map((n, i) => (
            <div className="noti-card" key={i}>
              <div className="noti-card-icon">{n.icon}</div>
              <div className="noti-card-text">
                <strong>{n.title}</strong>
                <p>{n.desc}</p>
              </div>
              <div className="noti-card-actions">
                <button className="mark-read-btn">Mark as Read</button>
                <span className="time-stamp">{n.time} <span>&gt;</span></span>
              </div>
            </div>
          ))}

          <div className="section-title-row">
            <h4 className="day-divider">Yesterday</h4>
            <button className="clear-link">Clear All</button>
          </div>

          <div className="noti-card secondary" onClick={() => navigate('/Resources')} style={{ cursor: 'pointer' }}>
            <div className="noti-card-icon blue">📄</div>
            <div className="noti-card-text">
              <strong>Resource Suggestion: Algebra Formula Cheat Sheet</strong>
              <p>Check out this useful cheat sheet to help you with algebra formulas. View Resource</p>
            </div>
            <span className="bookmark-icon">🔖</span>
          </div>

          <div className="noti-card secondary" onClick={() => navigate('/Quiz')} style={{ cursor: 'pointer' }}>
            <div className="noti-card-icon purple">📝</div>
            <div className="noti-card-text">
              <strong>New Quiz Available: Take a Chemistry Basics Quiz</strong>
              <p>A new Chemistry quiz is available to help you practice. Test your knowledge now!</p>
            </div>
            <span className="bookmark-icon">🔖</span>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="noti-sidebar">
          <div className="tips-card">
            <h4>💡 Quick Grammar Tips</h4>
            <ul>
              <li>✔️ Review grammar part of speech definitions</li>
              <li>✔️ Practice correct punctuation in sample sentences</li>
              <li>✔️ Watch video on common grammar mistakes</li>
            </ul>
            <button className="tips-btn">Get New Tips <span>&gt;</span></button>
          </div>
          <div className="sidebar-illustration">
             <img src="5.jpg" alt="sidebar art" />
          </div>
        </aside>
      </main>

      {/* Dark Blue Footer */}
      <footer className="noti-footer">
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

export default Noti;