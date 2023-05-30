import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import zigzagleft from "../assets/images/svg/zigzagleft.svg";
import green_check from "../assets/images/svg/greencheck.svg";
import red_cross from "../assets/images/svg/red_cross.svg";
const Program = () => {
  return (
    <section className=" py-lg-5 position-relative">
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_11"></span>
      <Container className=" custom_container  my-lg-5 pt-3 pt-lg-0">
        <div className=" text-center py-lg-5 py-4 position-relative ">
          <img
            className=" position-absolute d-none d-lg-block zigzagleft_position "
            src={zigzagleft}
            alt="zigzagleft"
          />
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="program_header_width pt-lg-5 ff_plus fw-500 fs_4xl opacity_08 clr_white m-auto "
          >
            Who will be eligible for the Program
          </h2>
        </div>
        <Row className=" px-xl-5 mx-xxl-4">
          <Col md={6} className="h-100">
            <div className="green_check_box p-sm-5 p-4 position-relative overflow-hidden  ">
              <span className=" green_blur_circle green_blur_circle_12"></span>
              <img className=" mb-4 pb-3" src={green_check} alt="green_check" />
              <p
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Prevention vision loss
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Drusen
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="800"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Wet in an eye
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="900"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Diabetic Retinopathy
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="900"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Prevention wet AMD
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="1000"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Vision loss
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="1100"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Wet in both eyes
              </p>
              <p
                data-aos="fade-right"
                data-aos-offset="1200"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Cataract + AMD
              </p>
            </div>
          </Col>
          <Col md={6} className=" mt-4 mt-md-0">
            <div className="green_check_box p-sm-5 p-4 h-100 position-relative overflow-hidden ">
              <span className=" green_blur_circle green_blur_circle_12"></span>
              <img className=" mb-4 pb-3" src={red_cross} alt="red_cross" />
              <p
                data-aos="fade-left"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Macular hole
              </p>
              <p
                data-aos="fade-left"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Irreversible legal Blindness
              </p>
              <p
                data-aos="fade-left"
                data-aos-offset="800"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Macular Puckar
              </p>
              <p
                data-aos="fade-left"
                data-aos-offset="900"
                data-aos-easing="ease-in-sine"
                className="mb-0 ff_roboto fw-normal fs_md clr_offwhite ms-3 ps-3 mb-3 transparent_check"
              >
                Chemotherapy
              </p>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          {" "}
          <button className=" common_btn border-0 ff_plus fw-semibold fs_md clr_white mt-md-5 mt-4 mb-4 ">
            Book Call
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Program;
