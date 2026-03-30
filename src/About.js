import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router components
import './About.css';

const About = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  return (
    <div className="about-page-container">
      {/* Navbar - Updated for React Router */}
      <nav className="dash-nav">
        <div className="nav-logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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
          <span className="nav-emoji" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar-circle" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      <main className="about-content">
        {/* Hero Section */}
        <header className="about-hero">
          <div className="hero-text">
            <h1>About us</h1>
            <p>Empowering Students To Learn Smarter & And Achieve More !</p>
            {/* Navigates to signup or dashboard */}
            <button className="get-started-btn" onClick={() => navigate('/Signup')}>Get Started</button>
          </div>
          <div className="hero-img-box">
            <img src="About.jpg" alt="About Illustration" className="hero-main-img" />
          </div>
        </header>

        {/* We Are Section */}
        <section className="we-are-section">
          <div className="section-title-wrapper">
             <h2 className="section-header">We Are</h2>
             <div className="title-underline"></div>
          </div>
          <p className="intro-text">
            We created smart study Assistant to help student to succeed through personalized 
            Study plans, AI power quizzes and progress tracking. Our mission is to make study 
            more efficient and tailored to each student's unique needs.
          </p>
        </section>

        {/* Staggered Mission & Vision Section */}
        <section className="mission-vision-container">
          <div className="white-panel staggered-row">
            <div className="panel-text">
              <div className="panel-header-row">
                <img src="reso.png" alt="Mission" className="panel-icon" />
                <h3>Our Mission</h3>
                <div className="header-line"></div>
              </div>
              <p>
                Our mission is to empower students to learn smarter, not harder, by providing 
                an easy-to-use digital study assistant that delivers personalized learning support, 
                clear explanations, practice tools, and progress tracking. We aim to make studying 
                more organized, engaging, and effective for every learner by using intelligent 
                technology, structured resources, and student-friendly guidance — helping users 
                build confidence, improve performance, and achieve their academic goals.
              </p>
            </div>
            <div className="panel-image">
               <img src="6.jpg" alt="Mission Illustration" />
            </div>
          </div>

          <div className="white-panel staggered-row reverse">
            <div className="panel-text">
              <div className="panel-header-row">
                <img src="reso.png" alt="Vision" className="panel-icon" />
                <h3>Our Vision</h3>
                <div className="header-line"></div>
              </div>
              <p>
                 Our vision is to build a smart and trusted study platform for all students 
                that makes learning simple, engaging, and accessible anytime. We aim to 
                support personalized and interactive studying while helping learners 
                improve their skills and academic performance. Through innovative 
                technology and student-friendly tools, our goal is to make learning more 
                effective and successful for everyone.
              </p>
            </div>
            <div className="panel-image">
               <img src="aa.jpg" alt="Vision Illustration" />
            </div>
          </div>
        </section>

        {/* Choice & Team Section */}
        <section className="choice-team-grid">
          <div className="why-choose-us">
            <h3>Why choose us ?</h3>
            <div className="choice-item">
              <img src="planning.png" alt="Plan" className="choice-icon" />
              <p>Custom scheduled tailored to your needs.</p>
            </div>
            <div className="choice-item">
              <img src="artificial-intelligence.png" alt="Quiz" className="choice-icon" />
              <p>Smart quizzes to strengthen your weak areas.</p>
            </div>
            <div className="choice-item">
              <img src="growth.png" alt="Progress" className="choice-icon" />
              <p>Monitor performance & achievements</p>
            </div>
          </div>

          <div className="meet-team-panel">
            <div className="team-header">Meet Our Team</div>
            <div className="team-body">
              <p className="team-intro">
                Our team is a small group of dedicated members working together...
              </p>
              <form className="team-contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit" className="team-submit-btn" onClick={(e) => {e.preventDefault(); alert("Message Sent!")}}>Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
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

export default About;