import React from "react";
import FeatureListElm from "../../element/FeatureListElm";
import ImageContainer from "../../element/ImageContainer";
import staticData from "../../public/data.json";

const Features = () => {
  const data = staticData.features;
  return (
    <div className="relative flex flex-col-reverse  md:flex-row px-[7%] overflow-x-hidden">
      <ImageContainer imageName={"features"} />
      <div className="relative flex flex-col justify-center item-center w-full md:w-1/2 ">
        <h1 className="text-red-500 mb-1 font-bold">F E A T U R E S</h1>
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold  text-black mb-6">
          Uifry Premium
        </h1>
        {data.map((item, index) => {
          return (
            <div className="" key={index * 123}>
              <FeatureListElm
                key={index}
                heading={item.heading}
                desc={item.description}
                icon={item.icon}
              />
            </div>
          );
        })}

        <div className="absolute top-[15%] right-[-40%] -z-9">
          <img src="/assets/blur.svg" alt="blur" width={"350px"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
