import React from "react";
import About from "./About";
import Navigation from "./Navigation";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Header;
