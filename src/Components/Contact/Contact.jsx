import React, { useState } from "react";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to email service / backend
    alert("Thanks! Your message was not actually sent (demo).");
  };

  return (
    <section className="contact section">
      <div className="contact-head">
        <h1>Get In Touch</h1>
        <p>Have questions or want to learn more? We’d love to hear from you.</p>
      </div>

      <div className="contact-grid">
        {/* Left: info list */}
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-icon"><FiMapPin /></span>
            <div>
              <h4>Address</h4>
              <p>123 Legal Avenue<br/>Law District, LD 12345</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FiPhone /></span>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FiMail /></span>
            <div>
              <h4>Email</h4>
              <p>info@eleathom.co.za</p>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="contact-card" role="form">
          <h3>Get in Touch with Us</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name and Surname</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us how we can help you..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button className="contact-submit" type="submit">
              Send Message
            </button>

            <small className="contact-note">
              Messages will be sent to info@eleathom.co.za
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
