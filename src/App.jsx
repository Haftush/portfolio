import React from "react";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/topbar/NavBar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Service from "./components/service/Service";
import Skill from "./components/skill/Skill";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="content-area">
        <SideBar />
        <div className="page-area">
          <NavBar />
          <main className="main-content">
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="services">
              <Service />
            </section>
            <section id="skills">
              <Skill />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
