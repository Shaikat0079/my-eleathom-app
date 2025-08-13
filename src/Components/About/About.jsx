import React, { useState } from "react";
import "./About.css";
import { FaBookOpen, FaGavel, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const toggleDialogue = () => setShowDialogue((prev) => !prev);

  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="infoAbout">
        <p>
          EleaThom Mentorship program for law students was founded by Atlegang
          Govuza in 2023, following a growing interest in mentorship emanating
          from her YouTube Channel.
        </p>

        <button className="btn" onClick={toggleDialogue}>
          {showDialogue ? "Read Less..." : "Read More..."}
        </button>

        {showDialogue && (
          <div className="dialogue-box">
            <p>
              Atlegang is an admitted attorney graduating with a Bcom Law and
              LLB degree from Tuks in 2014, and an LLM in Labour law from Wits
              in 2020. She has experience in the fields of Mergers &
              Acquisitions, public law and intellectual property law. In 2020,
              she got an opportunity to clerk for retired Justice Jafta, a move
              which forever shaped her legal career. Atlegang creates law
              student related content to assist law students in navigating
              through issues in the profession.
            </p>
          </div>
        )}
      </div>
      <div className="directors">
        <h1>Our Directors</h1>
        <div className="director">
          <div className="card">
            <div className="image-wrapper">
              <img src="/images/Shoki Malovhela.jpg" alt="Director 1" />
            </div>
            <h3>Shoki Malovhela</h3>
            <p>
              Seasoned attorney in the areas of telecommunications, media and
              technology, with Fintech exposure.
            </p>
            <a
              href="https://www.linkedin.com/in/reshoketswe-shoki-malovhela-88b87436/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-Color" /> Connect on LinkedIn
            </a>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src="/images/Aphindile Govuza.jpg" alt="Director 1" />
            </div>
            <h3>Aphindile Govuza</h3>
            <p>Attorney and philanthropist dedicated to youth development.</p>
            <a
              href="https://www.linkedin.com/in/aphindile-govuza-50216445/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-Color" /> Connect on LinkedIn
            </a>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src="/images/Atlegang Govuza.jpg" alt="Director 1" />
            </div>
            <h3>Atlegang Govuza</h3>
            <p>
              Founder and Director of Malovhela Attorneys specialising in
              General corporate law, M&A, Compliance, IP and Dispute Resolution.
            </p>
            <a
              href="https://www.linkedin.com/in/atlegang-govuza-64052a39/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-Color" /> Connect on LinkedIn
            </a>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHVglB9-b4Cbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722796604113?e=1756944000&v=beta&t=n4W23yVYnq4oGnHQAryWm-5OFrgo4AgkA_ViFolKOcs"
                alt="Director 1"
              />
            </div>
            <h3>Yonela Mashida</h3>
            <p>
              Seasoned legal advisor specialising in legal & regulatory
              compliance.
            </p>
            <a
              href="https://www.linkedin.com/in/yonela-mashida-ab054841/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-Color" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="icon">
            <FaGavel />
          </div>
          <h3>Eleanor's Legacy</h3>
          <p>
            Eleanor was a community nurse who dedicated her life to caring for
            others and uplifting her community through compassionate service and
            unwavering commitment to health and wellness.
          </p>
        </div>

        <div className="box">
          <div className="icon">
            <FaBookOpen />
          </div>
          <h3>Thomas's Legacy</h3>
          <p>
            Thomas was a school principal who shaped countless young minds
            through education, leadership, and mentorship, leaving a lasting
            impact on generations of students and educators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
