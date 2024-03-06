import React from "react";

const Portofolios = () => {
  return (
    <div className="potofolios-page">
      <div className="services-page-header skills-page-header">
        <div>
          <div className="about-page-subtitle2">My Portfolios</div>
          <div className="multicolor">The Projects l’ve been working on.</div>
        </div>
        <div className="about-page-subtitle">
          Create UI mockups and prototypes that clearly show how sites work and
          look. Make unique graphic designs be prepared.
        </div>
      </div>
      <div className="buttons">
        <button>All</button>
        <button>Landing Page</button>
        <button>Mobile App</button>
        <button> Dashboard</button>
      </div>
      <div className="services-page-container skills-page-container">
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="multicolor">Sila Mobile App design</div>
            <div className="about-page-subtitle">Mobile App</div>
          </div>
          <img src="assets/arrow-diagonal.svg"></img>
        </div>
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="multicolor">Sila Mobile App design</div>
            <div className="about-page-subtitle">Mobile App</div>
          </div>
          <img src="assets/arrow-diagonal.svg"></img>
        </div>
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="multicolor">Sila Mobile App design</div>
            <div className="about-page-subtitle">Mobile App</div>
          </div>
          <img src="assets/arrow-diagonal.svg"></img>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Portofolios;
