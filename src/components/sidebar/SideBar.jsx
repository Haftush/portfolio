import React from "react";
import "./sidebar.css";
import Profile from "../../assets/haphiprofiles.jpg";
import instagram from "../../assets/intagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.jpg";

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
        <h1 className="name">Haftu</h1>
        <h2 className="skill">Design & Develop</h2>
      </div>

      <div className="profile-section">
        <img
          src={Profile}
          alt="Haftu Girmay's profile"
          className="profile-image"
        />
        <div className="contact-info">
          <a href="mailto:haftu.g.mu24@gmail.com" className="email">
            haftu.g.mu24@gmail.com
          </a>
          <p className="location">Addis Ababa, Ethiopia</p>
        </div>
      </div>

      <div className="footer-section">
        <div className="social-links">
          <a
            href="https://www.youtube.com/@luxurydesigndevelop"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <img src={youtube} alt="YouTube channel" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/luxurydesigndevelop"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img
              src={instagram}
              alt="Instagram profile"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/haftu-girmay-13b516355"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src={linkedin}
              alt="LinkedIn profile"
              className="social-icon"
            />
          </a>
        </div>

        <button className="contact-btn" onClick={contactpage}>
          HIRE ME
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} | Haftu. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default SideBar;
