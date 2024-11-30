import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 45,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`main_navbar ${!isVisible ? "hidden" : ""}`}>
      <h1 className="navbar_header">Adil</h1>
      <ul className="mini_navbar">
        <li className="mini_navbar_paragraf">
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
            Home
          </a>
        </li>
        <li className="mini_navbar_paragraf">
          <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
            About
          </a>
        </li>
        <li className="mini_navbar_paragraf">
          <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
            Projects
          </a>
        </li>
        <li className="mini_navbar_paragraf">
          <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
