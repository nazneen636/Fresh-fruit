import React from "react";
import Banner from "./components/Banner";
import Product from "./components/Product";
import About from "./components/About";
import CountDown from "./components/CountDown";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

const page = () => {
  return (
    <div>
      <Banner />
      <Product />
      <About />
      <CountDown />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default page;
