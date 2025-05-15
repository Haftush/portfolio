import React, { useState } from "react";
import "./navbar.css";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiSettings,
  FiCode,
  FiMail,
} from "react-icons/fi";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <FiHome />, tooltip: "Home", targetId: "home" },
    { icon: <FiUser />, tooltip: "About", targetId: "about" },
    { icon: <FiFileText />, tooltip: "Resume", targetId: "resume" },
    { icon: <FiSettings />, tooltip: "Services", targetId: "services" },
    { icon: <FiCode />, tooltip: "Skills", targetId: "skills" },
    { icon: <FiMail />, tooltip: "Contact", targetId: "contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(id);
  };

  return (
    <nav
      className={`navbar ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li
            key={item.targetId}
            className={`nav-item ${
              activeItem === item.targetId ? "active" : ""
            }`}
            onClick={() => handleClick(item.targetId)}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="tooltip">{item.tooltip}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
