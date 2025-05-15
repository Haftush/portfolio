import React from "react";
import "./about.css";
import { FaUser } from "react-icons/fa";
import luxury from "./luxury.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="intro-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FaUser className="intro-icon" />
        <span>About Me</span>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>
            I don't just design interfaces, <span>I bring them to life</span>
          </h1>
          <div className="about-description">
            <p>
              I'm a passionate designer-developer hybrid who bridges the gap
              between aesthetics and functionality. With a unique perspective
              that spans both design and development, I create digital
              experiences that are as beautiful as they are functional.
            </p>
            <p>
              My journey began with a curiosity about how things work, which
              evolved into a love for creating digital experiences. I thrive on
              solving complex problems with elegant solutions that delight
              users.
            </p>
            <div className="skills-tags">
              <span>UI/UX Design</span>
              <span>Frontend Development</span>
              <span>Responsive Design</span>
              <span>Mobile Developer</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img src={luxury} alt="Haftu - Designer & Developer" />
            <div className="image-decoration"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
