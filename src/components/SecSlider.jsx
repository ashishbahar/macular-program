import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import allstaff from "../assets/images/svg/allstaff.svg";
import zigzagleft from "../assets/images/svg/zigzagleft.svg";
const SecSlider = () => {
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
    <section className=" pb-sm-5 pb-4">
      <Container className=" custom_container py-lg-5 mb-lg-5 mb-3   ">
        <div
          data-aos="fade-up"
          className=" text-center pb-lg-5 mt-lg-5 pt-4 position-relative"
        >
          <h3 className=" ff_plus pt-lg-5 fw-medium fs_4xl clr_white opacity_08">
            What our patients say
          </h3>
          <img
            className=" position-absolute d-none d-lg-block top-0 start-0 ps-lg-5 ms-lg-5"
            src={zigzagleft}
            alt="zigzagleft"
          />
          <p className=" mt-3 ff_roboto fw-normal fs_md clr_offwhite opacity_07 max_width_637 m-auto">
            Viverra nisi integer convallis ultricies tellus mauris. Ante purus
            pretium ac vitae morbi in ultricies ut. Orci pharetra adipiscing ut.
          </p>
        </div>
        <div>
          <Row className=" align-items-center justify-content-lg-between justify-content-center">
            <Col lg={5} md={9} data-aos="zoom-out-right">
              <div className=" position-relative">
                <img className=" w-100" src={allstaff} alt="allstaff" />
                <span className=" green_blur_circle green_blur_circle_7"></span>
              </div>
            </Col>{" "}
            <Col lg={6} data-aos="zoom-out-left">
              <div>
                {" "}
                <Slider {...settings} className=" sec_slider pb-md-3">
                  <div>
                    <h4 className=" ff_plus fw-500  clr_offwhite fs_xl">
                      Alex willson
                    </h4>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      Lectus adipiscing pulvinar et praesent justo libero luctus
                      tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                      fames ante in vestibulum duis in odio. Amet pharetra
                      mauris at pellentesque. Netus libero nulla eu id.
                    </p>
                    <p className=" cursor_pointer ff_roboto fw-normal fs_md clr_neon">
                      Read More...
                    </p>
                  </div>{" "}
                  <div>
                    <h4 className=" ff_plus fw-500  clr_offwhite fs_xl">
                      Alex
                    </h4>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      Lectus adipiscing pulvinar et praesent justo libero luctus
                      tortor. A semper feugiat non dui ut egestas eu. Amet
                      pharetra mauris at pellentesque. Netus libero nulla eu id.
                    </p>
                    <p className=" cursor_pointer ff_roboto fw-normal fs_md clr_neon">
                      Read More....
                    </p>
                  </div>{" "}
                  <div>
                    <h4 className=" ff_plus fw-500  clr_offwhite fs_xl">
                      willson
                    </h4>
                    <p className=" ff_roboto fw-normal fs_md clr_white opacity_07">
                      Lectus adipiscing pulvinar et praesent justo libero luctus
                      tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                      fames ante in vestibulum duis in odio.
                    </p>
                    <p className=" cursor_pointer ff_roboto fw-normal fs_md clr_neon">
                      Read More.....
                    </p>
                  </div>{" "}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SecSlider;
