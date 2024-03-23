import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Application } from "@splinetool/runtime";

const HomePage = ({ scrollToSection }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load("https://prod.spline.design/YbSJokCX9QEb1hWt/scene.splinecode");
  }, []);

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
        <div className="container-home-text">
          <div className="text-gradient-1 container-title">
            A FRONT END DEVELOPER
          </div>
          <img className="container-my-name" src="assets/Irina.png"></img>
        </div>
        <div className="container-animation">
          <canvas id="canvas3d" ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
