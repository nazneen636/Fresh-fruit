import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1200px] px-2 md:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
