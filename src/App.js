import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Gallery from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;
