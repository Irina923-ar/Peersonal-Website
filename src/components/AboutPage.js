import React from "react";

const AboutPage = () => {
  return (
    <div className="section-about" id="about">
      <div className="section-container-2">
        <div className="container">
          <div className="page-subtitle-3">🌟 Welcome to My World, I'm Irina!</div>
          <div className="page-subtitle-second text-gradient-1">FRONT-END MAGICIAN</div>
          <div className="page-subtitle-3 tow-row">
            Cultivating digital gardens with creative code, where interfaces bloom and interactions flourish for seamless web experiences.
          </div>
          <div className="div-experience">
            <div>
              <div className="text-gradient-1 experience-title">Infinite Enthusiasm</div>
              <div className="experience-description">Passion Unleashed</div>
            </div>
            <div>
              <div className="text-gradient-1 experience-title">100% Flower Power</div>
              <div className="experience-description">Nature-Inspired Creativity</div>
            </div>
            <div>
              <div className="text-gradient-1 experience-title">Animal Ally</div>
              <div className="experience-description">Compassion in Code</div>
            </div>
          </div>
        </div>
        <img src="assets/irina-disney.jpeg" className="irina-image"/>
      </div>
    </div>
  );
};

export default AboutPage;
