import React, { useState } from "react";
import arrowimg from "../assets/images/png/top.png";

const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const BackToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed  backtotop_postion  ">
      <img
        src={arrowimg}
        alt="arrowimg"
        onClick={() => BackToTop()}
        className={first ? "d-none cursor_pointer " : "d-block cursor_pointer "}
      />
    </section>
  );
};

export default BackToTop;
