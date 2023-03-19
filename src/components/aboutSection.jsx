import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Fade from "react-reveal/Fade";

function AboutSection({}) {
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
                I am a curious, self-motivated, and determined developer who
                enjoys implementing programming skills in solving various
                problems and developing innovative solutions. With a positive
                attitude and good team spirit, I seek a position to utilize my
                skills, particularly in Web Development.
              </p>

              <div
                className="row"
                style={{ display: "flex", flexDirection: "column" }}
              ></div>
            </div>
            <div className="col-lg-6 ">
              <h3 className="div-h3">Education</h3>

              <div style={{ borderLeft: "1px solid #0bceaf" }}>
                <div className="ps-4 position-relative">
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
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
