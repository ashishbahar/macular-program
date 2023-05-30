import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import browgirl from "../assets/images/png/brownhairgirl.png";
import men from "../assets/images/png/spxwithmen.png";
import star from "../assets/images/svg/star.svg";
import quotes from "../assets/images/svg/quotes.svg";
const LastSlider = () => {
  const [btn, setBtn] = useState(0);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  };
  return (
    <section className=" overflow-hidden pb-sm-5 pb-4 ">
      <Container className=" custom_container py-lg-5 my-lg-5 pb-3">
        <div className="d-flex ">
          <button
            onClick={() => {
              setBtn(0);
            }}
            className={
              btn === 0
                ? " fw-500 ff_roboto fs_lg clr_offwhite btn_modify btn_green"
                : " fw-500 ff_roboto fs_lg clr_offwhite btn_modify "
            }
          >
            Wet AMD Testimonials
          </button>{" "}
          <button
            onClick={() => {
              setBtn(1);
            }}
            className={
              btn === 1
                ? " fw-500 ms-3 ff_roboto fs_lg clr_offwhite btn_modify btn_green"
                : " fw-500 ms-3 ff_roboto fs_lg clr_offwhite btn_modify "
            }
          >
            Dry AMD Testimonials
          </button>
        </div>
        <div className=" py-md-5 py-4 position-relative mt-3 ">
          <Slider {...settings} className=" slider_last">
            <div className=" px-2 ">
              <div className="d-flex flex-column flex-lg-row slider_box ">
                <div className=" ">
                  <img
                    className=" m-auto w_max_100"
                    src={browgirl}
                    alt="browgirl"
                  />
                </div>
                <div className=" ps-lg-5 d-flex flex-column-reverse position-relative flex-lg-column">
                  <img
                    src={quotes}
                    className=" position-absolute quotes_position d-none d-lg-block "
                    alt="quotes"
                  />
                  <p className="ff_roboto fw-normal mb-0 fs_md clr_offwhite opacity_08">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </p>
                  <div>
                    <p className=" ff_plus fw-500 fs_2xl clr_offwhite mt-3 mb-2 mb-lg-3">
                      Rodney Gunther
                    </p>
                    <img className=" mb-3 mb-lg-0" src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="d-flex flex-column flex-lg-row slider_box">
                <div className=" ">
                  <img className=" m-auto w_max_100" src={men} alt="men" />
                </div>
                <div className=" ps-lg-5 d-flex flex-column-reverse flex-lg-column position-relative ">
                  <img
                    src={quotes}
                    className=" position-absolute quotes_position d-none d-lg-block "
                    alt="quotes"
                  />
                  <p className="ff_roboto fw-normal mb-0 fs_md clr_offwhite opacity_08">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </p>
                  <div>
                    <p className=" ff_plus fw-500 fs_2xl clr_offwhite mt-3 mb-2 mb-lg-3">
                      Rodney Gunther
                    </p>
                    <img className=" mb-3 mb-lg-0" src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="d-flex flex-column flex-lg-row slider_box">
                <div className=" ">
                  <img
                    className=" m-auto w_max_100"
                    src={browgirl}
                    alt="browgirl"
                  />
                </div>
                <div className=" ps-lg-5 d-flex flex-column-reverse position-relative flex-lg-column">
                  <img
                    src={quotes}
                    className=" position-absolute quotes_position d-none d-lg-block "
                    alt="quotes"
                  />
                  <p className="ff_roboto fw-normal mb-0 fs_md clr_offwhite opacity_08">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </p>
                  <div>
                    <p className=" ff_plus fw-500 fs_2xl clr_offwhite mt-3 mb-2 mb-lg-3">
                      Rodney Gunther
                    </p>
                    <img className=" mb-3 mb-lg-0" src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className=" green_blur_circle_1 slider_position_green_circle"></div>
        </div>
      </Container>
    </section>
  );
};

export default LastSlider;
