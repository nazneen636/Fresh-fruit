"use client";
import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import Login from "./Login";

const menuItem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About us",
    link: "#about",
  },
  {
    name: "Blog",
    link: "#blog",
  },
];

const Navbar = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  let items = useSelector((state) => state.counter.cart);
  console.log(items.length);

  const pathname = usePathname();
  let [show, setShow] = useState(false);

  useEffect(() => {
    function size() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    size();

    window.addEventListener("resize", size);
  }, []);

  return (
    <div className="md:sticky z-[1000] left-0 top-0 w-full md:bg-white">
      <Container className="relative z-50 flex items-center justify-between py-[30px] md:px-0 px-2">
        {/* =================logo========== */}
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        {/* =================menu========== */}
        <div
          className={`absolute md:static top-[12%] left-0 duration-300 transition-all bg-[#d37441] md:bg-transparent w-full md:w-auto p-2 md:p-0 ${
            show
              ? "opacity-100 visible left-0"
              : "opacity-0 invisible left-[-100px]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center gap-5 md:gap-16">
            {menuItem.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`font-questrial text-customWhite md:text-fontColor text-sm tracking-[-0.02em] relative after:absolute after:h-[3px]  after:bg-green after:left-1/2 after:top-[120%] after:-translate-x-1/2 after:rounded-full hover:after:w-[14px] hover:text-darkBlue md:hover:text-fontColor after:duration-300 after:transition-all duration-300 transition-all ${
                    pathname === item.link
                      ? "text-darkBlue md:after:w-[14px]"
                      : "text-customWhite  md:after:w-0"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:hidden gap-4">
            <button
              onClick={openPopUp}
              className="rubik font-semibold text-sm tracking-[-0.02em]  py-2  hover:text-customWhite px-6 rounded bg-white hover:bg-transparent border border-transparent hover:border-darkBlue text-fontColor duration-300 transition-all mt-4 w-28 text-center"
            >
              Sign in
            </button>
            {isPopUpOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
                <Login closePopUp={closePopUp} />
              </div>
            )}
          </div>
        </div>
        {/* =================menu========== */}

        {/* =================btn========== */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="flex gap-2 items-center">
            <FaHeart className="text-green text-base" />
            <span className="font-questrial text-sm tracking-[-0.02em] leading-6 text-darkBlue">
              Favorites
            </span>
          </Link>
          <Link href="/" className="flex gap-2 items-center relative">
            <IoMdCart className="text-green text-xl" />
            <span className="font-questrial text-sm tracking-[-0.02em] leading-6 text-darkBlue">
              Cart
            </span>
            <span className="absolute left-2 top-[-6px] w-4 h-4 text-[10px] bg-red border border-[#EDEDED] rounded-full flex items-center justify-center text-customWhite">
              {items.length}
            </span>
          </Link>
          <button
            onClick={openPopUp}
            className="rubik font-semibold text-sm tracking-[-0.02em] text-darkBlue py-3 px-6 rounded border border-darkBlue ml-1"
          >
            Sign in
          </button>
          {isPopUpOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
              <Login closePopUp={closePopUp} />
            </div>
          )}
        </div>
        {/* =================btn========== */}
        <div className="md:hidden flex gap-5">
          <div className="flex gap-2">
            <Link href="/" className="flex gap-2 items-center">
              <FaHeart className="text-white text-base" />
            </Link>
            <Link
              href="/productdetails"
              className="flex gap-2 items-center relative mr-2"
            >
              <IoMdCart className="text-white text-xl" />
              <span className="absolute left-2 top-[-6px] w-4 h-4 text-[10px] bg-red border border-[#EDEDED] rounded-full flex items-center justify-center text-customWhite">
                {items.length}
              </span>
            </Link>
          </div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="block md:hidden"
          >
            <FaBars
              className={`absolute text-xl top-[37px] right-2 text-white duration-500 transition-all ${
                show ? "opacity-0 invisible rotate-45" : "opacity-100 visible"
              }`}
            />
            <IoMdClose
              className={`absolute text-2xl  top-[37px] right-2 text-white duration-500 transition-all ${
                show ? "opacity-100 visible" : "opacity-0 invisible -rotate-45"
              }`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
