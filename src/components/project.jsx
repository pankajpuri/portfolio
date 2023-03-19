import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import getExperinceData from "./experienceData";
import Fade from "react-reveal/Fade";

class Project extends Component {
  state = {
    experienceData: getExperinceData(),
  };
  render() {
    return (
      <section id="experience" className="container-fluid py-5">
        <div className="container py-4">
          <h1 className="text-uppercase div-heading">Projects</h1>
          <Fade bottom>
            <div className="row pt-4 mt-2">
              {this.state.experienceData.map((data) => (
                <div
                  key={data.id}
                  className="jobCardsDatas col-lg-3 col-md-6 col-sm-6"
                >
                  <div
                    className="card jobCards"
                    style={{ width: "18rem" }}
                    key={data.id}
                  >
                    <img
                      src={data.landingImage}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "181px" }}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                    </div>
                  </div>
                  <div className="viewBtnDiv">
                    <a
                      href={data.address}
                      className="btn btn-primary viewBtn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Project;
