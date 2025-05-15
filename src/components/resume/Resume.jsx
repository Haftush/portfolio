import React from "react";
import "./resume.css";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  const resumeData = [
    {
      year: "2018–2021",
      title: "BSc in Information System",
      description: "Mekelle University, Ethiopia",
      type: "education",
      icon: "🎓",
    },
    {
      year: "2023–2024",
      title: "Graphics & UI/UX Designer",
      description: "Completed certification and Hired in Canvas Printing",
      type: "experience",
      icon: "🎨",
    },
    {
      year: "2024–2025",
      title: "Full Stack Developer",
      description: "Ministry of Revenue Ethiopia, Addis Ababa",
      type: "experience",
      icon: "💻",
    },
    {
      year: "2025–Present",
      title: "Freelance Developer",
      description: "Working with international clients",
      type: "freelance",
      icon: "🚀",
    },
  ];

  return (
    <div className="resume-container">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="icon-box">
          <FaFileAlt className="icon" />
        </div>
        <h2>My Journey</h2>
        <p>
          From education to professional experience — here's a glance at my
          story.
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {resumeData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.type}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{item.icon}</div>
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
