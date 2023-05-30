import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/logo.svg";
import cross from "../assets/images/svg/cross.svg";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  // const [first, setFirst] = useState(0);
  const [navbar, setNavbar] = useState(true);
  if (navbar) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="  py-lg-4 py-2">
      <Container className="custom_container">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <a href="#">
            <Link to="/">
              {" "}
              <img src={pagelogo} alt="pagelogo" />
            </Link>
          </a>
          <ul
            className={
              navbar
                ? "d-flex mb-0 ps-0 nav_mobile_view flex-column flex-lg-row align-items-center justify-content-center  top_minus_100"
                : "d-flex mb-0 ps-0 nav_mobile_view flex-column flex-lg-row align-items-center justify-content-center top_0"
            }
          >
            <Link to="/">
              {" "}
              <li className=" mt-5 mt-lg-0">
                <a
                  onClick={() => {
                    setNavbar(true);
                  }}
                  href="#"
                  className={`ff_plus fw-normal fs_md  hover_underline clr_green_hover clr_white ${props.clr} position-relative ${props.underlineHome}`}
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about">
              {" "}
              <li className="ms_40 mt-5 mt-lg-0">
                <a
                  onClick={() => {
                    setNavbar(true);
                  }}
                  href="#"
                  className={`ff_plus fw-normal fs_md clr_white hover_underline clr_green_hover ${props.clr2} position-relative ${props.underlineAbout}`}
                >
                  {" "}
                  About
                </a>
              </li>
            </Link>
            <Link to={"/Testimonials"}>
              <li className="ms_40 mt-5 mt-lg-0">
                <a
                  onClick={() => {
                    setNavbar(true);
                  }}
                  href="#"
                  className={`ff_plus fw-normal  hover_underline clr_green_hover fs_md clr_white  ${props.clr3} position-relative ${props.underlineTestimo}`}
                >
                  Testimonials
                </a>
              </li>
            </Link>
            <li className="ms_40 mt-5 mt-lg-0">
              <a
                onClick={() => {
                  setNavbar(true);
                }}
                href="#"
                className={`ff_plus fw-normal  hover_underline clr_green_hover fs_md clr_white position-relative ${props.underlineloc}`}
              >
                Location
              </a>
            </li>
            <li className="ms_40 mt-5 mt-lg-0">
              <a
                onClick={() => {
                  setNavbar(true);
                }}
                href="#"
                className={`ff_plus fw-normal  hover_underline clr_green_hover fs_md clr_white position-relative ${props.underlineProcces}`}
              >
                Process
              </a>
            </li>
            <li className=" mt-5 d-lg-none">
              <button
                onClick={() => {
                  setNavbar(true);
                }}
                className=" ff_plus fw-semibold fs_md clr_white common_btn border-0"
              >
                Contact Us
              </button>
            </li>
            <img
              src={cross}
              onClick={() => {
                setNavbar(true);
              }}
              alt="cross"
              className=" cursor_pointer position-absolute cross_img_pos d-lg-none"
            />
          </ul>

          <button className=" ff_plus fw-semibold fs_md clr_white common_btn border-0 d-lg-block d-none">
            Contact Us
          </button>

          <a
            href="#"
            className="mobile  d-lg-none"
            onClick={() => {
              setNavbar(false);
            }}
          >
            <span className=" line"></span>
            <span className="my-2 line"></span>
            <span className=" line"></span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
