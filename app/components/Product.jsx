"use client";
import React, { useState } from "react";
import Title from "../layers/Title";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import Para from "../layers/Para";
import Fruit from "./Fruit";
import ProductItem from "../layers/ProductItem";
import { useSelector } from "react-redux";
import AllProduct from "./AllProduct";
import Vegetable from "./Vegetable";
import Salad from "./Salad";

const Product = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderProducts = () => {
    switch (activeTab) {
      case "Fruits":
        return (
          <div className=" mt-8">
            <Fruit />
          </div>
        );
      case "Vegetables":
        return (
          <div className=" mt-8">
            <Vegetable />
          </div>
        );
      case "Salad":
        return (
          <div className=" mt-8">
            <Salad />
          </div>
        );
      default:
        return <div className=" mt-8">{<AllProduct />}</div>;
    }
  };

  return (
    <div>
      <Container className="mt-[254px]">
        <div className="flex items-center justify-center flex-col">
          <Title titleText="Our Products" />
          <Heading headingText="Our Fresh Products" />
          <Para
            className="text-center mt-1"
            paraText="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          />
        </div>
        {/* Category Tabs */}
        <div className="flex justify-center items-center mt-5">
          <ul className="flex gap-6 items-center justify-center">
            {["All", "Fruits", "Vegetables", "Salad"].map((category) => (
              <li
                key={category}
                className={`text-[18px] py-2 px-3 rounded-lg border border-[#D9D9D9] ${
                  activeTab === category
                    ? "text-white bg-green"
                    : "text-[#A6A6A6]"
                }`}
                onClick={() => setActiveTab(category)}
                style={{ cursor: "pointer" }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Render Products Based on Active Tab */}
        {renderProducts()}
      </Container>
    </div>
  );
};

export default Product;
