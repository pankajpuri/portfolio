import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import getSkillSets from "./data/skillsets";
class SkillsSection extends Component {
  state = {
    skillSets: [],
  };
  componentDidMount() {
    const skillSets = getSkillSets();
    this.setState({ skillSets });
  }

  render() {
    function str(bg) {
      return "progress-bar progress-html html-bar bg-" + bg;
    }
    const { skillSets } = this.state;
    return (
      <section id="skills" className="container-fluid py-5">
        <div className="container py-4">
          <h1 className="div-heading">Skills</h1>

          <div className="row pt-4 mt-2">
            {skillSets.map((skill) => (
              <div className="col-md-6 mb-4" key={skill._id}>
                <div className="skill">
                  <h3 className="text-uppercase">{skill.skills}</h3>
                </div>
                <div className="progress">
                  <div
                    className={str(skill.bg)}
                    role="progressbar"
                    aria-valuenow="95%"
                    aria-valuemax="100"
                    aria-valuemin="0"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            ))}
            {/* 
            <div className="col-md-6 mb-4">
              <div className="skill">
                <h3 className="text-uppercase">HTML</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-html html-bar "
                  role="progressbar"
                  aria-valuenow="95%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 mb-4 py-2">
              <div className="skill">
                <h3 className="text-uppercase">css</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar css-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="60%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 mb-4 py-2">
              <div className="skill">
                <h3 className="text-uppercase javascript-bar">Javascript</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar javascript-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="70%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 mb-4 py-2">
              <div className="skill">
                <h3 className="text-uppercase">Bootstrap</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bootstrap-bar bg-info"
                  role="progressbar"
                  aria-valuenow="75%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 mb-4 py-2">
              <div className="skill">
                <h3 className="text-uppercase">React</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar react-bar bg-success"
                  role="progressbar"
                  aria-valuenow="75%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 mb-4 py-2">
              <div className="skill">
                <h3 className="text-uppercase">SQL</h3>
              </div>
              <div className="progress">
                <div
                  className="progress-bar sql-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow="80%"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
             */}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
