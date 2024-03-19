import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import ServicesPage from "./components/ServicesPage.js";
import SkillsPage from "./components/SkillsPage.js";
import Portfolios from "./components/Portfolios.js";
import ContactMe from "./components/ContactMe.js";
import Backdrop from "./components/Backdrop.js";
/* import Animation3D from "./components/Animation3D.js";
 */
function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
  };

  return (
    <div className="app">
      <Navbar></Navbar>
      <HomePage>{/* <Animation3D></Animation3D> */}</HomePage>
      <AboutPage></AboutPage>
      <ServicesPage></ServicesPage>
      <SkillsPage></SkillsPage>
      <Portfolios></Portfolios>
      <ContactMe toggleBackdrop={toggleBackdrop}></ContactMe>
      {showBackdrop && <Backdrop toggleBackdrop={toggleBackdrop}></Backdrop>}
    </div>
  );
}

export default App;
