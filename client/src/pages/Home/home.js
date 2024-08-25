import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/myResume.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h1>Hello There! I'm </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Vedant Patel",
                  "Enthusiastic Engineer",
                  "Proficient in C++",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons" id="temp-about">
            <a
              className="btn btn-hire"
              href="https://www.linkedin.com/in/vedant3337/"
            >
              Hire Me
            </a>
            <a
              className="btn btn-resume"
              href={Resume}
              download="Vedant_Resume.pdf"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
