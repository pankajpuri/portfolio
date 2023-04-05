import React from "react";
import profile from "./assests/images/profile.jpg";
import PankajpuriCV from "./assests/images/PankajpuriCV.pdf";
import aboutyourself from "./assests/videos/aboutyourself.mp4";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import Fade from "react-reveal";

function ProfileSection({ name, role }) {
  const handleCloseVideo = () => {
    const video = document.getElementById("video");
    video.pause();
    video.currentTime = 0;

    console.log("closing video..");
  };
  return (
    <section id="home" className="container-fluid bg-color">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 px-5 profileImage"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="`img-fluid w-100` profileImageBorder"
              src={profile}
              alt="profile"
            ></img>
          </div>
          <div className="col-lg-7 ">
            <div className="profileDesc">
              <Fade bottom>
                <h3 className="text-white">I'm </h3>
              </Fade>
              <Fade bottom>
                <h1 className="text-uppercase mb-2 textStyle">{name}</h1>
              </Fade>

              <h1 className="text-uppercase mb-2 typed-out text-white font-weight-lighter">
                {role}
              </h1>
            </div>

            <div className="cvBtnPlaySection">
              <Fade bottom>
                <a
                  href={PankajpuriCV}
                  className=" text-white btn border rounded-pill btnStyle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "38px",
                  }}
                  download
                >
                  Download CV
                </a>
              </Fade>
              <div className="playVideoSection">
                <Fade bottom>
                  <i
                    className=" fa fa-play-circle btnPlay"
                    aria-hidden="true"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></i>
                </Fade>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          onClick={handleCloseVideo}
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex">
                        <video
                          id="video"
                          width="500px"
                          height="400px"
                          controls="controls"
                        >
                          <source src={aboutyourself} type="video/mp4"></source>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <Fade bottom>
                  <h5 className="text-white ms-4">Play Video</h5>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
