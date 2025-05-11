import React from "react";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/topbar/NavBar";

import "./App.css";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Service from "./components/service/Service";
import Skill from "./components/skill/Skill";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
//import Typing from "./components/tryining/Typing";

function App() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="appContainer">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="service">
          <Service />
        </section>

        <section id="skill">
          <Skill />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
      {/* <Typing /> */}
    </div>
  );
}

export default App;
