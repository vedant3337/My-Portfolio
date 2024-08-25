import React from "react";
import "./Projects.css";
import p1_img from "../../Assets/ecomm_project.jpeg";
import p2_img from "../../Assets/eda_project.jpeg";
const Projects = () => {
  return (
    <>
      <div className="project" id="projects">
        <h1 className="col-12 text-center pt-5">Recent Projects</h1>
        <hr />
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify">Full Stack</span>
                <img src={p1_img} alt="project-1" />
                <div className="card-image-overly">
                  <span className="card-detail">MongoDB</span>
                  <span className="card-detail">ExpressJS</span>
                  <span className="card-detail">ReactJS</span>
                  <span className="card-detail">NodeJS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5>NavBazaar E-commerce Website</h5>
                  </div>
                  <a
                    href="https://github.com/vedant3337/navbazaar"
                    className="ad-btn"
                  >
                    Show
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded card2">
              <div className="card-image">
                <span className="card-notify">EDA</span>
                <img src={p2_img} alt="project-2" />
                <div className="card-image-overly">
                  <span className="card-detail">Jupyter Notebook</span>
                  <span className="card-detail">Pandas</span>
                  <span className="card-detail">Seaborn</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5>Zomato EDA & Visualization</h5>
                  </div>
                  <a
                    href="https://github.com/vedant3337/Data-Analysis-Zomato"
                    className="ad-btn"
                  >
                    Show
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
