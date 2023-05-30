import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Methodology from "./Methodology";
import HomingMethod from "./HomingMethod ";
import Biochemistry from "./Biochemistry";
import MoreThen from "./MoreThen";
import Success from "./Success";
import Program from "./Program";
import FeeStructure from "./FeeStructure";
import TheExperts from "./TheExperts";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Footer from "./Footer";
import SecSlider from "./SecSlider";
import Symptoms from "./Symptoms";

const Home = () => {
  return (
    <>
      {" "}
      <NavBar underlineHome="underline" clr="hover_clr_green" />
      <Header />
      <Symptoms />
      <Methodology />
      <HomingMethod />
      <Biochemistry />
      <MoreThen />
      <Success />
      <Program />
      <FeeStructure />
      <TheExperts />
      <SecSlider />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default Home;
