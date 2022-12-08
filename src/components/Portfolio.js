import Skills from "./Skills";

function SkillCard(props) {
  const cardStyle = {
    width: "80rem",
    border: "none",
  };
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
}
// function SkillCard() {
//   return (
//     <Card className="skillSection">
//       <Card.Body>
//         <Card.Title>Skills</Card.Title>
//         <Card.Text>
//           <Skills></Skills>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

export default SkillCard;
