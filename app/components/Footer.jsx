import React from "react";
import Container from "../layers/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import visa from "../../public/Visa.png";
import paypal from "../../public/Paypal.jpg";
import applePay from "../../public/ApplePay.jpg";
import Btn from "../layers/Btn";

const Footer = () => {
  return (
    <div className="bg-[#F4F6F6] pt-10 mt-10 md:mt-[300px]">
      <Container className="">
        <div className="top pb-8 flex md:flex-row flex-col justify-between border-b border-[#D9D9D9]">
          <div className="left mb-8">
            <Link href="/">
              <Image src={logo} />
            </Link>
            <Btn className="mt-[113px] md:block hidden" />
          </div>
          <div className="right">
            <div className="menu flex gap-5 md:gap-[140px] text-nowrap">
              <div className="menu1">
                <h3 className="mb-1 font-semibold text-[10px] md:text-[18px] rubik text-darkBlue">
                  Quick links 1
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/" className="normal">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Detail Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu2">
                <h3 className="mb-1 font-semibold text-[12px] md:text-[18px] rubik text-darkBlue">
                  Quick links 2
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/" className="normal">
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="normal">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu3">
                <h3 className="mb-1 font-semibold text-[12px] md:text-[18px] rubik text-darkBlue">
                  Contact us
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="callto:1234 5678 90"
                      className="normal flex gap-1 items-center "
                    >
                      <MdOutlineLocalPhone className="text-green text-base" />
                      1234 5678 90
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:Freshharvests@gmail.com"
                      className="normal flex gap-1 items-center"
                    >
                      <MdMailOutline className="text-green text-base" />
                      Freshharvests@gmail.com
                    </Link>
                  </li>
                  <li>
                    <p className="normal flex gap-1 items-center text-wrap">
                      <IoLocationOutline className="text-green text-base " />
                      Tanjung Sari Street, Pontianak, Indonesia
                    </p>
                  </li>
                </ul>
                <div className="payment md:block hidden">
                  <h3 className="mt-[30px] font-semibold text-darkBlue text-sm">
                    Accepted Payment Methods:
                  </h3>
                  <div className="flex gap-[10px] mt-3">
                    <Link href="/">
                      <Image src={visa} alt="visa" />
                    </Link>
                    <Link href="/">
                      <Image src={paypal} alt="visa" />
                    </Link>
                    <Link href="/">
                      <Image src={applePay} alt="visa" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment md:hidden block">
            <h3 className="mt-[30px] font-semibold text-darkBlue text-sm">
              Accepted Payment Methods:
            </h3>
            <div className="flex gap-[10px] mt-3">
              <Link href="/">
                <Image src={visa} alt="visa" />
              </Link>
              <Link href="/">
                <Image src={paypal} alt="visa" />
              </Link>
              <Link href="/">
                <Image src={applePay} alt="visa" />
              </Link>
            </div>
          </div>
          <Btn className="md:hidden block mt-5" />
        </div>

        <div className="bottom text-[10px] md:text-xs py-5 font-semibold text-darkBlue">
          © Copyright 2024, All Rights Reserved by Banana Studio
        </div>
      </Container>
    </div>
  );
};

export default Footer;
