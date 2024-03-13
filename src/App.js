import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import ServicesPage from "./components/ServicesPage.js";
import SkillsPage from "./components/SkillsPage.js";
import Portfolios from "./components/Portfolios.js";
import ContactMe from "./components/ContactMe.js";
import Backdrop from "./components/Backdrop.js";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ServicesPage></ServicesPage>
      <SkillsPage></SkillsPage>
      <Portfolios></Portfolios>
      <ContactMe></ContactMe>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
