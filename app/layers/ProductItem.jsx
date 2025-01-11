import Image from "next/image";
import React from "react";
import img from "../../public/coconut.png";

const ProductItem = ({
  productTitle,
  productImg,
  productPrice,
  onAddToCart,
}) => {
  return (
    <div className="w-[161px] md:w-[282px] h-[230px] md:h-[360px] rounded-[20px] py-[10px] px-3 cursor-pointer flex items-center justify-center flex-col shadow-lg shadow-[#092b5e1b]">
      <div className="productImg w-[149px] h-[120px] md:w-[258px] md:h-[208px] bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
        <Image
          src={productImg}
          width={258}
          height={208}
          className="object-contain w-[80%] h-[80%]  md:w-auto md:h-auto"
          alt="product"
        />
      </div>
      <h3 className="md:mt-3 md:mb-2 text-[18px] font-[600] text-darkBlue ">
        {productTitle}
      </h3>
      <span className="text-[18px] leading-6 mb-3">{productPrice}</span>
      <button
        className="text-[18px] bg-orange rounded-lg text-white py-2 md:py-3 w-full text-center md:mb-[10px]"
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
