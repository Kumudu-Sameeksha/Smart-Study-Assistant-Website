import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import Router tools
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  const faqs = [
    "How do I create personalized study plan?",
    "How does the AI-power quiz work?",
    "How can I track my progress?",
    "What should I do if my password forget?",
    "How can I find my weak areas?"
  ];

  const handleSave = (e) => {
    e.preventDefault();
    alert("Your inquiry/information has been saved. We will get back to you!");
  };

  return (
    <div className="contact-page-container">
      {/* Navbar */}
      <nav className="contact-navbar">
        <div className="nav-logo">
          {/* 3. Link logo to Dashboard */}
          <Link to="/Dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
        <div className="contact-nav-links">
          {/* 4. Replaced 'a' tags with 'Link' components */}
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
          <span className="icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero-banner">
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>Got questions or need support?<br/>We are here to help</p>
          <button className="contact-get-started" onClick={() => navigate('/Dashboard')}>Get Started</button>
        </div>
        <div className="contact-hero-illustration">
          <img src="contact.jpg" alt="Contact Support" />
        </div>
      </section>

      {/* Main Content Body */}
      <div className="contact-body-container">
        
        {/* Personal Information Card */}
        <section className="contact-info-form">
          <div className="section-header">
            <span className="user-icon-blue">👤</span>
            <h2>Personal Information</h2>
          </div>
          <form onSubmit={handleSave}> {/* Wrap in form for functionality */}
            <div className="form-fields-grid">
              <div className="field-group">
                <label>Batch:</label>
                <input type="text" placeholder="e.g. 2024" />
              </div>
              <div className="field-group">
                <label>Email:</label>
                <input type="email" placeholder="email@example.com" />
              </div>
              <div className="field-group full-span">
                <label>Full Name:</label>
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn-save-changes">Save Changes</button>
            </div>
          </form>
        </section>

        {/* Contact Method Boxes */}
        <section className="contact-methods-flex">
          <div className="method-box">
            <img src="call.png" alt="Phone" />
            <h3>Call Us</h3>
            <p className="primary-info">0112454788</p>
            <p className="secondary-info">Monday - Friday 9am to 5pm</p>
          </div>
          <div className="method-box">
            <img src="email.png" alt="Email" />
            <h3>Email Us</h3>
            <p className="primary-info">smartstudy@students.ac.lk</p>
            <p className="secondary-info">We will respond within 24 hours</p>
          </div>
          <div className="method-box">
            <img src="location.png" alt="Visit" />
            <h3>Visit Us</h3>
            <p className="primary-info">Colombo road, 2nd lane</p>
            <p className="secondary-info">24 Hours We are here</p>
          </div>
        </section>

        {/* Social Media & Support Illustration */}
        <section className="social-support-section">
          <div className="social-stack">
            <h3>Follow Us on Social Media</h3>
            <div className="social-tile">
              <img src="facebook.png" alt="Facebook" />
              <span>SmartStudy.Facebook.com</span>
            </div>
            <div className="social-tile">
              <img src="instagram.png" alt="Instagram" />
              <span>SmartStudy.instagram.com</span>
            </div>
            <div className="social-tile">
              <img src="whatsapp.png" alt="Whatsapp" />
              <span>SmartStudy.whatsapp.com</span>
            </div>
          </div>
          <div className="support-illustration">
            <img src="con2.jpg" alt="24/7 service" />
            <p>24 Hours Service</p>
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="faq-wrapper">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((text, i) => (
            <div key={i} className="faq-bar" style={{ cursor: 'pointer' }}>
              <span className="q-icon">❓</span>
              <p>{text}</p>
              <span className="plus-sign">+</span>
            </div>
          ))}
        </section>
      </div>

      {/* Dark Blue Footer */}
      <footer className="contact-footer">
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

export default Contact;