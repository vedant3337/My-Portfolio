import React from "react";
import { FaBook } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h1 className="col-12 text-center pt-5">Education Qualifications</h1>
        <hr />
        <div className="line">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "grey", color: "#03045e" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="2022 - Present"
              iconStyle={{ background: "grey", color: "#03045e" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                B.Tech In Computer Science & Engineering
              </h3>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                Nirma University, Ahmedabad
                <br /> CGPA* : 8.38
              </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "grey", color: "#03045e" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="2021 - 2022"
              iconStyle={{ background: "grey", color: "#03045e" }}
              icon={<FaBook />}
            >
              <h3 className="vertical-timeline-element-title">
                Higher Secondary Education
              </h3>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                Sheth C.V. Vidhyalaya, Balisana
                <br /> Percentage : 91.83%
              </h5>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "grey", color: "#03045e" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="2019 - 2020"
              iconStyle={{ background: "grey", color: "#03045e" }}
              icon={<FaBook />}
            >
              <h3 className="vertical-timeline-element-title">
                Secondary Education
              </h3>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                Sheth C.V. Vidhyalaya, Balisana
                <br /> Percentage : 92.33%
              </h5>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
