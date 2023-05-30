import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import youngman from "../assets/images/png/youngman.png";
import zigzgarrow from "../assets/images/svg/zigzigarrow.svg";
const Methodology = () => {
  return (
    <section className=" py-lg-5 position-relative">
      <span className="  green_blur_circle green_blur_circle_8 start-0"></span>
      <Container className=" custom_container py-lg-5 my-lg-5">
        <Row className=" justify-content-center justify-content-lg-between align-items-center">
          <Col xl={5} lg={6} md={9} sm={10} data-aos="fade-up">
            <div>
              <img className="w-100" src={youngman} alt="youngman" />
            </div>
          </Col>
          <Col lg={6} data-aos="fade-down" data-aos-duration="3000">
            <div className=" position-relative pt-lg-5 pb-4 ">
              <img
                className=" d-none d-xl-block position-absolute zigzgarrow_position "
                src={zigzgarrow}
                alt="zigzgarrow"
              />
              <h2 className=" ff_plus mb-3 pb-1 fw-500 fs_4xl clr_white opacity_0">
                Our Methodology
              </h2>
              <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07">
                Quisque arcu erat aenean iaculis nisl molestie et te8llus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>{" "}
              <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>
              <button className=" common_btn border-0 ff_plus fw-semibold fs_md clr_white mt-3 ">
                Learn more
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Methodology;
