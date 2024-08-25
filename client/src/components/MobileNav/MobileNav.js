import React, { useState } from "react";
import "./MobileNav.css";
import { IoMenu } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { BsExclamationDiamond } from "react-icons/bs";
import { TbBrandOffice } from "react-icons/tb";
import { MdMilitaryTech, MdOutlineSchool } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdMenuOpen
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <IoMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="title-nav">Vedant's Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" onClick={handleMenuClick}>
                    <TiHomeOutline />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="temp-about" onClick={handleMenuClick}>
                    <BsExclamationDiamond />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="skills" onClick={handleMenuClick}>
                    <MdMilitaryTech />
                    Skills
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="projects" onClick={handleMenuClick}>
                    <IoIosApps />
                    Projects
                  </Link>
                </div>

                <div className="nav-link">
                  <Link to="education" onClick={handleMenuClick}>
                    <MdOutlineSchool />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="experience" onClick={handleMenuClick}>
                    <TbBrandOffice />
                    Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="contact" onClick={handleMenuClick}>
                    <GrContact />
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
