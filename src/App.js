import React, { useState, useRef } from "react";
import "./App.css";
import AboutMe from "./components/About";
import Gallery from "./components/Projects";
import SkillsCard from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const myRef = useRef({ aboutMe: "", projects: "", contactUs: "" });
  function MoreAboutMe(props) {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function scrollTo(name) {
    console.log(myRef);
    myRef.current[name].scrollIntoView();
  }
  return (
    <div className="App">
      <Navigation MoreAboutMe={MoreAboutMe} scrollTo={scrollTo} />
      <AboutMe
        MoreAboutMe={MoreAboutMe}
        closeModalHandler={closeModalHandler}
        modalIsOpen={modalIsOpen}
        myRef={myRef}
      />
      <SkillsCard />
      <Gallery myRef={myRef} />
      <ContactUs myRef={myRef} scrollTo={scrollTo} />
      <Footer />
    </div>
  );
}

export default App;
