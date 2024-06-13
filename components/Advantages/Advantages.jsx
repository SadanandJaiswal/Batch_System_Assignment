import React from "react";
import FeatureListElm from "../../element/FeatureListElm";
import ImageContainer from "../../element/ImageContainer";
import staticData from "../../public/data.json";

const Advantages = () => {
  const data = staticData.advantages;
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col md:flex-row px-[7%] overflow-x-hidden">
        <div className="flex flex-col justify-center item-center w-full md:w-[50%] pl-[3%] ">
          <h1 className="text-red-500 mb-1 font-bold">A D V A N T A G E S</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold  text-black mb-8">
            Why Chose Uifry?
          </h1>
          <FeatureListElm
            key={"index"}
            heading={data[0].heading}
            desc={data[0].description}
            icon={data[0].icon}
            size="3xl"
          />
        </div>
        <ImageContainer imageName={"clever_notification"} />
      </div>
      <div className=" flex flex-col md:flex-row-reverse  px-[7%] overflow-x-hidden">
        <div className="flex flex-col justify-center item-center w-full md:w-[50%] pl-[1%] pr-[2%] ">
          {/* <h1 className="text-red-500 mb-1 font-bold">A D V A N T A G E S</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold  text-black mb-8">
              Why Chose Uifry?
          </h1> */}
          <FeatureListElm
            key={"index"}
            heading={data[0].heading}
            desc={data[0].description}
            icon={data[0].icon}
            size="3xl"
          />
        </div>
        <ImageContainer imageName={"full_customizable"} />
      </div>
    </div>
  );
};

export default Advantages;
