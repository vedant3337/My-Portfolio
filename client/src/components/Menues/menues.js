import React from "react";
import "./menues.css";
import profilePic from "./p_pic.jpg";
import { TiHomeOutline } from "react-icons/ti";
import { BsExclamationDiamond } from "react-icons/bs";
import { TbBrandOffice } from "react-icons/tb";
import { MdMilitaryTech, MdOutlineSchool } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { Link } from "react-scroll";

const Menues = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profilePic} alt="profile-pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home">
                  <TiHomeOutline />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="aboutSec">
                  <BsExclamationDiamond />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="skills">
                  <MdMilitaryTech />
                  Skills
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects">
                  <IoIosApps />
                  Projects
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education">
                  <MdOutlineSchool />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link to="experience">
                  <TbBrandOffice />
                  Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact">
                  <GrContact />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item icon-margin-top">
              <div className="nav-link">
                <Link to="home">
                  <TiHomeOutline title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="aboutSec">
                  <BsExclamationDiamond title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="skills">
                  <MdMilitaryTech title="Skills" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects">
                  <IoIosApps title="Projects" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education">
                  <MdOutlineSchool title="Education" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="experience">
                  <TbBrandOffice title="Experience" />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact">
                  <GrContact title="Contact Me" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menues;
