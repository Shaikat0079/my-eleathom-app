import React from "react";
import "./Events.css";
import { FaMapPin } from "react-icons/fa";
import SocialCards from "./SocialCards";

const Events = () => {
  return (
    <div className="events">
      {/* <= added class */}
      <h1 className="events-head">Events & Media</h1>
      <p className="events-text">
        Join our annual seminar and stay connected through our media channels
      </p>
      <div className="event-info">
        <h1>First Annual EleaThom Mentorship Seminar</h1>
        <div className="date-location">
          <div className="e-date">
            <h1>10</h1>
            <p>OCT</p>
            <small>2025</small>
          </div>
          <div className="icon">
            <FaMapPin />
          </div>
          <div className="location">
            <h4>CDH, Sandton</h4>
            <small>Johannesburg</small>
          </div>
        </div>
        <p>
          Join us for our inaugural seminar featuring industry leaders,
          networking opportunities, and professional development sessions.
        </p>
        <button className="register-btn">Register Now</button>
      </div>

      <SocialCards />
    </div>
  );
};

export default Events;
