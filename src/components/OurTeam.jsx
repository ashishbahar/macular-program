import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team_1 from "../assets/images/png/team_1.png";
import team_2 from "../assets/images/png/team_2.png";
import men2 from "../assets/images/png/twomen.png";
import greeneye from "../assets/images/svg/greeneye.svg";
import owleye from "../assets/images/svg/owl.svg";
import arrow_2 from "../assets/images/svg/arrow_2.svg";
const OurTeam = () => {
  return (
    <section className=" position-relative">
      <span className=" green_blur_circle end-0 top-0"></span>
      <span className=" green_blur_circle green_blur_circle_7"></span>
      <span className=" green_blur_circle green_blur_circle_14"></span>
      <span className=" green_blur_circle green_blur_circle_15"></span>
      <Container className=" custom_container ">
        <div className=" text-center mt-lg-5 pt-5 ">
          <h3 className=" ff_plus fw-medium fs_4xl clr_white  pb-sm-3 ">
            Our Team
          </h3>
          <Row className=" justify-content-lg-between justify-content-center">
            <Col lg={5} md={9} sm={10} data-aos="fade-right" className="mt-3">
              <div>
                <img className="w-100" src={team_1} alt="team_1" />
              </div>
            </Col>
            <Col xl={6} lg={7} data-aos="fade-left">
              <div className=" text-start mt-3">
                <h3 className=" ff_plus fw-500 fs_3xl clr_white">
                  George W. Rozakis, MD
                </h3>
                <p className=" mt-3 pt-1  ff_roboto fw-normal fs_md clr_offwhite opacity_08">
                  Dr. Rozakis is a board certified biomedical engineer who
                  studied medicine at Cornell Medical Center and studied
                  Ophthalmology at the Duke Eye Center. Dr. Rozakis worked in
                  the field of Advanced Wellness / Functional Medicine & The
                  Optimization of Biochemistry for over 15 years. He has applied
                  this science age-related chronic conditions. Dr. Rozakis won
                  the advancements in healthcare award in Cleveland, Ohio
                  (beating out the Cleveland Clinic) in 2015 for his work in
                  Advanced Wellness and advocates for this approach to health
                  care to his patients and colleagues.
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_08 mt-2">
                  Dr. Rozakis pioneered the field of Lasik refractive surgery,
                  phakic refractive lenses, and the use of hormones and other
                  advanced testing to treat macular degeneration, migraine,
                  parkinson's, arthritis, insomnia, menopause, low testosterone,
                  auto immune disease and other age-related chronic conditions.
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" mt-lg-5 pt-xl-5   flex-column-reverse flex-lg-row justify-content-lg-between justify-content-center align-items-center align-items-lg-start position-relative">
            <Col xl={6} lg={7} data-aos="fade-up-right">
              <div className=" text-start mt-4 pt-lg-5">
                <h3 className=" ff_plus fw-500 fs_3xl clr_white">
                  Brian Bakke, Ph.D.
                </h3>
                <p className=" mt-3 pt-1  ff_roboto fw-normal fs_md clr_offwhite opacity_08">
                  Dr. Bakke also holds a master’s degree in human nutrition from
                  Columbia University. His master’s thesis work focused on
                  studying the clinical nutrition practice patterns used by eye
                  professionals in the prevention and treatment of Age-Related
                  Macular Degeneration (AMD).
                </p>
                <p className=" ff_roboto fw-normal fs_md clr_offwhite opacity_08 mt-2">
                  Prior to partnering with the Advanced Wellness Program through
                  Investihealth, Dr. Bakke spent 6 years working as chief
                  science officer with a medical consulting company. His work as
                  chief science officer focused on collaborating with primary
                  care physicians in developing personalized nutrition and
                  bioidentical hormone based care plans for improving clinical
                  outcomes for patients with complex medical conditions.
                  Previously, Dr. Bakke spent 7 years working with the multi-
                  national chemistry, biotechnology and life science companies
                  BASF and Syngenta as a senior chemist.
                </p>
              </div>
            </Col>
            <Col
              lg={5}
              md={9}
              sm={10}
              data-aos="fade-up-left"
              className="pt-lg-5 pt-4"
            >
              <div className=" text-center">
                <img className="w-100" src={team_2} alt="team_2" />
              </div>
            </Col>
          </Row>
          <div className=" position-relative ">
            <img
              className=" position-absolute arrow_2_position"
              src={arrow_2}
              alt="aroow_2"
            />
            <Row className=" justify-content-lg-between justify-content-center py-lg-5 my-lg-5">
              <Col
                data-aos="fade-down-right"
                lg={5}
                md={9}
                sm={10}
                className="py-lg-5 my-lg-5 mt-5"
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
                data-aos="fade-down-left"
                lg={6}
                className=" py-lg-5 my-lg-5 mt-3 pb-5"
              >
                <div className=" text-start mt-3">
                  <h3 className=" ff_plus fw-500 fs_4xl clr_white">
                    More than 50% patients recovered
                  </h3>
                  <p className=" mt-3 pt-1 ff_poppins fw-normal fs_md clr_offwhite opacity_07">
                    In 2013, We conducted a test with 365 dry and wet AMD
                    patients. In this test recovery rate of patients is 48% of
                    dry AMD and 60% of wet AMD. Another patient named Paddy, was
                    suffering from dry AMD and temporary vision loss. Our
                    strategies cured her and now she is living happily.
                  </p>
                  <button className=" mt-4 common_btn border-0 ff_plus fw-semibold fs_md clr_white ">
                    Book Call
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
