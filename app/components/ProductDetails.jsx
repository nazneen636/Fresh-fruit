import React from "react";
import Container from "../layers/Container";
import Image from "next/image";
import img from "../../public/coconut.png";
import Title from "../layers/Title";
import Heading from "../layers/Heading";
import Para from "../layers/Para";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div>
      <Container>
        <div className="top flex justify-between">
          <div className="left">
            <div className="productImg border border-[#00000024] w-[566px] h-[566px] rounded-xl">
              <Image src={img} className="object-contain w-full" />
            </div>
          </div>
          <div className="right w-[588px] flex flex-col justify-between">
            <div className="">
              <Title titleText="Fruits" />
              <Heading headingText="Coconut" />
              <div className="review flex gap-2 items-center my-2">
                <div className="icons flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-[18px] text-darkBlue font-semibold">
                  5.0 (1 review)
                </span>
              </div>
              <div className="price text-[32px] font-semibold text-orange">
                $6.3/kg
              </div>
              <Para paraText="From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell." />
            </div>
            {/* ================= */}
            <div className="">
              <div className="flex items-center mb-10">
                <h3 className="mr-4">Quantity</h3>
                <span className="py-2 px-4 border border-[#D9D9D9">-</span>
                <span className="py-2 px-4 border border-[#D9D9D9">1</span>
                <span className="py-2 px-4 border border-[#D9D9D9">-</span>
                <p className="font-bold ml-2">/kg</p>
              </div>
              <div className="btn flex gap-[28px]">
                <button className="favorite py-5 px-[51px] rounded-lg bg-orange hover:bg-[#F4F6F6] flex items-center gap-[10px] hover:text-fontColor text-white text-[18px] font-semibold group transition-all duration-300">
                  <FaHeart className="text-white group-hover:text-[#D9D9D9]" />
                  Save as favorite
                </button>
                <button className="favorite py-5 px-[51px] rounded-lg bg-orange hover:bg-[#F4F6F6] flex items-center gap-[10px] hover:text-fontColor text-white text-[18px] font-semibold group transition-all duration-300">
                  <FaShoppingCart className="text-white group-hover:text-[#D9D9D9]" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
