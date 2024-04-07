import React, { Suspense } from "react";
import { Link } from "react-scroll";

// -->Load: spline lazy loading
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const HomePage = ({ scrollToSection }) => {
  return (
    <div className="section-home" id="home">
      <Suspense
        fallback={
          <div className="hero-canvas-loading">Loading 3D Model...</div>
        }
      >
        <Spline scene="https://prod.spline.design/YYpMnk9tAyNeERAr/scene.splinecode" />
      </Suspense>
      <div className="contact-me">
        <Link to="contact" activeClass="active" spy={true}>
          <div className="contact-div" onClick={scrollToSection}>
            <div className="contact-title">Contact Me</div>
            <img src="assets/arrow.svg" alt="arrow"></img>
          </div>
          <div className="contact-subtitle">Come say hi!</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
