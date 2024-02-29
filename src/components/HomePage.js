import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <img
        className="background-homepage"
        src="assets/background.svg"
        alt="background"
      ></img>
      <div>
        <a>
          <div>Contact Me</div>
          <img src="assets/arrow.svg" alt="arrow"></img>
          <div>Value from Innovation</div>
          <div>Real Innovation</div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
