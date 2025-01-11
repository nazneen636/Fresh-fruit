import React from "react";
import Title from "../layers/Title";
import Heading from "../layers/Heading";
import Para from "../layers/Para";
import Container from "../layers/Container";
import img from "../../public/about.png";
import Image from "next/image";
import ComBtn from "../layers/ComBtn";

const About = () => {
  return (
    <div id="about" className="mt-[100px] md:mt-[290px]">
      <Container className="flex md:flex-row flex-col gap-16">
        <div className="">
          <Image src={img} alt="about" />
        </div>
        <div className="flex  justify-center flex-col">
          <Title titleText="About us" />
          <Heading headingText="About Fresh Harvest" />
          <Para
            className="mt-1"
            paraText="Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience"
          />
          <ComBtn href="/" ComBtnText="Read More" className="mt-4" />
        </div>
      </Container>
    </div>
  );
};

export default About;
