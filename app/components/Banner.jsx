import React from "react";
import Container from "../layers/Container";
import Link from "next/link";
import Image from "next/image";
import girl from "../../public/girl.png";
import man from "../../public/man.png";
import specialOffer from "../../public/specialOffer.png";
import resSpecialOffer from "../../public/ResSpecial Offer.png";
import apple from "../../public/appleIcon.png";
import play from "../../public/playstore.png";
import leafLeft1 from "../../public/leafLeft1.png";
import leafLeft2 from "../../public/leafLeft2.png";
import leafLeft3 from "../../public/leafLeft3.png";
import leafRight1 from "../../public/leafRight1.png";
import leafRight2 from "../../public/leafRight2.png";
import leafRight3 from "../../public/leafRight3.png";
import Btn from "../layers/Btn";

const Banner = () => {
  return (
    <div className="" id="#">
      <div className="bg-green h-full md:h-[770px] w-[501px] absolute md:right-0 md:top-[160px] top-[30px] right-[-395px]"></div>
      {/* <Image src={leafLeft1} alt="leaf" className="absolute left-0 top-0" />
      <Image src={leafLeft2} alt="leaf" />
      <Image src={leafLeft3} alt="leaf" /> */}
      <Container>
        <div className="flex pt-[70px] md:pt-[78px] relative px-2 md:px-0">
          <div className="left">
            <p className="rubik font-medium text-sm md:text-xl text-green bg-[#759b3f29] rounded-lg py-1 px-3 shadow-lg shadow-[#0000003b] mb-4 w-fit">
              Welcome to Fresh Harvest
            </p>
            <h1 className="rubik font-[600] text-[46px]  md:text-[80px] text-darkBlue tracking-[-0.02em] max-w-[345px] md:max-w-[660px] leading-[110%] mb-4">
              Fresh Fruits and Vegetables
            </h1>
            <p className="text-[12px] leading-[18px] md:text-sm md:leading-6 tracking-[-0.02em] font-questrial max-w-[448px] mb-8">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </p>
            <Link
              href="/"
              className="rubik font-semibold text-white py-4 px-8 text-[18px] bg-orange rounded-lg"
            >
              Shop Now
            </Link>
            <Btn className="mt-[151px] md:mt-[187px] " />
          </div>
          {/* ================ */}
          <div className="right">
            <Image
              alt="banner"
              src={girl}
              className="absolute md:right-[-26px] md:bottom-[-19%] bottom-[-72px] right-[-134px] z-20"
            />
            <Image
              alt="banner"
              src={man}
              className="md:block hidden absolute left-[28%] bottom-[-29%] z-10"
            />
            <Image
              alt="banner"
              src={specialOffer}
              className="md:block hidden absolute left-[128px] bottom-[100px]"
            />
            <Image
              alt="banner"
              src={resSpecialOffer}
              className="block md:hidden absolute left-[20px] bottom-[110px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
