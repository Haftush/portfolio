import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#service">Services</a>
            <a href="#skill">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Haftu | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
