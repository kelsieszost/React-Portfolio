import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kelsieszost from "../assets/kelsieszost.jpg";

function AboutMe() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>It's nice to meet you</Card.Title>
        <Card.Text>
          “Without creativity, there would be no progress, and we would be
          forever repeating the same patterns.” —Edward de Bono
        </Card.Text>
        <div className="imageContainer">
          <img src={kelsieszost} width="450px" alt="portfolio" />
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
