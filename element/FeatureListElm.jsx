import React from "react";

const FeatureListElm = ({ heading, desc, icon, size = "xl" }) => {
  return (
    <div className="flex flex-col  mb-6">
      <div className="flex flex-row item-center mb-3">
        <img src={`/assets/${icon}`} alt="logo" className="mr-2  " />
        <h1
          className={`flex items-center justify-center text-${size} font-bold  text-black `}
        >
          {heading}
        </h1>
      </div>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

export default FeatureListElm;
