import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "zFlD2QMTXPcK2m3xX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Card className="contactCard" style={{ marginTop: "8rem", border: "none" }}>
      <h2 style={{ marginTop: "5rem", textAlign: "center" }}>Contact Me</h2>
      <form
        className="contactForm"
        style={{ display: "flex" }}
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="nameLabel">Name:</label>
        <input className="nameInput" type="text" name="user_name" />
        <label className="emailLabel">Email:</label>
        <input className="emailInput" type="email" name="user_email" />
        <label>Message:</label>
        <textarea name="message" />
        <input className="sendBtn" type="submit" value="Send" />
      </form>
    </Card>
  );
};

export default ContactUs;
