import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import img3 from "../assets/images/png/img3.png";
const Symptoms = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
  };
  return (
    <section className=" position-relative">
      <span className=" green_blur_circle green_blur_circle_2"></span>
      <span className="  green_blur_circle green_blur_circle_10"></span>
      <Container className=" custom_container mt-md-5 mt-4 mb-5 mb-lg-0">
        <div className="first_slider_bg overflow-hidden">
          <div className="Symptoms_bg text-center py-lg-5 py-4 ">
            <h2 className=" ff_plus fw-500 fs_4xl clr_white opacity_08">
              Symptoms of the disease
            </h2>
            <p className="mb-0 px-2  ff_roboto fw-normal fs_md clr_offwhite opacity_07 p">
              Macular degeneration is a progressive eye disease that can cause a
              range of problems, including:
            </p>
          </div>
          <div className="">
            <Row className=" flex-column-reverse align-items-center flex-lg-row">
              <Col lg={7} data-aos="zoom-out-right" className=" py-lg-5">
                <div className="p-md-5  px-3 pb-5  ">
                  <Slider {...settings} className=" sec_slider pb-md-3">
                    <div>
                      <h4 className=" ff_plus fw-500  clr_offwhite fs_3xl">
                        Blurred or distorted central vision
                      </h4>
                      <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pb-4">
                        This is one of the primary symptoms of macular
                        degeneration. As the disease progresses, it can cause
                        the vision to become increasingly blurred or distorted,
                        making it difficult to read, recognize faces, or perform
                        other tasks that require clear vision.
                      </p>
                    </div>
                    <div>
                      <h4 className=" ff_plus fw-500  clr_offwhite fs_3xl">
                        Blurred or distorted central
                      </h4>
                      <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pb-4">
                        This is one of the primary symptoms of macular
                        degeneration. As the disease progresses, it can cause
                        the vision to become increasingly blurred or distorted,
                        making it difficult to read, recognize faces, or perform
                        other tasks that require clear vision.
                      </p>
                    </div>
                    <div>
                      <h4 className=" ff_plus fw-500  clr_offwhite fs_3xl">
                        Blurred or vision
                      </h4>
                      <p className=" ff_roboto fw-normal fs_md clr_white opacity_07 pb-4">
                        This is one of the primary symptoms of macular
                        degeneration. As the disease progresses, it can cause
                        the vision to become increasingly blurred or distorted,
                        making it difficult to read, recognize faces, or perform
                        other tasks that require clear vision.
                      </p>
                    </div>
                  </Slider>
                </div>
              </Col>
              <Col lg={5} data-aos="zoom-out-left" md={9} sm={10} className="">
                <div className=" pe-lg-5 py-2 px-3 ps-lg-0 position-relative">
                  <img className="w-100" src={img3} alt="img3" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Symptoms;
