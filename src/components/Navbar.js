import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="div-logo">
        <img className="logo" src="assets/logo.svg" alt="Logo" />
      </div>
      <div className="menu">
        <div className="menu-section">
          <div className="div-link">
            <a>Home</a>
          </div>
          <div className="div-link">
            <a>About</a>
          </div>
          <div className="div-link">
            <a>Service</a>
          </div>
          <div className="div-link">
            <a>My Skills</a>
          </div>
          <div className="div-link">
            <a>Portfolio</a>
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
