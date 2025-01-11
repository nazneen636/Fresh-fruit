import React from "react";
import Link from "next/link";
import Image from "next/image";
import apple from "../../public/appleIcon.png";
import play from "../../public/playstore.png";

const Btn = ({ className }) => {
  return (
    <div className={`${className}`}>
      <p className="text-sm font-questrial leading-6 mb-3">Download App:</p>
      <div className="btn flex gap-5 relative z-30 ">
        <Link
          href="/"
          className="flex gap-[10px] items-center justify-center rounded-lg bg-black py-2 px-5 text-white"
        >
          <Image src={apple} alt="apple" className="" />
          <div className="flex flex-col">
            <span className="text-[10px]">Download on the</span>
            <span className="font-semibold text-sm">App Store</span>
          </div>
        </Link>
        <Link
          href="/"
          className="flex gap-[10px] items-center justify-center rounded-lg bg-black px-5 text-white"
        >
          <Image src={play} alt="apple" className="" />
          <div className="flex flex-col">
            <span className="uppercase text-[10px]">Get it on</span>
            <span className="font-semibold text-sm">Google Play</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Btn;
