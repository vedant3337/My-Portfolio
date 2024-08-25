import React, { useState } from "react";
import Home from "../../pages/Home/home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./layout.css";
import Menues from "../Menues/menues";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <IoIosArrowBack size={30} />
              ) : (
                <IoIosArrowForward size={30} />
              )}
            </p>
          </div>
          <Menues toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
