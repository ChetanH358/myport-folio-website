import React from "react";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import "../CSS_of_Components/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-primary navbar-expand-md fixed-top"
        id="navbar-example1"
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-medium" href="/home">
            Welcome To my PortFolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-dark w-75 h-50"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasWithBothOptionsLabel"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Explore More
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white me-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="offcanvas-body mr-2 scrollspy-example-2"
              tabIndex="0"
              data-bs-spy="scroll"
              data-bs-target="navbar-example1"
              data-bs-smooth-scroll="true"
            >
              <ul className="nav nav-pills navbar-nav justify-content-end flex-grow-1 me-3">
                <li className="nav-item">
                  <a
                    className="nav-link text-light px-3 active"
                    aria-current="page"
                    href="#HomePage"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#AboutPage">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#EducationPage">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#SkillsPage">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#ContactPage">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example1"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-dark p-3 rounded-2 mt-5"
        tabIndex="0"
      >
        <div className="container" id="HomePage">
          <Home />
        </div>
        <div className="container" id="AboutPage">
          <About />
        </div>
        <div className="container" id="EducationPage">
          <Education />
        </div>
        <div className="container" id="SkillsPage">
          <Skills />
        </div>
        <div className="container" id="ContactPage">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default NavBar;
