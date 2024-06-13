import React from "react";
import ImageContainer from "../../element/ImageContainer";
import staticData from "../../public/data.json";

const Testimonial = () => {
  const data = staticData.testimonial;
  return (
    <div className="flex  flex-col  px-[7%] overflow-x-hidden">
      <div className="flex flex-col mt-3">
        <h1 className="text-center mb-1 font-bold text-md text-gray-500 ">
          T E S T I M O N I A L
        </h1>
        <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold  text-black mb-6">
          What Our Users <br /> Say About Us?
        </h1>
      </div>
      <div className="mb-5 md:mb-10">
        <div className="flex flex-col md:flex-row mb-5 md:mb-10">
          <ImageContainer imageName={"testimonial_Picture"} />
          <div className="flex flex-col justify-center item-center w-full md:w-[50%]  pl-[2%] pr-[4%] ">
            <h1 className="font-bold text-2xl md:text-3xl my-4">{data.ques}</h1>
            <p class="text-gray-500">"{data.ans}"</p>
            <div className="flex flex-col max-w-[15rem] my-6">
              <img
                src="/assets/testimonial_profiles.png"
                alt="profilePictures"
              />
              <h1 className="font-bold text-md my-4">{data.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
