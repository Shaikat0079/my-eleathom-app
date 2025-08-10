import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand / About */}
        <div className="f-col brand">
          <div className="brand-head">
            <img src={logo} alt="Eleathom logo" />
            <div>
              <h3>Eleathom</h3>
              <small>Legal Excellence</small>
            </div>
          </div>
          <p className="brand-text">
            Empowering the next generation of legal professionals through
            comprehensive resources and community support.
          </p>

          <div className="socials">
            
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/eleathom-mentorship-npc/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="f-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#mentorship">Services</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="f-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Career Guide</a></li>
            <li><a href="#">Legal Writing</a></li>
            <li><a href="#">Exam Prep</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="f-col">
          <h4>Contact Info</h4>
          <ul className="contact">
            <li>123 Legal Avenue</li>
            <li>Law District, LD 12345</li>
            <li>+1 (555) 123-4567</li>
            <li>info@eleathom.co.za</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <hr />
        <p>
          © 2025 Eleathom. All rights reserved. | Developed by A2Z Communications
        </p>
      </div>
    </footer>
  );
};

export default Footer;
