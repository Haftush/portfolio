import React from "react";
import "./home.css";
import { FaPlay } from "react-icons/fa";
import cover from "./cover.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="intro-tag"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaPlay className="intro-icon" />
        <span>Introduction</span>
      </motion.div>

      <div className="content-wrapper">
        <div className="text-content">
          <motion.h1
            className="welcome-message"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm <span className="highlight">Haftu</span>
            <br />
            <span className="profession">
              <span className="typewriter-text">Designer & Developer</span>
              <span className="cursor"></span>
            </span>
          </motion.h1>

          <motion.h2
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Application Specialist
          </motion.h2>

          <motion.blockquote
            className="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            "I'm the rare breed that turns wireframes into wonders and code into
            experiences. I don't hand designs to devs — I am the dev."
          </motion.blockquote>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="primary-btn">View My Work</button>
            <button className="secondary-btn">Contact Me</button>
          </motion.div>
        </div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-wrapper">
            <img src={cover} alt="Haftu's work" className="cover-image" />
            <div className="image-overlay"></div>
            <div className="shape-decoration"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
