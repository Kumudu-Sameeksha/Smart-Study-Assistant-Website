import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import router tools
import './Resources.css';

const Resources = () => {
  const navigate = useNavigate(); // 2. Initialize navigate hook

  // Data for the Recommended Resources Grid (Updated with paths)
  const recommendedItems = [
    { 
      title: "Microsoft Learn", 
      desc: "Free learning paths for Azure, .NET, Power Platform, and security.", 
      icon: "article.png",
      path: "/article"
    },
    { 
      title: "Google Developers", 
      desc: "Tutorials and guides for Android, web, AI, and cloud tools from Google.", 
      icon: "article.png",
      path: "/article"
    },
    { 
      title: "Oracle Documentation", 
      desc: "Official Java and database documentation. Best source for Java syntax.", 
      icon: "article.png",
      path: "/article"
    },
    { 
      title: "AWS Documentation", 
      desc: "Learning materials for cloud computing and AWS services.", 
      icon: "article.png",
      path: "/article"
    },
    { 
      title: "Coursera", 
      desc: "Offers structured IT and computer science courses from universities.", 
      icon: "article.png",
      path: "/article"
    },
    { 
      title: "Khan Academy", 
      desc: "Simple lessons on computing, programming basics, and theory.", 
      icon: "article.png",
      path: "/article"
    }
  ];

  // Data for the Download List (Updated with paths)
  const downloadItems = [
    { name: "W3Schools", text: "Easy tutorials for HTML, CSS, JavaScript.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png", path: "/article" },
    { name: "GeeksforGeeks", text: "Covers programming, data structures, algorithms.", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991163.png", path: "/article" },
    { name: "MDN Web Docs", text: "High-quality documentation for web technologies.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", path: "/article" },
    { name: "FreeCodeCamp", text: "Free coding lessons and full courses.", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111422.png", path: "/article" },
    { name: "Stack Overflow", text: "Question-and-answer site for coding problems.", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111628.png", path: "/article" },
    { name: "GitHub Docs", text: "Official guides for using Git and GitHub.", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", path: "/article" }
  ];

  return (
    <div className="res-page-container">
      {/* Navbar */}
      <nav className="res-navbar">
        <div className="nav-logo">
          {/* Logo links to Dashboard */}
          <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src="logo.png" alt="Smart Study Assistant Logo" className="logo-img" />
            <span className="logo-text">Smart Study</span>
          </Link>
        </div>
        <div className="res-nav-links">
          {/* Replaced 'a' tags with 'Link' components */}
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
          <span className="icon" onClick={() => navigate('/Noti')} style={{ cursor: 'pointer' }}>🔔</span>
          <div className="user-avatar" onClick={() => navigate('/Profile')} style={{ cursor: 'pointer' }}>👤</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="res-hero-banner">
        <div className="res-hero-text">
          <h1>Resources</h1>
          <p>Browse recommended articles and tutorials to enhance your learning!</p>
          <button className="res-get-started" onClick={() => navigate('/Quiz')}>Get Started</button>
        </div>
        <div className="res-hero-illustration">
          <img src="aa.jpg" alt="Resources Search" />
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="res-search-wrapper">
        <div className="res-search-controls">
          <div className="search-input-box">
            <span className="search-glass">🔍</span>
            <input type="text" placeholder="Search Resources..." />
          </div>
          <div className="filter-buttons">
            <button className="btn-green">All Resources</button>
            <button className="btn-cyan">Recent</button>
          </div>
        </div>
        <div className="res-search-image">
           <img src="ac.jpg" alt="Student studying" />
        </div>
      </section>

      {/* Recommended Grid */}
      <section className="res-section">
        <h3 className="section-title">Recommended Resources For You</h3>
        <div className="res-card-grid">
          {recommendedItems.map((item, idx) => (
            <div className="res-card-with-header" key={idx}>
              <div className="res-card-blue-header">
                <img src={item.icon} alt="Document Icon" className="card-document-icon" />
                <h4>{item.title}</h4>
              </div>
              <div className="res-card-content">
                <p>{item.desc}</p>
                {/* Button navigates to specific article path */}
                <button className="res-read-article" onClick={() => navigate('/Article')}>Read The Article</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download List */}
      <section className="res-section">
        <h3>Download The Resources</h3>
        <div className="res-download-list">
          {downloadItems.map((item, idx) => (
            <div className="res-download-item" key={idx}>
              <img src={item.icon} alt={item.name} className="download-icon" />
              <div className="download-info">
                <strong>{item.name}</strong> - {item.text}
              </div>
              {/* Link navigates to specific article path */}
              <Link to={item.path} className="download-pdf-link">Pdf Download</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="res-footer">
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

export default Resources;