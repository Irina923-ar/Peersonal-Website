import React from "react";

const AboutPage = () => {
  return (
    <div className="section-about" id="about">
      <div className="section-2">
        <div className="container">
          <div className="page-subtitle-3">Hey...It's Irina</div>
          <div className="text-gradient-1">FRONT END DEVELOPER</div>
          <div className="page-subtitle-3 tow-row">
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </div>
          <div className="div-experience">
            <div>
              <div className="text-gradient-1">07+</div>
              <div className="page-subtitle-2">Year Experience</div>
            </div>
            <div>
              <div className="text-gradient-1">15+</div>
              <div className="page-subtitle-2">Features & Awards</div>
            </div>
            <div>
              <div className="text-gradient-1">95%</div>
              <div className="page-subtitle-2">Clients Rating</div>
            </div>
          </div>
        </div>
        <div className="container-placeholder">
          <img src="assets/play-btn.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
