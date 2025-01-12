import React from "react";
import Title from "../layers/Title";
import Heading from "../layers/Heading";
import Para from "../layers/Para";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import Image from "next/image";
import Container from "../layers/Container";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const blogItem = [
  {
    image: blog1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    date: "May 23, 2024",
  },
  {
    image: blog2,
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    date: "May 23, 2024",
  },
  {
    image: blog3,
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
  },
];

const Blog = () => {
  return (
    <div id="#blog">
      <Container className="pt-20 md:pt-10">
        <div className="flex items-center justify-center flex-col mb-4">
          <Title titleText="Our Blog" />
          <Heading headingText="Fresh Harvest Blog" />
          <Para
            className="text-center mt-1"
            paraText="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {blogItem.map((item, index) => (
            <div key={index} className="w-[384px] h-[395px]">
              <div className="mb-2 md:mb-6">
                <Image src={item.image} />
              </div>
              <span className="">{item.date}</span>
              <h2 className="my-2 text-darkBlue font-semibold text-[18px]">
                {item.title}
              </h2>
              <Link href="/" className="text-red flex items-center gap-2">
                Read More
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
