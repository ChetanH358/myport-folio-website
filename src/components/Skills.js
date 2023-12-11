import React from "react";
import html_and_css from "../Images/html_and_css.png";
import javascript from "../Images/javascript.png";
import bootstrap from "../Images/bootstrap.jpg";
import react from "../Images/react.png";
import oracle_sql from "../Images/oracle_sql.png";
import my_sql from "../Images/my_sql.png";
import java from "../Images/java.png";
import hibernate from "../Images/hibernate.jpg";
import spring_boot from "../Images/spring_boot.png";
import post_man from "../Images/post_man.png";
import "../CSS_of_Components/skills.css";

const Skills = () => {
  return (
    <>
      <div className="container-fluid light_dark mt-2 py-2 mx-0 px-0">
        <h2 className="text-center text-light">Tech Stack</h2>
        <div className="container">
          <div className="container p-1">
            <div className="row justify-content-center">
              <div className="card rounded p-1 pb-0 col-sm-4 col-md-2 col-lg-2">
                <img src={html_and_css} className="img-fluid " alt="..." />

                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0 rounded-4"
                  style={{ width: "50%", height: "5px" }}
                ></div>
              </div>

              <div className="card p-1 rounded col-sm-4 col-md-2 col-lg-2">
                <img src={javascript} className="img-fluid" alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "60%", height: "5px" }}
                ></div>
              </div>
              <div className="card p-1 rounded col-sm-4 col-md-2 col-lg-2">
                <img src={bootstrap} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "40%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={react} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "60%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={oracle_sql} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "70%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={my_sql} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "30%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={java} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "80%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={hibernate} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "30%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={spring_boot} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "40%", height: "5px" }}
                ></div>
              </div>
              <div className="card rounded p-2 col-sm-4 col-md-2 col-lg-2">
                <img src={post_man} className="img-fluid " alt="..." />
                <div
                  className=" progress-bar bg-success mt-2 align-self-start mb-0 py-0"
                  style={{ width: "60%", height: "5px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
