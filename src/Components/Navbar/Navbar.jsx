import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NAV_HEIGHT = 72; // keep in sync with CSS

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  const linkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -NAV_HEIGHT, // prevents content hiding under fixed nav
    onClick: close
  };

  return (
    <nav className={`nav-container ${open ? "is-open" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Eleathom logo" />
        <div className="brand">
          <h1>Eleathom</h1>
          <small style={{color:"gray"}}>Legal Excellence</small>
        </div>
      </div>

      {/* Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="hero" {...linkProps} activeClass="active">Home</Link></li>
        <li><Link to="about" {...linkProps} activeClass="active">About Us</Link></li>
        <li><Link to="mentorship" {...linkProps} activeClass="active">Mentorship Program</Link></li>
        <li><Link to="events" {...linkProps} activeClass="active">Events & Media</Link></li>
        <li><Link to="contact" {...linkProps} activeClass="active">Contact Us</Link></li>
      </ul>

      {/* Hamburger */}
      <button
        className="hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={toggle}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
