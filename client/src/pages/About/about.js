import React from "react";
import "./about.css";
import Pic from "../../Assets/about_1.jpeg";

const About = () => {
  return (
    <>
      <div className="about" id="aboutSec">
        <div className="row">
          <div className="col-md-6 about-img">
            <img src={Pic} alt="Profile Pic"></img>
          </div>
          <div className="col-md-6 about-content" id="ab-title">
            <h1>About Me</h1>
            <p>
              Hi there! I’m Vedant Patel, currently pursuing a B.Tech in
              Computer Science and Engineering at Nirma University. I am
              proficient in C++ and have practical experience with JavaScript
              and Express. My toolset includes VS Code, Git, and SQL, and I am
              familiar with Java, HTML, Shell Script, Python, Vue, Tailwind,
              Logisim, Cisco Packet Tracer, and MongoDB. One of my notable
              projects is an E-Commerce Website, a multipage web application for
              selling electronics. This project involved storing user profiles,
              managing carts, and handling purchased items using HTML, Tailwind,
              MongoDB Atlas, Express, and NodeMailer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
