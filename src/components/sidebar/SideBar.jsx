import React from "react";
import "./sidebar.css";
import Profile from "../../assets/haphiprofiles.jpg";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const SideBar = () => {
  const contactpage = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar-container">
      <div className="header">
        <h1 className="name">Haftu Girmay</h1>
        <h2 className="skill">Design & Development</h2>
      </div>

      <div className="profile-section">
        <div className="profile-image-container">
          <img
            src={Profile}
            alt="Haftu Girmay's profile"
            className="profile-image"
          />
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <FiMail className="contact-icon" />
            <a href="mailto:haftu.g.mu24@gmail.com" className="email">
              haftu.g.mu24@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FiMapPin className="contact-icon" />
            <p className="location">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="social-links">
          <a
            href="https://www.youtube.com/@luxurydesigndevelop"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="social-link"
          >
            <FaYoutube className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/luxurydesigndevelop"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="social-link"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/haftu-girmay-13b516355"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>

        <button className="contact-btn" onClick={contactpage}>
          HIRE ME
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
