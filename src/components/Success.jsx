import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import overflow_img from "../assets/images/png/overflow_img.png";
import overflow_imgnot from "../assets/images/png/overflow_imgnot.png";
const Success = () => {
  return (
    <section className="slider_box rounded-2 p-0  pb-5">
      <Container className=" custom_container_2">
        <Row className=" position-relative flex-column-reverse flex-xl-row ">
          <Col xl={5} className=" pt-xl-5 mt-xxl-5">
            <div className=" success_box mt-xl-5 ">
              <h3 className=" ff_plus fw-500 fs_4xl clr_offwhite">
                Success: Strive, Thrive, and Shine
              </h3>
              <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_07">
                When it comes to achieving success, there are certain qualities
                that can help you reach your goals. Had it not been for our
                success in many patients we may never have pursued macular
                degeneration
              </p>{" "}
              <button className=" ff_plus fw-semibold fs_md learn_btn">Learn More</button>
            </div>
          </Col>
          <Col xl={7} className="pe-xxl-0 ">
            <div className=" py-xl-4 pt-5">
              <img
                className=" w-100 d-xxl-block d-none"
                src={overflow_img}
                alt="overflow_img"
              />
              <img
                className=" w-100 d-xxl-none d-block py-xl-5 rounded-5 w-100"
                src={overflow_imgnot}
                alt="overflow_imgnot"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Success;
