import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkillsSection from "./components/skillsSection";
import ContactFrom from "./components/contactForm";
import Project from "./components/project";
import ProfileSection from "./components/profileSection";
import Nav from "./components/nav";
import AboutSection from "./components/aboutSection";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <ToastContainer />
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
        <ContactFrom />
      </div>
    </React.Fragment>
  );
}

export default App;
