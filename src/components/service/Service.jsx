import React from "react";
import { FaPalette, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import "./service.css";

const Service = () => {
  const services = [
    {
      title: "Graphic Design",
      description:
        "I create visually compelling designs that communicate clearly and leave a lasting impression. I specialize in branding, UI/UX, and digital content, bringing ideas to life with creativity and precision.",
      projects: "10+ Projects",
      icon: <FaPalette className="service-icon" />,
      color: "#6C63FF",
    },
    {
      title: "Front-End Development",
      description:
        "I build fast, responsive, and user-friendly applications. I turn ideas into smooth digital experiences using modern tools and clean design principles.",
      projects: "21+ Projects",
      icon: <FaMobileAlt className="service-icon" />,
      color: "#FF6584",
    },
    {
      title: "Mobile App Development",
      description:
        "Crafting modern, scalable, and intuitive mobile applications tailored for both Android and iOS platforms. I specialize in building seamless user experiences with clean UI, high performance, and efficient backend integration. Whether it’s a startup idea or enterprise solution, I bring your vision to life with Flutter, React Native, or native technologies.",
      projects: "5+ Projects",
      icon: <FaMobileAlt className="service-icon" />,
      color: "#FF6584",
    },

    {
      title: "Back-End Development",
      description:
        "I develop robust server-side applications and design efficient, scalable databases. Focused on performance, security, and seamless integration to power modern web experiences.",
      projects: "15+ Projects",
      icon: <FaServer className="service-icon" />,
      color: "#20B2AA",
    },
  ];

  return (
    <section className="service-section">
      <motion.div
        className="service-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="service-tag">
          <FaPalette className="header-icon" />
          <h4>My Services</h4>
        </div>
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">
          Professional solutions tailored to your needs
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ "--accent-color": service.color }}
          >
            <div className="service-icon-container">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="project-count">
              <span>{service.projects}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
