import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skills from "./Skills";

function SkillCard() {
  return (
    <Card className="skillsCard">
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <Card.Text>
          <Skills></Skills>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
