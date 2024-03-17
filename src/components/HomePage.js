import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const HomePage = ({ scrollToSection }) => {
  return (
    <div className="section-home" id="home">
      <img
        className="background-homepage"
        src="assets/background.svg"
        alt="background"
      ></img>
      <div className="contact-me">
        <Link to="contact" activeClass="active" spy={true}>
          <div className="contact-div" onClick={scrollToSection}>
            <div className="contact-title">Contact Me</div>
            <img src="assets/arrow.svg" alt="arrow"></img>
          </div>
          <div className="contact-subtitle">Value from Innovation</div>
          <div className="contact-subtitle">Real Innovation</div>
        </Link>
      </div>
      <div className="container-home">
        <div className="text-gradient-1 container-title">
          A FRONT END DEVELOPER
        </div>
        <img className="container-my-name" src="assets/Irina.png"></img>
      </div>
    </div>
  );
};

export default HomePage;
