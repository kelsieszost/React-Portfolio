import React from "react";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="navbar">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">ABOUT</a>
        </div>
        <div style={linkStyle}>
          <a href="#">GITHUB</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}
