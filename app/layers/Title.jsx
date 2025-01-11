import React from "react";

const Title = ({ titleText, className }) => {
  return (
    <div>
      <p
        className={`font-rubik font-bold text-sm md:text-xl text-green bg-[#759b3f29] rounded-lg py-1 px-3 shadow-lg shadow-[#0000003b] mb-4 w-fit ${className}`}
      >
        {titleText}
      </p>
    </div>
  );
};

export default Title;
