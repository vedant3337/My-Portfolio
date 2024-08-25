import React from "react";
import "./Skills.css";
import { Skillset } from "../../Utility/Skillset";

const Skills = () => {
  return (
    <div className="skill-section" id="skills">
      <div className="container skills">
        <h1 className="col-12 text-center pt-5">Skills</h1>
        <hr />
      </div>
      <div className="row">
        {Skillset.map((skill) => (
          <div key={skill._id} className="col-md-4">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <skill.icon className="skill-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{skill.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
