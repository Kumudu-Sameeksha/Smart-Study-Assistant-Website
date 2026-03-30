import React from 'react';
import './Article.css';

const Article = () => {
  return (
    <div className="plan-container">
      {/* Top Navbar */}
      <nav className="article-nav">
        <div className="nav-logo">
    <img src="mind.png" alt="Smart Study Assistant Logo" className="logo-img" />
    <span className="logo-text">Smart Study</span>
  </div>
        <div className="nav-left">
          <a href="#dashboard">Home</a>
          <a href="#dashboard">About us</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#study-plans">Study plans</a>
          <a href="#quizzes">Quizzess</a>
          <a href="#resources">Resources</a>
          <a href="#profile">Profile</a>
          <a href="#dashboard">Contact Us</a>
        </div>
        <div className="nav-right">
          <span className="notification-icon">🔔</span>
          <div className="user-avatar">👤</div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="article-hero-banner">
        <div className="article-hero-text">
          <h1>Microsoft Learning</h1>
          <p>Explore how our AI-powered study assistant can help you succeed.</p>
          <button className="article-get-started">Get Started</button>
        </div>
        <div className="article-hero-illustration">
          <img src="aa.jpg" alt="Resources Search" />
        </div>
      </section>

      <div className="article-container">
        {/* Main Content */}
        <main className="article-body">
          <section className="article-intro">
            <h2>Basic learning things You Need To Know</h2>
            <div className="meta-info">
              <span>📚 By Microsoft learn</span>
              <span>📅 Last Updated: April 25, 2024</span>
              <span>⏱️ Reading Time: 8 min</span>
            </div>

            <div className="content-block">
              <h3>Introduction</h3>
              <p>
                Microsoft Learning is the official training and certification platform provided by Microsoft to help individuals develop technical skills in modern technologies. It offers structured courses, certifications, learning paths, and hands-on practice to build knowledge in areas like cloud computing, artificial intelligence, cybersecurity, data analysis, and software development.
                Through platforms like Microsoft Learn, students and professionals can access free interactive modules, tutorials, and guided projects. Microsoft also provides globally recognized certifications such as Azure, Microsoft 365, Power Platform, and Dynamics 365 certifications, which help learners improve career opportunities and validate their skills.
                Microsoft Learning is designed for beginners, students, IT professionals, and developers who want to gain practical knowledge and stay updated with the latest technology trends.
              </p>
            </div>

            <div className="content-block">
              <h3>Free learning paths</h3>
              <p>Here’s a simple explanation of those free learning paths offered by Microsoft through Microsoft Learn::</p>
              <div className="rule-box">
                <p><strong>1. Azure (Cloud Computing):</strong></p>
                <ul>
                  <li><strong>Azure learning paths 1:</strong> How cloud computing works</li>
                  <li><strong>Azure learning paths 2:</strong> Understanding Azure services</li>
                </ul>
                <p><strong>2. .NET (Software Development):</strong></p>
                <ul>
                  <li><strong>.NET learning paths 1:</strong> How .NET works</li>
                  <li><strong>.NET learning paths 2:</strong> Understanding .NET services</li>
                </ul>
              </div>
            </div>

            <div className="content-block highlight-section">
              <h4>Why These Learning Paths Are Good</h4>
              <p>The learning paths are good because they provide structured, hands-on learning experiences that help learners build practical skills in modern technologies.</p>
              
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="toc-card">
            <h4>Table of Contents</h4>
            <ul>
              <li className="active">Introduction</li>
              <li>Free Learning Paths</li>
              <li>Why These Learning Paths Are Good</li>
              
            </ul>
          </div>

          <div className="tips-card">
            <h4>💡 Quick Learning Tips</h4>
            <ul>
              <li>✔️ Review the article</li>
              <li>✔️ Practice the quizzes</li>
              <li>✔️ Check your progress</li>
            </ul>
            <button className="tips-btn">Get New Tips <span>&gt;</span></button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Article;