import React, { useState } from "react";
import "./navbar.css";

// Import Material UI Icons
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { icon: <CottageOutlinedIcon />, tooltip: "Home", targetId: "home" },
    {
      icon: <RecordVoiceOverOutlinedIcon />,
      tooltip: "About",
      targetId: "about",
    },
    {
      icon: <ContactPageOutlinedIcon />,
      tooltip: "Resume",
      targetId: "resume",
    },
    {
      icon: <DryCleaningOutlinedIcon />,
      tooltip: "Services",
      targetId: "services",
    },
    {
      icon: <ConstructionOutlinedIcon />,
      tooltip: "Skills",
      targetId: "skills",
    },
    {
      icon: <ContactMailOutlinedIcon />,
      tooltip: "Contact",
      targetId: "contact",
    },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(id);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li
            key={item.targetId}
            className={`nav-item ${
              activeItem === item.targetId ? "active" : ""
            }`}
            onClick={() => handleClick(item.targetId)}
            onMouseEnter={() => setActiveItem(item.targetId)}
            onMouseLeave={() => setActiveItem(null)}
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
