import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SlideBar = () => {
  return (
    <h1 className="slidebar_container">
      <FaLinkedin className="slidebar_icon" />
      <FaGithub className="slidebar_icon" />
      <FaInstagram className="slidebar_icon" />
    </h1>
  );
};

// slide

export default SlideBar;
