import React from "react";
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="container">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-content">
            <h3>Simah Caterer Website</h3>
            <img src={"project-simah.png"} alt="Project 1" />
            <p>
              The personal project I undertook as a frontend developer was to
              design and develop a captivating landing page using React and CSS.
              This personal project serves as a testament to my frontend
              development proficiency in React and CSS, positioning me as a
              strong candidate for job opportunities in the field.
            </p>
            <button>
              <a
                href="https://simahcaterer.netlify.app/"
                style={{ textDecorationLine: "none" }}
              >
                Live Site
              </a>
            </button>
            <button>
              <a
                href="https://github.com/meymuhaimin/simah-caterer"
                style={{ textDecorationLine: "none" }}
              >
                GitHub
              </a>
            </button>
          </div>
          <div className="project-content">
            <h3>TripAdikBeradik</h3>
            <img src={"project-tripadikberadik.png"} alt="Project 1" />
            <p>
              This project was developed by JatYam Technologies Sdn Bhd. I was
              involved in the development of the frontend using React, Material
              UI, TypeScript and GraphQL. This is where I learn the basic of
              many new tech that I never did.
            </p>
            <button>
              <a
                href="https://www.tripadikberadik.com/"
                style={{ textDecorationLine: "none" }}
              >
                Live Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
