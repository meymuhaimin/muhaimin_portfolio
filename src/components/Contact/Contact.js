import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="subtitles">
        <h1>Contact</h1>
        <div className="content">
          <p>Feel free to contact me at:</p>
          <a href="mailto: meymuhaimin@gmail.com">meymuhaimin@gmail.com</a>
        </div>
        <div>
          <button className="button">
            <a
              href="https://www.linkedin.com/in/abdul-muhaimin-86b298241/"
              style={{ textDecorationLine: "none" }}
            >
              LinkedIn
            </a>
          </button>
          <button className="button">
            <a
              href="https://drive.google.com/file/d/17IRn4Imw2gPVkHq1GHDsSit1Gw0aBvPv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecorationLine: "none" }}
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
