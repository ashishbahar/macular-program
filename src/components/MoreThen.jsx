import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import men2 from "../assets/images/png/twomen.png";
import greeneye from "../assets/images/svg/greeneye.svg";
import owleye from "../assets/images/svg/owl.svg";
import arrow_2 from "../assets/images/svg/arrow_2.svg";
const MoreThen = () => {
  return (
    <section className=" position-relative">
      <span className="  green_blur_circle green_blur_circle_11 start-0 "></span>
      <Container className=" custom_container">
        {" "}
        <div className=" position-relative ">
          <img
            className=" position-absolute arrow_2_position"
            src={arrow_2}
            alt="aroow_2"
          />
          <Row className=" justify-content-lg-between justify-content-center py-lg-5 my-lg-5">
            <Col
              data-aos="fade-up"
              lg={5}
              md={9}
              sm={10}
              className="py-lg-5 my-lg-5 mt-lg-5"
            >
              <div className=" position-relative">
                <img className="w-100" src={men2} alt="men2" />
                <div className=" d-flex mini_box_modify position-absolute">
                  <img src={greeneye} alt="greeneye" />
                  <p className=" ps-3 text-start mb-0 ff_poppins fw-normal fs_md clr_offwhite">
                    Macular Degeneration
                  </p>
                </div>
                <div className=" mini_box_modify2 position-absolute">
                  <div className="d-flex align-items-center">
                    <img src={owleye} alt="owleye" />
                    <p className=" ps-3 text-start mb-0 ff_poppins fw-normal fs_md clr_offwhite">
                      Patient Recover
                    </p>
                  </div>
                  <p className="text-start mt-2 mb-0 ff_poppins fw-normal fs_md clr_offwhite opacity_08">
                    We are using an injection to stop the growth factor of
                    Retina
                  </p>
                </div>
              </div>
            </Col>
            <Col
              data-aos="fade-down"
              lg={6}
              className=" py-lg-5 my-lg-5 mt-3 pb-5"
            >
              <div className=" text-start mt-3">
                <h3 className=" ff_plus fw-500 fs_4xl clr_white">
                  More than 50% patients recovered
                </h3>
                <p className=" mt-3 pt-1 ff_poppins fw-normal fs_md clr_offwhite opacity_07">
                  In 2013, We conducted a test with 365 dry and wet AMD
                  patients. In this test recovery rate of patients is 48% of dry
                  AMD and 60% of wet AMD. Another patient named Paddy, was
                  suffering from dry AMD and temporary vision loss. Our
                  strategies cured her and now she is living happily.
                </p>
                <button className=" mt-sm-4 mt-2 common_btn border-0 ff_plus fw-semibold fs_md clr_white ">
                  Book Call
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MoreThen;
