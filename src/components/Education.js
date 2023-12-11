import React from "react";
import "../CSS_of_Components/education.css";
import SSLC_school from "../Images/10_th_school_pic.jpg";
import university from "../Images/university_pic.jpg";
import coaching from "../Images/java_coaching.jpg";
import diploma from "../Images/diploma.jpg";
import { useEffect } from "react";
import { Swiper } from "swiper";

const Education = () => {
  useEffect(() => {
    new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <>
      <div className="container bg-danger mt-3 py-3">
        <h2 className="text-center">My Journey</h2>
        <section className="swiper mySwiper" id="MySwiper">
          <div className="swiper-wrapper">
            <div className="card swiper-slide">
              <div className="card ">
                <img src={SSLC_school} alt="cardimage" />
              </div>

              <div className="card__content">
                <span className="card__title">SSLC</span>
                <span className="card__name">Dr.G E M R S Shirdhan</span>
                <span className="card__text">
                  <span className="text-start">
                    <p>Year Of Passing : 2016</p>
                  </span>
                  <span className="text-start">
                    <p>Percentage : 96.0 %</p>
                  </span>
                </span>
              </div>
            </div>

            <div className="card swiper-slide">
              <div className="card">
                <img src={diploma} alt="cardimage" />
              </div>

              <div className="card__content">
                <span className="card__title">Enginnering</span>
                <span className="card__name">Govt PolyTechnic Belgavi</span>
                <span className="card__text">
                  <span className="text-start">
                    <p>Stream : Civil Engg</p>
                    <p>Year Of Passing : 2019</p>
                    <p>Percentage : 80.37%</p>
                  </span>
                </span>
              </div>
            </div>

            <div className="card swiper-slide">
              <div className="card">
                <img src={university} alt="cardimage" />
              </div>

              <div className="card__content">
                <span className="card__title">Enginnering</span>
                <span className="card__name">
                  KLE Technological University - Hubli
                </span>
                <span className="card__text">
                  <span className="text-start">
                    <p>Stream : Civil Engg</p>
                    <p>Year Of Passing : 2022</p>
                    <p>CGPA : 8.07</p>
                  </span>
                </span>
              </div>
            </div>

            <div className="card swiper-slide rounded">
              <div className="card">
                <img src={coaching} alt="cardimage" />
              </div>

              <div className="card__content">
                <span className="card__name">Java Full Stack Development</span>
                <span className="card__text">
                  <span className="text-start">
                    <p className="text-start mx-2">
                      <small> Fast-Coder | Logical Programmer</small>
                    </p>
                    <p className="text-start mx-2">
                      <small> solved 50+ LeedCode Problems </small>
                    </p>
                    <p className="text-start mx-2">
                      <small>
                        completed Full stack development course in Bangalore ,
                        delt with Trending Technologies Like React , MySQL &
                        spring boot{" "}
                      </small>
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <span>
          <p className="text-white text-center m-0 p-0">Swipe To see more</p>
        </span>
      </div>
    </>
  );
};

export default Education;
