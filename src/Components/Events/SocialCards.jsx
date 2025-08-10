import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./SocialCards.css";

const SocialCards = () => {
  const socialLinks = [
    {
      icon: <FaYoutube />,
      title: "YouTube",
      desc: "Watch educational content and mentorship tips",
      link: "https://www.youtube.com/@atleganggovuza6733",
      color: "red",
      text: "Atlegang Govuza",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      desc: "Follow our daily updates and behind-the-scenes content",
      link: "https://www.instagram.com/eleathom_mentorship/",
      color: "#E1306C",
      text: "@eleathom_mentorship",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      desc: "Connect with our professional network",
      link: "https://www.linkedin.com/company/eleathom-mentorship-npc/",
      color: "#0077B5",
      text: "Company Page",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      desc: "Get in touch directly with our team",
      link: "mailto:info@eleathom.co.za",
      color: "#05805f",
      text: "info@eleathom.co.za",
    },
  ];

  return (
    <div className="social-cards">
      {socialLinks.map((social, index) => (
        <div
          className="social-card"
          key={index}
          style={{ color: social.color }}
        >
          <div className="social-icon">{social.icon}</div>
          <h3>{social.title}</h3>
          <p>{social.desc}</p>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {social.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialCards;
