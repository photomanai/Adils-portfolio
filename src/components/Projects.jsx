import React from "react";
import Project from "./Project";
import AppLab from "../assets/AppLab.png";
import Devetly from "../assets/Devetly.png";
import BlackJack from "../assets/BlackJack.png";
import Currency from "../assets/Currency.png";
import Ecommerce from "../assets/Ecommerse.png";
import MassimoDutti from "../assets/MassimoDutti.png";
import Penguen from "../assets/Penguen.png";
import SynoFilms from "../assets/SynoFilms.png";
import TodoList from "../assets/todoList.png";
import Wheter from "../assets/Wheter.png";
import Xox from "../assets/xox.png";
import Zuical from "../assets/Zuical.png";
import ProjectE from "../assets/ProjectE.png";
import SynoSites from "../assets/SynoSites.png";

const Projects = () => {
  const projects = [
    {
      name: "Devetly Project",
      description:
        "Devetly allows users to quickly send invitation messages by selecting contacts from their phone. Invitations can be shared via WhatsApp and other platforms for events and seminars. The project is built using React Native, Redux, and Node.js.",
      img: Devetly,
      gitHubLink: null,
      hostLink: "https://devetly.vercel.app",
    },
    {
      name: "Syno Project",
      description:
        "A comprehensive project built with React, Redux Toolkit, TypeScript, React Router, and Firebase Firestore. Features include API integration with Axios, form validation using Formik and Yup, email functionality with EmailJS, and hosting support.",
      img: SynoFilms,
      gitHubLink: null,
      hostLink: "https://synofilms-e2b37.web.app/",
    },
    {
      name: "Syno Sites",
      description:
        "Syno Sites is a platform that offers modern, secure websites and web applications built with advanced technologies. It provides tailored web solutions, scalable back-end services, and custom web applications designed to meet your digital needs.",
      img: SynoSites,
      gitHubLink: null,
      hostLink: "https://syno-sites.vercel.app/",
    },
  ];

  return (
    <div className="main main_projects" id="projects">
      <h1 className="header">Some Projects</h1>
      <p>
        If you would like to explore my other projects, including
        CyberSecure-Tools, apps, websites, back-end solutions, and more, please
        visit my GitHub.
      </p>
      <div className="projects_container">
        {projects &&
          projects.map((project, index) => (
            <Project
              key={index}
              title={project.name}
              description={project.description}
              gitHubLink={project.gitHubLink}
              hostLink={project.hostLink}
              img={project.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
