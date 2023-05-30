import React from "react";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import OurTeam from "./OurTeam";
import Success from "./Success";
import SecSlider from "./SecSlider";
import Faq from "./Faq";
import Footer from "./Footer";
import RoadMap from "./RoadMap";

const About = () => {
  return (
    <div>
      {" "}
      <NavBar underlineAbout="underline" clr2="hover_clr_green" />
      <AboutUs />
      <RoadMap />
      <OurTeam />
      <Success />
      <SecSlider />
      <Faq />
      <Footer />
    </div>
  );
};

export default About;
