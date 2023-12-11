import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  let EmailSent = (e) => {
    emailjs
      .sendForm(
        "service_7dqhy6g",
        "template_71hhoi2",
        e.target,
        "et_IIzcvIjhzWQ_vB"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="container-fluid mt-2 py-2 bg-success">
        <h2 className="text-center text-white">Get in Touch</h2>
        <div className="container ">
          <form className="row g-3 justify-content-center" onSubmit={EmailSent}>
            <div className="col-md-6 col-lg-5">
              <input
                type="text"
                id="FullNameExample"
                className="form-control"
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <input
                type="email"
                className="form-control"
                placeholder="Email Adreess"
                name="user_email"
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                name="mobile_num"
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <input
                type="text"
                className="form-control"
                placeholder="Email Subject"
                name="email_sub"
              />
            </div>
            <div className="mb-3 col-lg-10">
              <textarea
                className="form-control"
                rows="3"
                placeholder="How may I help you !"
                name="message"
              ></textarea>
            </div>
            <div className="container d-flex justify-content-center">
              <button className="btn btn-info" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
