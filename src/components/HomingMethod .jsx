import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homing_img from "../assets/images/png/homing_img.png";
import correct from "../assets/images/svg/correct.svg";
const HomingMethod = () => {
  return (
    <section className=" position-relative">
      {" "}
      <span className="  green_blur_circle green_blur_circle_10"></span>
      <Container className=" custom_container py-4 ">
        <Row className=" py-lg-5 mb-lg-5 flex-column-reverse flex-lg-row align-items-center">
          <Col lg={6}>
            <div>
              <h4
                className=" ff_plus fw-500 fs_3xl clr_white"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                The HOMING Method{" "}
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className=" clr_white opacity_07 ff_roboto fw-normal fs_md mt-3 pt-1"
              >
                We will start by taking a detailed medical history, including
                any symptoms you may be experiencing. They will ask about your
                family history of eye diseases and other medical conditions.
              </p>
              <div
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="border_bottom pt-2"
              >
                <p className=" ff_plus fw-500  fs_md clr_white mb-2">
                  <img className=" me-2" src={correct} alt="correct" />
                  Medical History - Patient Portal
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07 ps-4 ms-2 pb-3 mb-1">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In{" "}
                </p>
              </div>{" "}
              <div
                data-aos="fade-right"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
                className="border_bottom pt-1 mt-3"
              >
                <p className=" ff_plus fw-500  fs_md clr_white mb-2">
                  <img className=" me-2" src={correct} alt="correct" />
                  Lab Test (Insurance Covered)
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07 ps-4 ms-2 pb-3 mb-1">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                  purus aliquam mauris
                </p>
              </div>{" "}
              <div
                data-aos="fade-right"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
                className=" pt-1 mt-3"
              >
                <p className=" ff_plus fw-500  fs_md clr_white mb-2">
                  <img className=" me-2" src={correct} alt="correct" />
                  Customized Macular Program Report
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07 ps-4 ms-2 pb-3 mb-1">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                  purus aliquam mauris
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={9}
            sm={10}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            <div className="ps-lg-5">
              <img className="w-100" src={homing_img} alt="homing_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomingMethod;
