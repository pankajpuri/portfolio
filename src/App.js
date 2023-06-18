import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer, toast } from "react-toastify";
import Nav from "./components/nav";
import config from "./config/default.json";
import http from "./components/services/httpService";
import SkillsSection from "./components/skillsSection";
import ContactFrom from "./components/contactform";
import Project from "./components/project";
import ProfileSection from "./components/profileSection";
import AboutSection from "./components/aboutSection";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await http.post(config.apiUrlVisitors);
        const data = await response.json();
        toast.success(
          `You are the ${data.visitorCount}th person to visit my portfolio!`,
          {
            position: "top-center",
            autoClose: 5000, // Close the toast after 5 seconds
            bodyClassName: "custom-toast-body",
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

    trackVisitor();
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <ToastContainer style={{ width: "auto" }} />
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
