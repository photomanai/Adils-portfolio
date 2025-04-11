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
        "I am a versatile Full-Stack Developer with proficiency in both
        front-end and back-end technologies, including JavaScript, React,
        Node.js, and MongoDB. I have experience in building scalable web and
        mobile applications using tools like Redux, Express.js, and Docker. In
        addition, I am currently expanding my knowledge in cybersecurity, with
        hands-on experience in tools like Kali Linux, Wireshark, Metasploit, and
        Nmap. My goal is to integrate secure coding practices into every project
        while continuing to grow my expertise in web development and
        cybersecurity. "
      </p>
      <div className="skils_container">
        {skillsIcon &&
          skillsIcon.map((icon, index) => <span key={index}>{icon}</span>)}
      </div>
    </div>
  );
};

export default Skils;
