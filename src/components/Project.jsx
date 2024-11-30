import React from "react";

const Project = ({ title, description, gitHubLink, hostLink, img }) => {
  return (
    <div className="project_container">
      <div className="project_about_container">
        <h1 className="project_title">{title}</h1>
        <p className="project_description">{description}</p>
        <div className="project_btn_container">
          {gitHubLink && (
            <a href={gitHubLink}>
              <button className="button">Go Github</button>
            </a>
          )}
          {hostLink && (
            <a href={hostLink}>
              <button className="button">Go Hosting site</button>
            </a>
          )}
        </div>
      </div>
      <div className="project_img_container">
        <img className="project_img" src={img} alt={`${title} img`} />
      </div>
    </div>
  );
};

export default Project;
