import React from "react";

const Para = ({ paraText, className }) => {
  return (
    <div>
      <p
        className={`text-[14px] leading-6 md:text-sm md:leading-6 tracking-[-0.02em] max-w-[448px] ${className}`}
      >
        {paraText}
      </p>
    </div>
  );
};

export default Para;
