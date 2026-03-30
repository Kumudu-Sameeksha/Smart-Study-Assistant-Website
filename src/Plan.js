import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router components
import './Plan.css';

const Plan = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  const days = [
    { name: 'Mon', date: 12 },
    { name: 'Tue', date: 13 },
    { name: 'Wed', date: 14 },
    { name: 'Thurs', date: 15 },
    { name: 'Fri', date: 16, active: true },
    { name: 'Sat', date: 18 },
    { name: 'Sun', date: 19 },
  ];

  const tasks = [
    { title: 'Data Structure And Algo', subtitle: 'Algo Review', status: 'Pending', statusClass: 'pending' },
    { title: 'Software Quality Assurance', subtitle: 'Non functional Review', status: 'Completed', statusClass: 'completed' },
    { title: 'Information and Cyber Security', subtitle: 'Threats Review', status: 'In progress', statusClass: 'in-progress' },
  ];

  return (
    <div className="plan-container">
      {/* Top Navbar */}
      <nav className="dash-nav">
        <div className="nav-logo">
          {/* Logo links back to landing or dashboard */}
          <Link to="/Dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
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
          <span className="notification-icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      <main className="plan-content">
        {/* Hero Section */}
        <header className="plan-hero">
          <div className="hero-text">
            <h1>Study plan!</h1>
            <p>Organize your study schedule the week and track your progress. Mark topic as complete as you go!</p>
            {/* Button navigates to an interactive part of the plan */}
            <button className="get-started-btn" onClick={() => navigate('/Dashboard')}>Get Started</button>
          </div>
          <div className="hero-img">
            <img src="abs.jpg" alt="Studying at night" />
          </div>
        </header>

        {/* View Toggle */}
        <div className="view-toggle">
          <button className="toggle-btn active">Week</button>
          <button className="toggle-btn">Day</button>
        </div>

        {/* Week Calendar Card */}
        <section className="calendar-card">
          <h3>Study plan for Friday, February 16</h3>
          <div className="week-grid">
            {days.map((day, index) => (
              <div key={index} className={`day-item ${day.active ? 'active-day' : ''}`}>
                <span className="day-name">{day.name}</span>
                <span className="day-date">{day.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Plan Details Grid */}
        <div className="plan-details-grid">
          {/* Left: Task List */}
          <div className="task-section">
            <h3>Study plan for Friday, February 16</h3>
            <div className="task-list">
              {tasks.map((task, index) => (
                <div key={index} className="study-task-card">
                  <div className="task-info">
                    <span className="book-icon">📚</span>
                    <div>
                      <h4>{task.title}</h4>
                      <p>{task.subtitle}</p>
                    </div>
                  </div>
                  <span className={`status-badge ${task.statusClass}`}>{task.status}</span>
                </div>
              ))}
            </div>
            {/* Navigates to a form to add new topics */}
            <button className="add-topic-btn" onClick={() => navigate('/Add')}>Add study topic</button>
          </div>

          {/* Right: Suggestions */}
          <aside className="suggestions-card">
            <div className="suggestion-header">
              <span className="lightbulb">💡</span>
              <h2>Today's plan Suggestions</h2>
            </div>
            <p>Shift Information and Cyber Security into Advanced Mathematics</p>
            <button className="rearrange-btn">Rearrange Topic</button>
          </aside>
        </div>
      </main>

      {/* Footer */}
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

export default Plan;