import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kelsieszost from "../assets/kelsieszost.jpg";
import AboutModal from "./Modal";

function AboutMe(props) {
  const cardStyle = {
    border: "none",
  };
  return (
    <Card id="about-me" className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title>It's nice to meet you.</Card.Title>
        <Card.Text>
          “Without creativity, there would be no progress, and we would be
          forever repeating the same patterns.” —Edward de Bono
        </Card.Text>
        <div className="imageContainer">
          <img src={kelsieszost} width="450px" alt="portfolio" />
        </div>
        <Button className="imageButton" onClick={props.MoreAboutMe}>
          Click for More About Me
        </Button>
      </Card.Body>
      <div ref={(el) => (props.myRef.current.aboutMe = el)} />
      {props.modalIsOpen && <AboutModal onCancel={props.closeModalHandler} />}
    </Card>
  );
}

export default AboutMe;
