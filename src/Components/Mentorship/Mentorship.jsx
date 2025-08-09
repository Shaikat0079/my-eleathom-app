import React from "react";
import "./Mentorship.css";
import { FiZap } from "react-icons/fi";
import { IoDocumentTextOutline, IoPersonOutline } from "react-icons/io5";
const Mentorship = () => {
  return (
    <div>
      <h1 className="mentor-Big">Mentorship Program</h1>
      <div className="info-Mentor">
        <p>
          Each year, the program selects 30 law students in their 3rd and 4th
          year, and unemployed law graduates, from across the country to
          participate in the mentorship program.
        </p>
      </div>
      <div className="banner">
        <h4>Applications open in October each year</h4>
      </div>
      <div className="details">
        <p>
          The program is designed to equip students with personal branding tips,
          the knowledge of what it takes to be a successful practitioner and
          technical writing and research skills through written assessments.
        </p>
        <br />
        <p>
          Ultimately, each mentee must finish the program with a better chance
          of succeeding in the early stages of their legal careers. This sets
          the tone for the rest of their professional endeavours.
        </p>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="icon">
            <IoPersonOutline />
          </div>
          <h3>Personal Branding</h3>
          <p>
            Learn how to build and maintain a professional brand that sets you
            apart in the legal field.
          </p>
        </div>

        <div className="box">
          <div className="icon">
            <IoDocumentTextOutline />
          </div>
          <h3>Technical Writing</h3>
          <p>
            Develop essential legal writing and research skills through
            practical assessments and feedback.
          </p>
        </div>

        <div className="box">
          <div className="icon">
            <FiZap />
          </div>
          <h3>Career Success</h3>
          <p>
            Gain insights into what it takes to be a successful legal
            practitioner in today's competitive market.
          </p>
        </div>
      </div>
      <h1 className="mentor-Big">
        EleaThom Mentorship 2025 Assistants & Alumni
      </h1>
      <div className="images-name">
        <div className="image-card">
          <img src="/images/Noxolo Mkhize.jpg" alt="Noxolo Mkhize" />
          <h4>Noxolo Mkhize</h4>
        </div>

        <div className="image-card">
          <img src="/images/Motlatso Mohale .jpg" alt="Motlatso Mohale" />
          <h4>Motlatso Mohale</h4>
        </div>

        <div className="image-card">
          <img src="/images/Mihlali Hoofman.jpg" alt="Mihlali Hoofman" />
          <h4>Mihlali Hoofman</h4>
        </div>

        <div className="image-card">
          <img src="/images/Kaylen Healy.jpg" alt="Kaylen Healy" />
          <h4>Kaylen Healy</h4>
        </div>
      </div>
      <h1 className="mentor-Big">EleaThom 2025 Mentors</h1>
      <div className="mentor-info">
        <p>Our experienced mentors guide and support each mentee throughout their journey.</p>
        <small>Mentor profiles and photos will be updated soon.</small>
      </div>
    </div>
  );
};

export default Mentorship;
