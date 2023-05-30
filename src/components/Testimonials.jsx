import React from "react";
import NavBar from "./NavBar";
import VideoTestimonials from "./VideoTestimonials";
import LastSlider from "./LastSlider";
import Footer from "./Footer";
import Whatpeople from "./Whatpeople";
import Frequently from "./Frequently";

const Testimonials = () => {
  return (
    <>
      {" "}
      <NavBar underlineTestimo="underline" clr3="hover_clr_green" />
      <Whatpeople />
      <VideoTestimonials />
      <LastSlider />
      <Frequently />
      <Footer />
    </>
  );
};

export default Testimonials;
