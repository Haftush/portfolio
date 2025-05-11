import React from "react";
import "./sidebar.css";
import Profile from "../../assets/haphiprofiles.jpg";
import instagram from "../../assets/intagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.jpg";

const SideBar = () => {
  // 👇 Add this function
  const contactpage = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebarcontainer">
      <div className="header">
        <h1 className="name">Haftu</h1>
        <h2 className="skill">Design & Develop</h2>
      </div>
      <div className="imagecontainer">
        <img src={Profile} alt="" className="image" />
        <div className="address">
          <span>
            <a href="mailto:haftu.g.mu24@gmail.com" className="email">
              <h3>haftu.g.mu24@gmail.com</h3>
            </a>
            <h3 className="location">Addis Abeba, Ethiopia</h3>
          </span>
        </div>

        <div className="sociallinks">
          <p className="copyright">
            &copy; {new Date().getFullYear()} | Haftu. All Rights Reserved
          </p>
          <div className="socialicons">
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>

          {/* 👇 Call the scroll function on click */}
          <button className="contactme" onClick={contactpage}>
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
