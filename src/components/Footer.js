import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#e114d0", size: "2em" }}>
        <footer className="footer">
          <div>
            <a className="footerIcon" href="https://github.com/kelsieszost">
              <FaGithub />
            </a>
            <a
              className="footerIcon"
              href="https://www.linkedin.com/in/kelsie-szost-80377a211/"
            >
              <FaLinkedin />
            </a>
            <a className="footerIcon" href="mailto:owner@kelsieszost.design">
              <FaEnvelope />
            </a>
          </div>
        </footer>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Footer;
