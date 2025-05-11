import React, { useEffect } from "react";
import IType from "itype"; // Importing the itype package
import { useState } from "react";
import "./type.css";

const Typing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Typing effect when the component mounts
    new IType("#typingEffect", {
      strings: ["Designer | Mobile App & Web Full-Stack Developer"],
      speed: 100, // Typing speed
      backSpeed: 50, // Backspacing speed
      backDelay: 500, // Delay before backspacing
      backspace: true, // Enable backspacing
      loop: true, // Loop the typing effect
    });

    // Simulating loading time for animation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="content">
          <h1>Haftu</h1>
          <p id="typingEffect"></p>{" "}
          {/* The typing effect will be applied here */}
        </div>
      )}
    </div>
  );
};

export default Typing;
