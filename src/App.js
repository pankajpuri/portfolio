import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SkillsSection from "./components/skillsSection";
import Contact from "./components/contact";
import Project from "./components/project";
import ProfileSection from "./components/profileSection";
import Nav from "./components/nav";
import AboutSection from "./components/aboutSection";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navId"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex={0}
      >
        <ProfileSection name="Pankaj Puri" role="Software Developer" />
        <AboutSection />
        <Project />
        <SkillsSection />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
