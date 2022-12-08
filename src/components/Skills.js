import React from "react";
import { SkillBars } from "react-skills";

const skillsData = [
  {
    name: "ReactJS",
    level: 90,
    color: "#00d8ff",
  },
  {
    name: "ExpressJS",
    level: 85,
    color: "#6cc24a",
  },
  {
    name: "MySQL",
    level: 80,
    color: "#00758f",
  },
  {
    name: "GraphQL",
    level: 75,
    color: "#e535ab",
  },
  {
    name: "Apollo",
    level: 72,
    color: "RGBA(163,67,246,1)",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "RGBA(248,214,73,1)",
  },
];

// ...
function Skills() {
  return <SkillBars skills={skillsData} />;
}

export default Skills;
