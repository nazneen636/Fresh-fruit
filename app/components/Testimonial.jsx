"use client";
import React from "react";
import Container from "../layers/Container";
import Title from "../layers/Title";
import Heading from "../layers/Heading";
import Para from "../layers/Para";
import customer from "../../public/customer.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className="my-[154px]">
        <div className="flex items-center justify-center flex-col mb-4">
          <Title titleText="Testimonial" />
          <Heading headingText="What Our Customers Say" />
          <Para
            className="text-center mt-1"
            paraText="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
          />
        </div>
        <Slider {...settings}>
          <div className="">
            <div className="flex gap-9 items-center">
              <div className="left">
                <Image src={customer} alt="customer" />
              </div>
              <div className="right max-w-[643px] bg-[#F4F6F6] rounded-3xl h-fit  p-8">
                <p className="text-xl leading-8 mb-8">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <h4 className="font-semibold text-[18px] text-darkBlue">
                  Jane Doe -{" "}
                  <span className="font-normal">Professional chef</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-9 items-center">
              <div className="left">
                <Image src={customer} alt="customer" />
              </div>
              <div className="right max-w-[643px] bg-[#F4F6F6] rounded-3xl h-fit  p-8">
                <p className="text-xl leading-8 mb-8">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <h4 className="font-semibold text-[18px] text-darkBlue">
                  Jane Doe -{" "}
                  <span className="font-normal">Professional chef</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-9 items-center">
              <div className="left">
                <Image src={customer} alt="customer" />
              </div>
              <div className="right max-w-[643px] bg-[#F4F6F6] rounded-3xl h-fit  p-8">
                <p className="text-xl leading-8 mb-8">
                  "I absolutely love Fresh Harvest! The quality of their produce
                  is outstanding. It's always fresh, flavorful, and delicious.
                  The convenience of ordering online and having it delivered to
                  my doorstep saves me so much time. Fresh Harvest has become my
                  go-to for all my fruit and vegetable needs.
                </p>
                <h4 className="font-semibold text-[18px] text-darkBlue">
                  Jane Doe -{" "}
                  <span className="font-normal">Professional chef</span>
                </h4>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
