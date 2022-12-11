import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ContactUs = (props) => {
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
        (response) => {
          prompt("Email Sent");
        },
        (error) => {
          prompt("Error");
        }
      );
  };

  return (
    <React.Fragment>
      <div
        className="contactUs"
        ref={(el) => (props.myRef.current.contactUs = el)}
      ></div>
      <Card className="contactContainer" style={{ border: "none" }}>
        <Card.Title className="contactHeader text-center">
          Contact Me
        </Card.Title>
        <Form className="formContainer" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mb-2 mt-3">Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user_email"
            />
            <Form.Label className="mb-2 mt-3">Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="user_name"
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Message" />
          </Form.Group>
          <Button className="submitBtn" type="submit" value="Send">
            Submit
          </Button>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default ContactUs;
