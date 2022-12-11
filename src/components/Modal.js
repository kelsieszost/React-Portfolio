import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AboutModal(props) {
  function closeHandler() {
    props.onCancel();
  }
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body className="pt-5 px-4">
          <p>
            My name is Kelsie Szost. I am a full-stack web developer with a
            background in design and digital marketing. I love to code because
            it gives me the ability to transform an idea into a digital
            invention. Creativity is my passion. My inspiration is heavily
            derived from working in the architectural design industry, global
            travel, photography and writing.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button id="closeBtn" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default AboutModal;
