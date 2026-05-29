import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h3>EduHub</h3>
          <p>A full-stack e-learning platform for students to learn, grow, and excel.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="footer-section">
          <h4>Tech Stack</h4>
          <ul>
            <li>React.js</li>
            <li>Node.js &amp; Express</li>
            <li>MongoDB</li>
            <li>JWT Auth</li>
          </ul>
        </div>

        {/* Team Members */}
        <div className="footer-section">
          <h4>Team Members</h4>
          <ul>
            <li>Anushka Patil</li>
            <li className="footer-member-highlight">
              Sanika Deshkar
              <span className="footer-links">
                <a href="https://github.com/Sanika-deshkar" target="_blank" rel="noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sanika-deshkar/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <FaLinkedin />
                </a>
              </span>
            </li>
            <li>Samruddhi Raut</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 EduHub | Built by Team
      </div>
    </footer>
  );
};

export default Footer;
