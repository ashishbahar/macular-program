import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/PreLoader";
import BackToTop from "./components/BackToTop";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      delay: 200,
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <Preloader />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Testimonials" element={<Testimonials />}></Route>
      </Routes>
    </div>
  );
}

export default App;
