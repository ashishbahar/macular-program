import React from "react";
import { Container } from "react-bootstrap";
import zigzagleft from "../assets/images/svg/zigzagleft.svg";
const RoadMap = () => {
  return (
    <section className="py-lg-5 pt-4 position-relative">
      <span className=" green_blur_circle green_blur_circle_6"></span>
      <span className=" d-none d-md-block green_blur_circle green_blur_circle_11"></span>{" "}
      <span className=" green_blur_circle green_blur_circle_13 "></span>
      <Container className=" custom_container">
        <div className="position-relative pt-lg-5">
          {" "}
          <h2 className="fw-500 ff_plus fs_4xl clr_offwhite  text-center pt-3  position-relative">
            Our Journey
          </h2>{" "}
          <img
            className=" position-absolute d-none d-lg-block zigzagleft_poition "
            src={zigzagleft}
            alt="zigzagleft"
          />
        </div>
        <div
          data-aos="fade-down"
          className="timeline_width journeyTimeline mx-auto position-relative mt-md-5 mt-4"
        >
          <div className="boxRight d-flex justify-content-end">
            <div className="content_timeline cursor_pointer right">
              <h4>16 May, 2013</h4>
              <p>
                My mother had macular degeneration for the last 15 years. After
                conducting research on the disease, I successfully treated her,
                and she showed improvement within six months.
              </p>
            </div>
          </div>
          <div className="boxleft d-flex justify-content-lg-start justify-content-end">
            <div className="content_timeline cursor_pointer left">
              <h4>2015</h4>
              <p>
                A patient named Paddy did not respond to injections for her eye
                treatment. I conducted research and found an alternative
                treatment that did not involve injections. As a result, Paddy's
                vision improved, and she was able to see clearly.
              </p>
            </div>
          </div>
          <div className="boxRight d-flex justify-content-end">
            <div className="content_timeline cursor_pointer right">
              <h4>2017</h4>
              <p>
                In 2017, I studied migraines and worked with 69 patients. Within
                three to six months of treatment, 54 patients showed improvement
                in their vision.
              </p>
            </div>
          </div>
          <div className="boxleft d-flex justify-content-lg-start justify-content-end">
            <div className="content_timeline cursor_pointer left">
              <h4>2021</h4>
              <p>
                In 2020, I studied 365 cases of eye disease and conducted
                research on them. In 2021, I conducted a test based on my
                research, and the results showed a recovery rate of 48% for dry
                AMD and 60% for wet AMD patients.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
