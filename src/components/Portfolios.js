import React, { useState } from "react";

const Portofolios = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([
    { name: "Sila Mobile App design", category: "Mobile App" },
  ]);

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className="section-1 portfolio-section" id="portfolios">
      <div className="section-2">
        <div className="section-header-1">
          <div>
            <div className="page-subtitle-1">My Portfolios</div>
            <div className="text-gradient-1">
              The Projects l’ve been working on.
            </div>
          </div>
          <div className="page-subtitle-2">
            I have built various different projects to fit different aspects.
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleFilterClick("All")}>All</button>
          <button onClick={() => handleFilterClick("Games")}>Games</button>
          <button onClick={() => handleFilterClick("Web app")}>Web App</button>
        </div>
        <div>
          {projects.map((project) => {
            if (filter === "All" || project.category === filter) {
              return (
                <div key={project} className="section-container">
                  <div className="container-div">
                    <div className="placeholder-img"></div>
                    <div className="container-div-2">
                      <div>
                        <div className="text-gradient-1">
                          Sila Mobile App design
                        </div>
                        <div className="page-subtitle-4">Mobile App</div>
                      </div>
                      <div className="div-arrow">
                        <img src="assets/arrow-diagonal.svg"></img>
                      </div>
                    </div>
                  </div>
                  <div className="container-div">
                    <div className="placeholder-img"></div>
                    <div className="container-div-2">
                      <div>
                        <div className="text-gradient-1">
                          Sila Mobile App design
                        </div>
                        <div className="page-subtitle-4">Mobile App</div>
                      </div>
                      <div className="div-arrow">
                        <img src="assets/arrow-diagonal.svg"></img>
                      </div>
                    </div>
                  </div>
                  <div className="container-div">
                    <div className="placeholder-img"></div>
                    <div className="container-div-2">
                      <div>
                        <div className="text-gradient-1">
                          Sila Mobile App design
                        </div>
                        <div className="page-subtitle-4">Dashboard</div>
                      </div>
                      <div className="div-arrow">
                        <img src="assets/arrow-diagonal.svg"></img>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Portofolios;
