import React from "react";
import { Carousel } from "react-carousel-minimal";
import LevelUp from "../assets/LevelUp.png";
import CodingQuiz from "../assets/CodingQuiz.png";
import Klaw from "../assets/Klaw.png";
import Weather from "../assets/Weather.png";
import MyTeam from "../assets/MyTeam.png";
import workDay from "../assets/workDay.png";
import JATE from "../assets/JATE.png";

function Gallery(props) {
  const data = [
    {
      image: LevelUp,
    },
    {
      image: CodingQuiz,
    },
    {
      image: Klaw,
    },
    {
      image: Weather,
    },
    {
      image: MyTeam,
    },
    {
      image: workDay,
    },
    {
      image: JATE,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <React.Fragment>
      <div
        className="Gallery"
        ref={(el) => (props.myRef.current.projects = el)}
      >
        <div style={{ textAlign: "center" }}>
          <h2 className="gallery-title">Projects</h2>
          <p></p>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="white"
              slideImageFit="contain"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
      <div className="projectLinksContainer">
        <span className="projectLinksContainer">
          <a
            className="projectLinks"
            href="https://github.com/Laurencvengros/Project_2"
          >
            Level Up Fitness
          </a>
          <a
            className="projectLinks"
            href="https://kelsieszost.github.io/pop-up-quiz/"
          >
            Coding Quiz
          </a>
          <a
            className="projectLinks"
            href="https://laurencvengros.github.io/KLAW_Movies/"
          >
            KLAW Movies
          </a>
          <a
            className="projectLinks"
            href="https://kelsieszost.github.io/weather-dashboard/"
          >
            Weather Dashboard
          </a>
          <a
            className="projectLinks"
            href="https://github.com/kelsieszost/teamprofilegenerator"
          >
            Team Profile Generator
          </a>
          <a
            className="projectLinks"
            href="https://kelsieszost.github.io/workday-schedule/"
          >
            Workday Scheduler
          </a>
          <a
            className="projectLinks"
            href="https://kelsieszost.github.io/workday-schedule/"
          >
            Workday Scheduler
          </a>
          <a
            className="projectLinks"
            href="https://github.com/kelsieszost/Just-Another-Text-Editor"
          >
            JATE
          </a>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Gallery;
