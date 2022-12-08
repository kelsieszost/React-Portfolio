import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kelsieszost from "../assets/kelsieszost.jpg";
import AboutModal from "./Modal";

function AboutMe(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function MoreAboutMe() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  const cardStyle = {
    border: "none",
  };
  return (
    <Card className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title>It's nice to meet you.</Card.Title>
        <Card.Text>
          “Without creativity, there would be no progress, and we would be
          forever repeating the same patterns.” —Edward de Bono
        </Card.Text>
        <div className="imageContainer">
          <img src={kelsieszost} width="450px" alt="portfolio" />
        </div>
        <Button className="imageButton" onClick={MoreAboutMe}>
          Click for More About Me
        </Button>
      </Card.Body>
      {modalIsOpen && <AboutModal onCancel={closeModalHandler} />}
    </Card>
  );
}

export default AboutMe;
