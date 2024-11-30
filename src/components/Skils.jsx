import React from "react";
import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiCsharp,
  SiArduino,
  SiVite,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";

const Skils = () => {
  const skillsIcon = [
    <FaReact className="skills_icon" />,
    <SiRedux className="skills_icon" />,
    <SiTypescript className="skills_icon" />,
    <FaNodeJs className="skills_icon" />,
    <FaPython className="skills_icon" />,
    <FaHtml5 className="skills_icon" />,
    <FaCss3Alt className="skills_icon" />,
    <IoLogoJavascript className="skills_icon" />,
    <FaSass className="skills_icon" />,
    <FaBootstrap className="skills_icon" />,
    <SiCsharp className="skills_icon" />,
    <TbBrandCpp className="skills_icon" />,
    <SiArduino className="skills_icon" />,
    <FaLinux className="skills_icon" />,
    <FaGithub className="skills_icon" />,
    <IoLogoFirebase className="skills_icon" />,
    <SiVite className="skills_icon" />,
  ];
  return (
    <div className="main_skils main">
      <h1 className="header">Skils</h1>
      <p className="skils_paragraf">
        "I am a developer with strong experience in web development,
        specializing in advanced technologies such as React, TypeScript, Redux,
        and Vite. In frontend projects, I manage forms using Formik and Yup,
        optimizing the process of validating user data. I work with APIs using
        tools like Redux Toolkit, Thunk, Axios, Fetch, and Ajax. I manage
        application routing with React Router and store data with Google
        Firestore. Currently, I am expanding my knowledge in backend development
        and continuously learning modern technologies to become a full-stack
        developer. I adhere to clean and optimized coding principles and always
        test new technologies in my projects."
      </p>
      <div className="skils_container">
        {skillsIcon &&
          skillsIcon.map((icon, index) => <span key={index}>{icon}</span>)}
      </div>
    </div>
  );
};

export default Skils;
