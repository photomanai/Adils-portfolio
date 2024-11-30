import React from "react";
import Project from "./Project";
import AppLab from "../assets/AppLab.png";
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

const Projects = () => {
  const projects = [
    {
      name: "SynoProject",
      description:
        "A comprehensive project built with React, Redux Toolkit, TypeScript, React Router, and Firebase Firestore. Features include API integration with Axios, form validation using Formik and Yup, email functionality with EmailJS, and hosting support.",
      img: SynoFilms,
      gitHubLink: null,
      hostLink: "https://synofilms-e2b37.web.app/",
    },
    {
      name: "ProjectE",
      description:
        "A static website developed with HTML and CSS, demonstrating creative design and styling skills.",
      img: ProjectE,
      gitHubLink: "https://github.com/photomanai/DarkAndYellow",
      hostLink: null,
    },
    {
      name: "ZuialDemo",
      description:
        "A static website built with HTML, CSS, and JavaScript, showcasing front-end design and layout skills.",
      img: Zuical,
      gitHubLink: "https://github.com/photomanai/ZuialDemo",
      hostLink: null,
    },
    {
      name: "MassimoDuttiClone",
      description:
        "A replica of the Massimo Dutti website created using React, focusing on UI/UX design and functionality replication.",
      img: MassimoDutti,
      gitHubLink: "https://github.com/photomanai/MassimoDuttiClone",
      hostLink: null,
    },
    {
      name: "Penguen",
      description:
        "A project combining HTML, CSS, and Node.js for front-end design and server-side functionality.",
      img: Penguen,
      gitHubLink: "https://github.com/photomanai/Penguen",
      hostLink: null,
    },
    {
      name: "AppLab",
      description:
        "A static website developed with HTML and CSS, demonstrating creative design and styling skills.",
      img: AppLab,
      gitHubLink: "https://github.com/photomanai/AppLab",
      hostLink: null,
    },
    {
      name: "ECommerce",
      description:
        "An e-commerce platform built with React, Redux Toolkit, and React Router. Includes API integration using Axios and data persistence with LocalStorage.",
      img: Ecommerce,
      gitHubLink: "https://github.com/photomanai/ECommerse",
      hostLink: null,
    },
    {
      name: "TodoSite",
      description:
        "A simple to-do application built with React and TypeScript. Uses LocalStorage for data persistence.",
      img: TodoList,
      gitHubLink: "https://github.com/photomanai/TodoSite",
      hostLink: null,
    },
    {
      name: "TicTacToeGameReact",
      description:
        "A classic Tic Tac Toe game implemented using React, showcasing basic state management and interactivity.",
      img: Xox,
      gitHubLink: "https://github.com/photomanai/TicTacTouGameReact",
      hostLink: null,
    },
    {
      name: "ReactCurrencyApp",
      description:
        "A currency conversion app built with React, fetching real-time exchange rates via APIs using Axios.",
      img: Currency,
      gitHubLink: "https://github.com/photomanai/ReactCurrencyApp",
      hostLink: null,
    },
    {
      name: "Weather",
      description:
        "A weather application created with HTML, CSS, and JavaScript. Fetches live weather data from an API using Fetch.",
      img: Wheter,
      gitHubLink: "https://github.com/photomanai/Weather",
      hostLink: null,
    },
    {
      name: "BlackJack",
      description:
        "A Python-based Blackjack game demonstrating logic programming and algorithm design.",
      img: BlackJack,
      gitHubLink: "https://github.com/photomanai/BlackJack",
      hostLink: null,
    },
  ];

  return (
    <div className="main main_projects" id="projects">
      <h1 className="header">Projects</h1>
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
