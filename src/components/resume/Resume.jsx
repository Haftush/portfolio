import React, { useEffect } from "react";
import "./resume.css";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

const Resume = () => {
  const resumeData = [
    {
      year: "2018–2021",
      title: "BSc in Information System",
      type: "education",
    },
    {
      year: "2023–2024",
      title: "Graphics & UI/UX Designer",
      type: "experience",
    },
    {
      year: "2024–2025",
      title: "Full Stack Web & Mobile Developer",
      type: "experience",
    },
    { year: "2025–Present", title: "Freelance Developer", type: "freelance" },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="resumecontainer">
      <div className="resume-header">
        <div className="icon-box">
          <ContactPageOutlinedIcon fontSize="inherit" />
        </div>
        <h2>My Journey</h2>
        <p>
          From education to professional experience — here’s a glance at my
          story.
        </p>
      </div>

      <div className="timeline">
        <div className="vertical-line"></div>
        {resumeData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              item.type
            }`}
          >
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
