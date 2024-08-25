import React from "react";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
const Experience = () => {
  return (
    <>
      <div className="exp" id="experience">
        <h1 className="col-12 text-center pt-5">My Experience</h1>
        <hr />
        <div className="exp-line">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#03045e", color: "white" }}
              contentArrowStyle={{ borderRight: "7px solid  #03045e" }}
              date="Jun 2024 - Jul 2024"
              dateClassName="date-color"
              iconStyle={{ background: "#03045e", color: "white" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                C++ Programming Intern
              </h3>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                CodSoft, Remote
              </h5>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
