import React, { useState, useEffect } from "react";

const Navbar = ({ activePage, changePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      // Define an array of section IDs in the desired order
      const sectionOrder = [
        "home",
        "about",
        "service",
        "skills",
        "portfolios",
        "contact",
      ];

      // Calculate active page number based on active section
      const activePageIndex = sectionOrder.indexOf(activeSection);
      setActivePageNumber(activePageIndex !== -1 ? activePageIndex + 1 : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="navbar">
      <div className="div-logo">
        <img className="logo" src="assets/logo.svg" alt="Logo" />
      </div>
      <div className="menu">
        <div className={`menu-section ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <a
              href="#home"
              onClick={() => {
                toggleMenu();
                setActiveSection("home");
              }}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </div>
          <div className="nav-links">
            <a
              href="#about"
              onClick={() => {
                toggleMenu();
                setActiveSection("about");
              }}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </div>
          <div className="nav-links">
            <a
              href="#service"
              onClick={() => {
                toggleMenu();
                setActiveSection("service");
              }}
              className={activeSection === "service" ? "active" : ""}
            >
              Service
            </a>
          </div>
          <div className="nav-links">
            <a
              href="#skills"
              onClick={() => {
                toggleMenu();
                setActiveSection("skills");
              }}
              className={activeSection === "skills" ? "active" : ""}
            >
              My Skills
            </a>
          </div>
          <div className="nav-links">
            <a
              href="#portfolios"
              onClick={() => {
                toggleMenu();
                setActiveSection("portfolios");
              }}
              className={activeSection === "portfolios" ? "active" : ""}
            >
              Portfolio
            </a>
          </div>
          <div className="nav-links link-contact">
            <a
              href="#contact"
              onClick={() => {
                toggleMenu();
                setActiveSection("contact");
              }}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact Me
            </a>
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
