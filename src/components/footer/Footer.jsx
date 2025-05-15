import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaEnvelope />, href: "mailto:haftu.g.mu24@gmail.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="footer-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Haftu Girmay. All rights reserved.
        </motion.p>
      </div>

      <div className="footer-decoration"></div>
    </footer>
  );
};

export default Footer;
