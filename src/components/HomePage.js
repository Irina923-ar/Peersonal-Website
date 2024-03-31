import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Application } from "@splinetool/runtime";

const HomePage = ({ scrollToSection }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const app = new Application(canvas);
    app.load("https://prod.spline.design/YYpMnk9tAyNeERAr/scene.splinecode");
  }, []);

  return (
    <div className="section-home" id="home">
      <canvas id="canvas3d" ref={canvasRef}></canvas>
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
    </div>
  );
};

export default HomePage;
