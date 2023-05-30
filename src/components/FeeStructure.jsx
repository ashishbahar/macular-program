import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import zigzgarrow from "../assets/images/svg/zigzigarrow.svg";
import pencil_women from "../assets/images/png/pencilwomen.png";
import only_line from "../assets/images/svg/only_line.svg";
import only_line2 from "../assets/images/svg/only_line2.svg";
const FeeStructure = () => {
  return (
    <section className="position-relative py-lg-5 mb-lg-5">
      <span className="  green_blur_circle green_blur_circle_6 "></span>
      <Container className=" custom_container my-lg-5 mb-4">
        <Row className=" justify-content-lg-between justify-content-center align-items-center">
          <Col lg={5} md={9} sm={10} xs={10}>
            <div className="position-relative py-sm-5  py-4 ">
              <h2
                data-aos="flip-left"
                className=" text-center text-lg-start ff_plus fw-500 fs_4xl clr_white opacity_08"
              >
                Fee Structure
              </h2>
              <img
                data-aos="flip-right"
                className=" position-absolute zigzgarrow_position d-none d-sm-block "
                src={zigzgarrow}
                alt="zigzgarrow"
              />
              <img
                data-aos="flip-left"
                className="mt-lg-5 pt-3 w-100 px-xl-5"
                src={pencil_women}
                alt="pencil_women"
              />
            </div>
          </Col>
          <Col lg={6} md={10}>
            <div className=" position-relative">
              <span className=" green_blur_circle green_blur_circle_7"></span>
              <img
                className="position-absolute d-none d-md-block only_line_position"
                src={only_line}
                alt="line"
              />{" "}
              <img
                className="position-absolute d-none d-md-block d-lg-none d-xxl-block only_line2_position"
                src={only_line2}
                alt="line"
              />
              <div
                data-aos="fade-right"
                data-aos-offset="800"
                data-aos-easing="ease-in-sine"
                className="fee_structure_box"
              >
                <p className="mb-0 ff_plus fw-500 fs_xl clr_white">
                  One Time Enrollment $3000/y
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
                className="fee_structure_box"
              >
                <p className="mb-0 ff_plus fw-500 fs_xl clr_white">
                  Medical Grade Supplements $80-125/m
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="800"
                data-aos-easing="ease-in-sine"
                className="fee_structure_box"
              >
                <p className="mb-0 ff_plus fw-500 fs_xl clr_white">
                  Maintenance $450/ Lab check
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 mt-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeeStructure;
