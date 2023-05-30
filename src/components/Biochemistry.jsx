import React from "react";
import { Container } from "react-bootstrap";
import plus from "../assets/images/svg/plus.svg";
import eye from "../assets/images/svg/eyes.svg";
const Biochemistry = () => {
  return (
    <section
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
      className=" position-relative overflow-hidden mb-5"
    >
      <div className=" green_blur_circle_1 d-none d-lg-block "></div>
      <img
        className=" position-absolute plus_position_7 d-none d-lg-block"
        src={plus}
        alt="plus"
      />{" "}
      <img
        className=" position-absolute plus_position_2"
        src={plus}
        alt="plus"
      />{" "}
      <img
        className=" position-absolute plus_position_6"
        src={plus}
        alt="plus"
      />
      <img className=" position-absolute eye_position_1" src={eye} alt="eye" />{" "}
      <img className=" position-absolute eye_position_2" src={eye} alt="eye" />
      <Container className=" custom_container">
        <div className=" text-center bio_sec_bg py-lg-5 ">
          <h2
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
            className=" mt-2 pt-1 ff_plus fw-500 fs_4xl clr_white"
          >
            Optimize Biochemistry
          </h2>
          <p
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
            className=" mt-2 bio_sec_pera_width  m-auto ff_roboto fw-normal fs_md clr_white opacity_07"
          >
            Lectus adipiscing pulvinar et praesent justo libero luctus tortor. A
            semper feugiat non dui ut egestas eu. Euismod eu fames ante in
            vestibulum duis in odio. Amet pharetra mauris at pellentesque. Netus
            libero nulla eu id.
          </p>
          <button className=" common_btn border-0 ff_plus fw-semibold fs_md clr_white mt-md-5 mt-4 mb-4 ">
            Book Call
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Biochemistry;
