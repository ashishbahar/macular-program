import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import oldpeople1 from "../assets/images/png/oldpeople1.png";
import oldpeople2 from "../assets/images/png/oldpeople2.png";
import oldpeople3 from "../assets/images/png/oldpeople3.png";
import oldpeople4 from "../assets/images/png/oldpeople4.png";
import oldpeople5 from "../assets/images/png/oldpeople5.png";
import oldpeople6 from "../assets/images/png/oldpeople6.png";
import youtube from "../assets/images/svg/youtube.svg";
import big_img from "../assets/images/png/bid_img.png";
import arrow from "../assets/images/svg/arrow.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const VideoTestimonials = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className=" position-relative">
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_3"></span>
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_4"></span>
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_5"></span>
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_6"></span>
      <Container className=" custom_container pt-5">
        <div className=" text-center pt-md-5">
          <div className=" position-relative">
            <h3
              data-aos="zoom-in"
              className=" ff_plus fw-medium fs_4xl clr_white pb-lg-5 pb-3 "
            >
              Video Testimonials
            </h3>
            <img
              className="position-absolute arrow_position d-none d-sm-block"
              src={arrow}
              alt="arrow"
            />
          </div>
          <div
            className=" position-relative cursor_pointer"
            variant="primary"
            onClick={handleShow}
          >
            <img
              data-aos="flip-up"
              className=" rounded-3 w-100"
              src={big_img}
              alt="big_img"
            />
            <img
              className=" position-absolute youtube_position "
              src={youtube}
              alt="youtube"
            />
          </div>
          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body className=" text-center">
              <iframe
                width="100%"
                height="430"
                src="https://www.youtube.com/embed/eKqY-oP1d_Y"
                title="How to Start Coding? Learn Programming for Beginners"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Modal.Body>
          </Modal>
        </div>
        <p className=" ff_plus fw-medium fs_3xl clr_white mb-lg-5 mt-4">
          A patient named Paddy, was suffering from dry AMD and temporary vision
          loss. Our strategies cured her and now she is living happily.
        </p>
        <div className=" pt-lg-5 pt-4 position-relative ">
          <span className=" green_blur_circle green_blur_circle_2"></span>
          <Row className=" ">
            <Col data-aos="fade-right" lg={4} sm={6} className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg border_transparent  cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople1} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Jenny Wilson
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
            <Col lg={4} sm={6} data-aos="fade-down" className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople2} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Dianne Russell
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
            <Col lg={4} sm={6} data-aos="fade-left" className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople3} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Dianne Russell
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
            <Col data-aos="fade-right" lg={4} sm={6} className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople4} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Cameron Williamson
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
            <Col lg={4} sm={6} data-aos="fade-down" className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople5} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Esther Howard
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
            <Col lg={4} sm={6} data-aos="fade-left" className=" pb-lg-5 pb-4">
              <div className=" mini_box_bg border_transparent cursor_pointer overflow-hidden">
                <div className=" position-relative">
                  <img className="w-100 " src={oldpeople6} alt="oldpeople" />
                  <img
                    className=" position-absolute youtube_position "
                    src={youtube}
                    alt="youtube"
                  />
                </div>
                <p className=" ff_plus fw-medium fs_lg clr_offwhite mb-0 p-3">
                  Eleanor Pena
                </p>
                <p className=" ff_roboto pb-3 fw-normal fs_md clr_offwhite opacity_08 ps-3 pe-2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia cons
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center pb-5">
            <button className=" common_btn border-0 ff_plus fw-semibold fs_md clr_white ">
              See all
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
