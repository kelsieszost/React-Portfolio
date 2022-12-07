import { SkillBars } from "react-skills";

const skillsData = [
  {
    name: "ReactJS",
    level: 65,
    color: "blue",
  },
  {
    name: "JavaScript",
    level: 85,
    color: "green",
  },
];

// ...
function Skills() {
  return <SkillBars skills={skillsData} />;
}

export default Skills;
