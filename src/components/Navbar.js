import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionOrder = [
    "home",
    "about",
    "service",
    "skills",
    "portfolios",
    "contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    const activePageIndex = sectionOrder.indexOf(to);
    setActivePageNumber(activePageIndex !== -1 ? activePageIndex + 1 : 1);
  };

  const [activePageNumber, setActivePageNumber] = useState(1);
  return (
    <div className="navbar">
      <div className="div-logo">
        <img className="logo" src="assets/logo.jpeg" alt="Logo" />
      </div>
      <div className="menu">
        <div className={`menu-section ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              className={activeSection === "home" ? "active" : ""}
              onSetActive={() => handleSetActive("home")}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="about"
              spy={true}
              activeClass="active"
              className={activeSection === "about" ? "active" : ""}
              onSetActive={() => handleSetActive("about")}
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="service"
              spy={true}
              activeClass="active"
              className={activeSection === "service" ? "active" : ""}
              onSetActive={() => handleSetActive("service")}
              onClick={toggleMenu}
            >
              Service
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="skills"
              spy={true}
              activeClass="active"
              className={activeSection === "skills" ? "active" : ""}
              onSetActive={() => handleSetActive("skills")}
              onClick={toggleMenu}
            >
              My Skills
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="portfolios"
              spy={true}
              activeClass="active"
              className={activeSection === "portfolios" ? "active" : ""}
              onSetActive={() => handleSetActive("portfolios")}
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </div>
          <div className="nav-links link-contact">
            <Link
              to="contact"
              spy={true}
              activeClass="active"
              className={activeSection === "contact" ? "active" : ""}
              onSetActive={() => handleSetActive("contact")}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="pages-counter">
          <div className="current-page">{activePageNumber}</div>
          <div className="div-point"></div>
          <div className="div-line"></div>
          <div className="page-number">6</div>
        </div>
      </div>
      <div className="menu-svg" onClick={toggleMenu}>
        <img src="assets/menu.svg"></img>
      </div>
    </div>
  );
};

export default Navbar;
