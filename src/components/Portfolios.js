import React from "react";

const Portofolios = () => {
  return (
    <div className="section-1 portfolio-section" id="portfolios">
      <div className="section-header-1">
        <div>
          <div className="page-subtitle-1">My Portfolios</div>
          <div className="text-gradient-1">
            The Projects l’ve been working on.
          </div>
        </div>
        <div className="page-subtitle-2">
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
      <div className="section-container">
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="text-gradient-1">Sila Mobile App design</div>
            <div className="page-subtitle-4">Mobile App</div>
          </div>
          <div className="div-arrow">
            <img src="assets/arrow-diagonal.svg"></img>
          </div>
        </div>
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="text-gradient-1">Sila Mobile App design</div>
            <div className="page-subtitle-4">Mobile App</div>
          </div>
          <div className="div-arrow">
            <img src="assets/arrow-diagonal.svg"></img>
          </div>
        </div>
        <div className="container-div mr">
          <div></div>
          <div>
            <div className="text-gradient-1">Sila Mobile App design</div>
            <div className="page-subtitle-4">Mobile App</div>
          </div>
          <div className="div-arrow">
            <img src="assets/arrow-diagonal.svg"></img>
          </div>
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
