import React, { useState } from "react";

const Portofolios = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([
    {
      name: "Invoice System",
      category: "Web App",
      githubLink: "https://github.com/Irina923-ar/Invoice-Management-System",
      vercelLink: "https://invoice-project-seven.vercel.app/",
      image: "assets/invoice-image.png",
    },
    {
      name: "Split Tip Calculator",
      category: "Web App",
      githubLink: "https://github.com/Irina923-ar/Split-Tip-Calculator",
      vercelLink: "https://calculator-project-inky-sigma.vercel.app/",
      image: "assets/split-calculator-image.png",
    },
    {
      name: "Rock Paper Scissors",
      category: "Game",
      githubLink: "https://github.com/Irina923-ar/Rock-Paper-Scissors-Game",
      vercelLink: "https://project-rock-paper-scissors-eight.vercel.app/",
      image: "assets/rock-paper-scissors-image.png",
    },
    {
      name: "Tic Tac Toe",
      category: "Game",
      githubLink: "https://github.com/Irina923-ar/Tic-Tac-Toe-Game",
      vercelLink: "https://project-tic-tae-toe.vercel.app/",
      image: "assets/tic-tac-toe-image.png",
    },
    {
      name: "Devjobs",
      category: "Web App",
      githubLink:
        "https://github.com/Irina923-ar/DevJobs-Developer-Job-Listing-Platform",
      vercelLink: "https://devjobs-project-mu.vercel.app/",
      image: "assets/devjobs-image.png",
    },
  ]);

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className="section-1 portfolio-section" id="portfolios">
      <div className="section-container-2">
        <div className="section-header-1">
          <div>
            <div className="page-subtitle-1">Digital Blooms</div>
            <div className="text-gradient-1">
              Interactive Blossoms in Code and Design
            </div>
          </div>
          <div className="page-subtitle-2">
            Discover a diverse portfolio where web applications flourish
            alongside captivating games, each designed with a touch of
            creativity and functional elegance.
          </div>
        </div>
        {/* <div className="buttons">
          <button onClick={() => handleFilterClick("All")}>All</button>
          <button onClick={() => handleFilterClick("Games")}>Games</button>
          <button onClick={() => handleFilterClick("Web app")}>Web App</button>
        </div> */}
        <div className="section-container">
          {projects.map((project, index) => (
            <div key={index} className="container-div">
              <a
                key={index}
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="container-div"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="placeholder-img"
                />
              </a>
              <div className="container-div-2">
                <div>
                  <div className="text-gradient-1">{project.name}</div>
                  <div className="page-subtitle-4">{project.category}</div>
                </div>
                <div className="div-icon">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src="assets/icon-github.svg"
                      alt="GitHub"
                    ></img>
                  </a>
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src="assets/icon-computer.svg"
                      alt="Vercel"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolios;
