import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import ServicesPage from "./components/ServicesPage.js";
import SkillsPage from "./components/SkillsPage.js";
import Portofolios from "./components/Portofolios.js";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ServicesPage></ServicesPage>
      <SkillsPage></SkillsPage>
      <Portofolios></Portofolios>
    </div>
  );
}

export default App;
