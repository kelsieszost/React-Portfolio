import React from "react";
import { Carousel } from "react-carousel-minimal";
import LevelUp from "../assets/LevelUp.png";
import CodingQuiz from "../assets/CodingQuiz.png";
import Klaw from "../assets/Klaw.png";
import Weather from "../assets/Weather.png";
import MyTeam from "../assets/MyTeam.png";

function Gallery(props) {
  const data = [
    {
      image: LevelUp,
      caption: "Level Up Fitness",
    },
    {
      image: CodingQuiz,
      caption: "Darjeeling",
    },
    {
      image: Klaw,
      caption: "San Francisco",
    },
    {
      image: Weather,
      caption: "Scotland",
    },
    {
      image: MyTeam,
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
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
    <div className="Gallery" ref={(el) => (props.myRef.current.projects = el)}>
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
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
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
  );
}

export default Gallery;
