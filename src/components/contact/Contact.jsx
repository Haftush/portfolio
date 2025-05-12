import React, { useRef, useState } from "react";
import "./contact.css";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const validate = (name, email) => {
    let valid = true;
    let errorMessages = { name: "", email: "" };

    const hasNumber = /\d/;
    if (!name.trim()) {
      errorMessages.name = "Name is required.";
      valid = false;
    } else if (hasNumber.test(name)) {
      errorMessages.name = "Name should not contain numbers.";
      valid = false;
    }

    // Allow all emails instead of just gmail.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errorMessages.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      errorMessages.email = "Invalid email format.";
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;

    if (!validate(name, email)) return;

    setLoading(true);

    emailjs
      .sendForm(
        "Haphi_12@24",
        "Haphitem_$1221",
        form.current,
        "dAyKikC92s-Cn_iUh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="skill-button">
        <ContactMailOutlinedIcon />
        <h4>Contact</h4>
      </div>
      <h1>Let's Work Together</h1>

      <div className="contact-info">
        <p className="phonenum">+2519501350</p>
        <p>haftu.g.mu24@gmail.com</p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">NAME *</label>
        <input type="text" id="name" name="user_name" />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">EMAIL *</label>
        <input type="email" id="email" name="user_email" />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">MESSAGE</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
