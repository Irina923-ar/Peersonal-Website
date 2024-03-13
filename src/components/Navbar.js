import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="div-logo">
        <img className="logo" src="assets/logo.svg" alt="Logo" />
      </div>
      <div className="menu">
        <div className="menu-section">
          <div className="nav-links">
            <a href="#home">Home</a>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
          </div>
          <div className="nav-links">
            <a href="#service">Service</a>
          </div>
          <div className="nav-links">
            <a href="#skills">My Skills</a>
          </div>
          <div className="nav-links">
            <a href="#portfolios">Portfolio</a>
          </div>
        </div>
        <div className="pages-counter">
          <div className="current-page">1</div>
          <div className="div-point"></div>
          <div className="div-line"></div>
          <div className="page-number">6</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
