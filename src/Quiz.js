import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import router tools
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate(); // 2. Initialize navigate hook

  return (
    <div className="quiz-page-container">
      {/* Navbar */}
      <nav className="dash-nav">
        <div className="nav-logo">
          {/* Logo links to Dashboard */}
          <Link to="/Dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
        <div className="nav-left">
          {/* Changed anchor tags to Link tags */}
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
          <span className="nav-emoji" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar-circle" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      <main className="quiz-content">
        {/* Hero Section */}
        <header className="quiz-hero">
          <div className="hero-text">
            <h1>Quizzes</h1>
            <p>Practice quizzes, track your scores, and improve in your weak areas!</p>
            {/* Button navigates to quiz start */}
            <button className="get-started-btn" onClick={() => navigate('/Quiz')}>Get Started</button>
          </div>
          <div className="hero-img-box">
            <img src="6.jpg" alt="Quiz Illustration" className="hero-main-img" />
          </div>
        </header>

        {/* Search & Filter Section */}
        <div className="search-filter-section">
          <div className="controls-left">
            <div className="search-bar">
              <img src="11.png" alt="search" className="icon-img-small" />
              <input type="text" placeholder="Search Quizzes..." />
            </div>
            <div className="filter-btns">
              <button className="f-btn yellow">All Modules</button>
              <button className="f-btn cyan">Recent</button>
            </div>
          </div>
          <img src="8.png" alt="QA" className="floating-qa-img" />
        </div>

        {/* Recommended Quizzes */}
        <section className="quiz-section">
          <h3 className="section-title">Recommended Quizzes</h3>
          <div className="recommendation-grid">
            {[1, 2].map((_, i) => (
              <div key={i} className="recommendation-card">
                <div className="card-header green-bg">
                  <img src="7.png" alt="Book" className="card-icon-img" />
                  {i === 0 ? "Mobile Application Quiz" : "Software Development Quiz"}
                </div>
                <div className="card-body">
                  <p>Practice flutter essentials</p>
                  <p>20 Questions</p>
                  <div className="card-footer">
                    <span className="ai-tag">Suggested by AI</span>
                    {/* Button navigates to quiz start */}
                    <button className="start-btn" onClick={() => navigate('/Start')}>Start Quiz</button>
                  </div>
                  <p className="attempt-limit">Only 5 Attempts</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Quizzes List */}
        <section className="quiz-section">
          <h3 className="section-title">All Quizzes</h3>
          <div className="module-tags">
            <span className="m-tag" style={{ backgroundColor: '#eefc91' }}>MAD</span>
            <span className="m-tag" style={{ backgroundColor: '#3fb85b' }}>SQA</span>
            <span className="m-tag" style={{ backgroundColor: '#f3b043' }}>ICS</span>
            <span className="m-tag" style={{ backgroundColor: '#2a9be2' }}>DBMS</span>
            <span className="m-tag" style={{ backgroundColor: '#f26d6d' }}>AI/ML</span>
            <span className="m-tag" style={{ backgroundColor: '#f4a261' }}>DSA</span>
          </div>

          <div className="bottom-grid">
            <div className="white-panel list-panel">
              <h4>MAD</h4>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="row-item">
                  <div className="row-left">
                    <img src="9.png" alt="help" className="row-icon" />
                    <div>
                      <p className="p-main">Data Structure And Algo</p>
                      <p className="p-sub">Algo Review</p>
                    </div>
                  </div>
                  {/* Row button navigates to quiz start */}
                  <button className="orange-btn-row" onClick={() => navigate('/Quiz')}>Start Quiz</button>
                </div>
              ))}
            </div>

            <div className="white-panel history-panel">
              <h4>All Quizzes</h4>
              {[
                { t: 'Data Structure And Algo', s: '76%', p: true },
                { t: 'Software Quality Assurance', s: '43%', p: false },
                { t: 'Information and Cyber Security', s: '55%', p: true }
              ].map((item, idx) => (
                <div key={idx} className="history-row">
                  <div className="row-left">
                    <img src="stack.png" alt="books" className="row-icon" />
                    <div>
                      <p className="p-main">{item.t}</p>
                      <p className="p-score">{item.s}</p>
                    </div>
                  </div>
                  <div className={`status-pill ${item.p ? 'passed' : 'failed'}`}>
                    <img src={item.p ? 'check_icon.png' : 'cross_icon.png'} className="status-img" alt="status" />
                    {item.p ? 'Passed' : 'Failed'}
                  </div>
                </div>
              ))}
              {/* View all link navigates to main quiz page */}
              <Link to="/Quiz" className="view-all-link">View all &gt;&gt;</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="quiz-footer">
        <h3>Study Smarter, Achieve more!</h3>
        <div className="footer-action-btns">
          {/* Footer buttons navigate */}
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

export default Quiz;