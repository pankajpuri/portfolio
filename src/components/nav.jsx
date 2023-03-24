import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const Nav = () => {
  return (
    <nav id="navId" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-pills nav-justified">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link" href="#skills">
                Skill
              </a>
            </li>
            <li className=" nav-item">
              <a className=" nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="faaa" className="navbar-brand">
        <ul
          className="nav justify-content-end"
          style={{ border: "2px solid black!important" }}
        >
          <li className="nav-item">
            <a
              href="tel:0225276078"
              className="btn nav-link-right fa fa-phone"
            />
          </li>

          <li className="nav-item">
            <a
              href="mailto:pankajpuri016@gmail.com"
              className="btn nav-link-right fa fa-envelope"
            />
          </li>

          <li className="nav-item">
            <a
              href="http://www.linkedin.com/in/pankaj-puri-a2ba89158"
              className=" btn nav-link-right fa fa-linkedin-square"
            />
          </li>
          <li className="nav-item ">
            <a
              href="https://github.com/pankajpuri"
              className="btn nav-link-right fa fa-github"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
