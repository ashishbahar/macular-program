import React from "react";
import plus from "../assets/images/svg/plus.svg";
import eye from "../assets/images/svg/eyes.svg";
const AboutUs = () => {
  return (
    <section className="bg_linear py-5 overflow-hidden">
      <div className=" text-center py-5 position-relative ">
        <div className=" green_blur_circle_1"></div>
        <img
          className=" position-absolute plus_position_1"
          src={plus}
          alt="plus"
        />{" "}
        <img
          className=" position-absolute plus_position_2"
          src={plus}
          alt="plus"
        />
        <img
          className=" position-absolute eye_position_1"
          src={eye}
          alt="eye"
        />{" "}
        <img
          className=" position-absolute eye_position_2"
          src={eye}
          alt="eye"
        />
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" py-4 ff_plus fw-semibold fs_5xl clr_white"
        >
          About Us
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
