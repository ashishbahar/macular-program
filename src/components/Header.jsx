import React from "react";
import { Container } from "react-bootstrap";
import header_bg from "../assets/images/png/headerbg.png";
import header_main from "../assets/images/png/header_main.png";
import header_main2 from "../assets/images/png/header_main2.png";
import plus from "../assets/images/svg/plus.svg";
import eye from "../assets/images/svg/eyes.svg";
const Header = () => {
  return (
    <header className=" position-relative">
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_8"></span>{" "}
      <span className="  green_blur_circle green_blur_circle_9"></span>
      <img
        className=" position-absolute plus_position_3"
        src={plus}
        alt="plus"
      />{" "}
      <img
        className=" position-absolute plus_position_4"
        src={plus}
        alt="plus"
      />{" "}
      <img
        className=" position-absolute plus_position_5"
        src={plus}
        alt="plus"
      />
      <img className=" position-absolute eye_position_3" src={eye} alt="eye" />{" "}
      <img className=" position-absolute eye_position_4" src={eye} alt="eye" />
      <Container className=" custom_container position-relative py-lg-5 ">
        <img
          className=" position-absolute max_width_972 header_bg_position top-0  "
          src={header_bg}
          alt="header_bg"
        />
        <div className=" header_width m-auto py-lg-5 pt-4">
          <h1 className=" ff_plus fw-semibold fs_5xl clr_white  text-center m-auto">
            Seeing life{" "}
            <span className=" position-relative clearly d-inline-block ps-2">
              clearly,{" "}
            </span>
            with Macular Program
          </h1>
          <div data-aos="flip-left" className=" position-relative">
            <img
              className=" d-none d-sm-block header_img_mt text-center w-100"
              src={header_main}
              alt="header_main"
            />
            <img
              className=" w-100 d-sm-none py-5"
              src={header_main2}
              alt="header_main2"
            />
            <p className=" position-absolute d-none d-sm-block  animation_text_modify ff_plus fw-500 fs_md clr_offwhite ">
              Certificated Method
            </p>

            <p className=" position-absolute d-none d-sm-block  animation_text_modify2 ff_plus fw-500 fs_md clr_offwhite ">
              No Injection Required
            </p>
          </div>
          <div className="d-flex justify-content-between d-sm-none flex-wrap">
            <p className=" animation_text_modify ff_plus fw-500 fs_md clr_offwhite ">
              Certificated Method
            </p>

            <p className=" animation_text_modify2 ff_plus fw-500 fs_md clr_offwhite ">
              No Injection Required
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
