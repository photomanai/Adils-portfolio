import React from "react";

const About = () => {
  return (
    <div className="main_about main" id="about">
      <h1 className="about_header header">About</h1>
      <p className="about_paragraf">
        "Hi! I'm Adil Abdulkerim, a Full-Stack Developer with experience in
        building both web and mobile applications. Currently, I am focused on
        expanding my knowledge in cybersecurity. I am passionate about creating
        efficient, scalable, and secure applications."
      </p>
      <a href="#contact">
        <button className="button">Contact Me</button>
      </a>
    </div>
  );
};

export default About;
