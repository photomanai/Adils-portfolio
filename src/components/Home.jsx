import React from "react";
import homeRight from "../assets/home-right.png";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "ADIL_CV.pdf"; // File name for download
    link.href = "/RufanCV.pdf"; // File in public folder, no import required
    link.click();
  };

  return (
    <div className="main_home" id="home">
      <div className="home_text_container">
        <div className="home_header_container">
          <h1 className="home_header">HELLO</h1>
          <h1 className="home_header_paragraf text">I AM ADIL ABDULKERIM</h1>
        </div>
        <div className="home_btn_container">
          <button className="home_btn">Hire Me</button>
          <button className="home_btn" onClick={handleDownload}>
            Get CV
          </button>
        </div>
      </div>
      <div className="home_img_container">
        <img className="home_img" src={homeRight} alt={`Home Right Post`} />
      </div>
    </div>
  );
};

export default Home;
