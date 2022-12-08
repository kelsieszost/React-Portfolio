import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Gallery from "./components/Projects";
import SkillsCard from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <SkillsCard />
      <Gallery />
    </div>
  );
}

export default App;
