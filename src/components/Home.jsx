import React from "react";
import homeRight from "../assets/home-right.png";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Adil_CV.pdf"; // İndirilecek dosya adı
    link.href = "/Adils-portfolio/Adil_CV.pdf"; // public klasöründen erişim yolu
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
          <a href="#contact">
            <button className="home_btn">Hire Me</button>
          </a>
          {/* <a href="../src/ADIL_CV.pdf" download> */}
          <button className="home_btn" onClick={handleDownload}>
            Get CV
          </button>
          {/* </a> */}
        </div>
      </div>
      <div className="home_img_container">
        <img className="home_img" src={homeRight} alt={`Home Right Post`} />
      </div>
    </div>
  );
};

export default Home;
