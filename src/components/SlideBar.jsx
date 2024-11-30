import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SlideBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Sayfa kaydırıldıkça çalışacak fonksiyon
  const handleScroll = () => {
    // Sayfanın sonuna gelindiğinde SlideBar'ı gizle
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // useEffect ile sayfa kaydırma olayını dinleyelim
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`slidebar_container ${!isVisible ? "hidden_slide" : ""}`}>
      <a href="https://www.linkedin.com/in/adil-abdulkerimov-881864312">
        <FaLinkedin className="slidebar_icon" />
      </a>
      <a href="https://github.com/photomanai">
        <FaGithub className="slidebar_icon" />
      </a>
      <a href="https://www.instagram.com/photoman.ai/profilecard/?igsh=MWRmMXBlMzJ0NXkzbA==">
        <FaInstagram className="slidebar_icon" />
      </a>
    </div>
  );
};

export default SlideBar;
