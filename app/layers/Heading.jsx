import React from "react";

const Heading = ({ headingText, className }) => {
  return (
    <div
      className={` text-[47px] font-[600] text-darkBlue tracking-[-0.02em] ${className}`}
    >
      {headingText}
    </div>
  );
};

export default Heading;
