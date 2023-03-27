import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import getEducations from "./services/education";
class AbouSection extends Component {
  state = { educations: [] };
  componentDidMount() {
    const educations = getEducations();
    this.setState({ educations });
  }
  render() {
    const { educations } = this.state;
    return (
      <section id="about" className="container-fluid py-5">
        <div className="container py-4">
          <h1 className="div-heading">About me</h1>

          <div className="row pt-4 mt-2">
            <Fade bottom>
              <div className="col-lg">
                <h1>UI Designer and Front-end Developer</h1>

                <p
                  style={{
                    color: "#0bceaf",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    textAlign: "justify",
                  }}
                >
                  I am a motivated and curious developer with a strong
                  determination to solve problems and create innovative
                  solutions using my programming skills. I have a positive
                  attitude and a great team spirit. I am looking for a position
                  that will allow me to apply my skills, with a particular focus
                  on software development.
                </p>

                <div
                  className="row"
                  style={{ display: "flex", flexDirection: "column" }}
                ></div>
              </div>
              <div className="col-lg-6 ">
                <h3 className="div-h3">Education</h3>

                <div style={{ borderLeft: "1px solid #0bceaf" }}>
                  {educations.map((edu) => (
                    <div className="ps-4 position-relative" key={edu._id}>
                      <i
                        className="fa fa-dot-circle-o dot-circle-style"
                        aria-hidden="true"
                        style={{ color: "#0bceaf" }}
                      ></i>
                      <h5 className="div-h5">{edu.education}</h5>
                      <p className="mb-4">
                        <strong className="pe-1">{edu.center}</strong>|
                        <small className="ps-1">{edu.period}</small>
                      </p>
                    </div>
                  ))}

                  {/* <div className="ps-4 position-relative">
                    <i
                      className="fa fa-dot-circle-o dot-circle-style"
                      aria-hidden="true"
                      style={{ color: "#0bceaf" }}
                    ></i>
                    <h5 className="div-h5">
                      BEngTech In Computer & Mobile Systems
                    </h5>
                    <p className="mb-4">
                      <strong className="pe-1">
                        Auckland University of Technology - AUT
                      </strong>
                      |<small className="ps-1">2015-2018</small>
                    </p>
                  </div>
    
                  <div className="ps-4 position-relative">
                    <i
                      className="fa fa-dot-circle-o dot-circle-style"
                      aria-hidden="true"
                      style={{ color: "#0bceaf" }}
                    ></i>
                    <h5 className="div-h5">Developer Job Ready Programme</h5>
                    <p className="mb-4">
                      <strong className="pe-1">Industry Connect</strong>|
                      <small className="ps-1">Sep 2018 - Nov 2018</small>
                    </p>
                  </div> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default AbouSection;
