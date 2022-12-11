import React from "react";
import { SkillBars } from "react-skills";

const skillsData = [
  {
    name: "ReactJS",
    level: 90,
    color: "#F6C27D",
  },
  {
    name: "ExpressJS",
    level: 85,
    color: "#81CC7B ",
  },
  {
    name: "MySQL",
    level: 80,
    color: "#5B89F8 ",
  },
  {
    name: "GraphQL",
    level: 75,
    color: "#e535ab",
  },
  {
    name: "Apollo",
    level: 72,
    color: "#B480F8",
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
