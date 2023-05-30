import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import rightarrow from "../assets/images/svg/rightarrow.svg";
import zigzagright from "../assets/images/svg/zigzagright.svg";
const Faq = () => {
  let [first, setfirst] = useState(0);
  return (
    <section className=" faq_bg py-lg-5 ">
      <Container className=" custom_container pb-5  pt-4">
        <div className=" position-relative">
          {" "}
          <p className="text-center ff_plus fw-500 fs_4xl clr_white opacity_08 position-relative ">
            Frequently Asked Questions
          </p>
          <img
            className=" position-absolute d-none d-xl-block  zigzagright_position"
            src={zigzagright}
            alt="zigzagright"
          />
        </div>
        <Row className=" justify-content-center py-lg-5">
          <Col
            lg={4}
            md={8}
            sm={10}
            xs={11}
            data-aos="fade-down-right"
            className=" pb-4 pb-lg-0"
          >
            <div>
              <div className="pe-xl-5">
                <div
                  onClick={() => {
                    setfirst(0);
                  }}
                  className={
                    first === 0
                      ? "cursor_pointer d-flex align-items-center justify-content-between faq_btn_modify  p-3 p-xl-4"
                      : "cursor_pointer d-flex align-items-center justify-content-between faq_btn_tranparent  p-3 p-xl-4"
                  }
                >
                  <p className=" ff_roboto fw-semibold fs_lg clr_offwhite mb-0 ">
                    Customer Questions
                  </p>
                  <img src={rightarrow} alt="rightarrow" />
                </div>

                <div
                  onClick={() => {
                    setfirst(1);
                  }}
                  className={
                    first === 1
                      ? "cursor_pointer d-flex align-items-center justify-content-between faq_btn_modify  p-3 p-xl-4"
                      : "cursor_pointer d-flex align-items-center justify-content-between faq_btn_tranparent  p-3 p-xl-4  border_1_white"
                  }
                >
                  <p className=" ff_roboto fw-semibold fs_lg clr_offwhite mb-0 ">
                    Tech Support Questions
                  </p>
                  <img src={rightarrow} alt="rightarrow" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            data-aos="fade-down-left"
            className="pt-4 pt-lg-0 position-relative"
          >
            <span className=" green_blur_circle green_blur_circle_7"></span>
            <div className={first === 0 ? "d-block" : "d-none"}>
              <Accordion defaultActiveKey="8">
                <div className=" border-bottom accordian_pb">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className=" ff_plus fw-500 fs_lg clr_offwhite ">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body className=" ff_plus fw-500 fs_md clr_offwhite ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do Blood Tests Improve?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
            <div className={first === 1 ? "d-block" : "d-none"}>
              <Accordion defaultActiveKey="8">
                <div className=" border-bottom accordian_pb">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className=" ff_plus fw-500 fs_lg clr_offwhite ">
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body className=" ff_plus fw-500 fs_md clr_offwhite ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Do Blood Tests Improve?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className=" border-bottom accordian_padding">
                  {" "}
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
