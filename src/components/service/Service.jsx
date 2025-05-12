import React from "react";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <DryCleaningOutlinedIcon />
        <h4>Service</h4>
      </div>
      <div className="graphic-service">
        <h1>Graphic Designer</h1>
        <span>
          I'm a Graphic Designer passionate about creating visually compelling
          designs that communicate clearly and leave a lasting impression. I
          specialize in branding, UI/UX, and digital content, bringing ideas to
          life with creativity and precision.
        </span>
        <div className="completed-project">
          <h3 className="pname">10+ Projects</h3>
        </div>
      </div>
      <div className="graphic-service">
        <h1>Mobile & Front-End Developer</h1>
        <span>
          I’m a passionate Mobile & Front-End Developer focused on building
          fast, responsive, and user-friendly applications. I turn ideas into
          smooth digital experiences using modern tools and clean design.
        </span>
        <div className="completed-project">
          <h3 className="pname">21+ Projects</h3>
        </div>
      </div>
      <div className="graphic-service">
        <h1>Back-End & Database</h1>
        <span>
          I'm a Backend & Database Developer specializing in building robust
          server-side applications and designing efficient, scalable databases.
          I focus on performance, security, and seamless integration to power
          modern web and mobile experiences.
        </span>
        <div className="completed-project">
          <h3 className="pname">15+ Projects</h3>
        </div>
      </div>
    </div>
  );
};

export default Service;
