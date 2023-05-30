import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expert_1 from "../assets/images/png/expert1.png";
import expert_2 from "../assets/images/png/expert2.png";
import twiter2 from "../assets/images/svg/twitter2.svg";

const TheExperts = () => {
  return (
    <section className="experts_bg_img mx-auto mb-lg-5 mb-3 ">
      <Container className=" custom_container pb-lg-5 pb-4">
        <h2 className="text-center ff_plus fw-500 fs_4xl clr_white opacity_08 py-md-5 pt-4 pb-2">
          The Experts behind the Program
        </h2>
        <Row className=" px-lg-5 mx-lg-5 justify-content-center">
          <Col data-aos="fade-up-right" md={6} sm={9}>
            <div className=" pe-1">
              <img className="w-100" src={expert_1} alt="expertman" />
              <div className="d-flex  justify-content-between mt-3">
                <p className=" mb-0 ff_plus fw-semibold fs_xl clr_offwhite">
                  Brian A. Bakke, PhD
                </p>
                <img className=" cursor_pointer" src={twiter2} alt="twiter2" />
              </div>
              <p className=" ff_roboto fw-normal fs_md clr_offwhite mt-2">
                PhD Biochemistry
              </p>
            </div>
          </Col>{" "}
          <Col data-aos="fade-up-left" md={6} sm={9}>
            <div className=" ps-1">
              <img className="w-100" src={expert_2} alt="expertman" />
              <div className="d-flex  justify-content-between mt-3">
                <p className=" mb-0 ff_plus fw-semibold fs_xl clr_offwhite">
                  George W. Rozakis Md
                </p>
                <img className=" cursor_pointer" src={twiter2} alt="twiter2" />
              </div>
              <p className=" ff_roboto fw-normal fs_md clr_offwhite mt-2">
                Biomedical Engineer
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TheExperts;
