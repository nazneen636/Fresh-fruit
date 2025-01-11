"use client";
import React from "react";
import bg from "../../public/countdown.png";
import Container from "../layers/Container";
import Title from "../layers/Title";
import Heading from "../layers/Heading";

import Countdown from "../layers/Countdown";

const CountDown = () => {
  return (
    <div className="bg-custom-bg bg-cover mt-[150px] bg-center">
      <Container className="py-[94px]">
        <Title titleText="Special Offer" />
        <Heading
          className="text-[48px] text-center md:text-left md:text-[80px]"
          headingText="Seasonal Fruit Bundle"
        />
        <h2 className="text-[32px] md:text-[48px] text-center md:text-left text-darkBlue mb-6 border border-blue-400 w-fit leading-[110%]">
          Discount up to{" "}
          <span className=" text-orange font-medium">80% OFF</span>
        </h2>
        <Countdown />
        <p className="py-4 px-8 bg-[#176D38] rounded-full w-fit text-[32px] font-semibold text-white mt-8">
          CODE : <span className="text-yellow-400 ">FRUIT28</span>
        </p>
      </Container>
    </div>
  );
};

export default CountDown;
