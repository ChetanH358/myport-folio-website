import React from "react";
import myPic from "../Images/my_pic.jpg";
import "../CSS_of_Components/about.css";

const About = () => {
  return (
    <>
      <div className="container bg-warning mt-2 py-2 mx-0 px-0 ">
        <h2 className="text-center">About Me</h2>
        <img
          src={myPic}
          className="rounded-circle d-block mx-auto"
          alt="..."
          style={{ width: "100px", height: "120px" }}
        />
        <h3 className="text-center text-success p-1 mt-2">
          <strong>Full Stack Developer</strong>
        </h3>
        <p className="text-start mx-3" id="new_style">
          I'm enthusastic developer having expertise in both frontend and
          backend Tenchnologies such as React , MySQL and Spring Boot. clear
          understaning of problem statements , logical thinking made me suitable
          in managing both front end as well as backend. currenlty I'm Building
          Industry Level Projects and also looking for an Internship opportunity
          in a Start-up or MNC company
        </p>

        <div className="container d-flex justify-content-center">
          <button className="btn btn-info btn-sm text-dark" type="button">
            {" "}
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
