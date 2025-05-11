import React, { useEffect } from "react";
import "./resume.css";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

const Resume = () => {
  const resumeData = [
    { year: "2018-2021", experience: "BSc in INFORMATION SYSTEM" },
    { year: "2023-2024", experience: "Graphics and UI/UX designer Remote" },
    {
      year: "2024-2025",
      experience: (
        <>
          Full stack web developer and <br />
          mobile app developer
        </>
      ),
    },
    { year: "2025-present", experience: "I hope to be freelancer" },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".history");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
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
      <div className="resumebutton">
        <ContactPageOutlinedIcon className="introicon" />
        <h4>Resume</h4>
      </div>
      <h2>Education and Experience</h2>

      <div className="timeline">
        <div className="vertical-line" />
        {resumeData.map((item, index) => (
          <div
            key={index}
            className={`history ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <div className="year">{item.year}</div>
              <div className="experience">{item.experience}</div>
            </div>
            <span className="point" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
