import React, { useState } from "react";
import "./topbar.css";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

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
      targetId: "service",
    },
    {
      icon: <ConstructionOutlinedIcon />,
      tooltip: "Skills",
      targetId: "skill",
    },
    {
      icon: <ContactMailOutlinedIcon />,
      tooltip: "Contact",
      targetId: "contact",
    },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="topcontainer">
      <div className="navbar">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleScroll(item.targetId)}
              className="icon-container"
            >
              {hoveredItem === index && (
                <div className="tooltip">{item.tooltip}</div>
              )}
              <div className="navbariconss">{item.icon}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
