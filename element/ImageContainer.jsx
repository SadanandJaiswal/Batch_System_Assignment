import React from "react";

const ImageContainer = ({ imageName }) => {
  return (
    <div className="w-full md:w-[50%] flex items-center">
      <img
        src={`/assets/${imageName}.png`}
        alt="logo"
        className="object-contain "
      />
    </div>
  );
};

export default ImageContainer;
