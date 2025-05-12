import React from "react";
import "./home.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import cover from "./cover.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-tag">
        <PlayCircleOutlineIcon className="intro-icon" />
        <span>Introduction</span>
      </div>

      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="welcome-message">
            Hello, this is <span className="highlight">Haftu</span> Design and
            Develop
          </h1>
          <h2 className="subtitle">Full Stack Application</h2>
          <blockquote className="quote">
            "I'm the rare breed that turns wireframes into wonders and code into
            experiences. I don't hand designs to devs — I am the dev."
          </blockquote>
        </div>

        <div className="image-container">
          <img src={cover} alt="Haftu's work" className="cover-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
