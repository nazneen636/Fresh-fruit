import Link from "next/link";
import React from "react";

const ComBtn = ({ ComBtnText, className, href }) => {
  return (
    <Link
      href={href}
      className={`text-[18px] font-semibold bg-orange py-3 px-6 text-white w-fit rounded-lg ${className}`}
    >
      {ComBtnText}
    </Link>
  );
};

export default ComBtn;
