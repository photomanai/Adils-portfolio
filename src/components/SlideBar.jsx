import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SlideBar = () => {
  return (
    <h1 className="slidebar_container">
      <a href="https://www.linkedin.com/in/adil-abdulkerimov-881864312">
        <FaLinkedin className="slidebar_icon" />
      </a>
      <a href="https://www.instagram.com/photoman.ai/profilecard/?igsh=MWRmMXBlMzJ0NXkzbA==">
        <FaGithub className="slidebar_icon" />
      </a>
      <a href="https://www.instagram.com/photoman.ai">
        <FaInstagram className="slidebar_icon" />
      </a>
    </h1>
  );
};

// slide

export default SlideBar;
