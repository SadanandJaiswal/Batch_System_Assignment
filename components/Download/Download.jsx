import React from "react";

const Download = () => {
  return (
    <div className="relative flex px-[10%] pb-10 mt-[50px]">
      <div className="flex pb-10 bg-black ">
        <div className="flex flex-col justify-center w-full sm:w-[55%] bg-black pl-[5%] py-[5%]">
          <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold  text-white mb-3">
            Ready To Get Started?
          </h1>
          <p className="text-gray-400">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex mt-4">
            <button className="flex items-center px-4 py-3 bg-white font-bold rounded shadow-lg">
              Download App
            </button>
          </div>
        </div>
        <div className="hidden flex-col justify-center w-[45%] sm:flex">
          <img
            src="/assets/downloadBG.png"
            alt="3iphone"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute top-0 left-1  -z-10 transform -translate-x-[120px] -translate-y-[170px]">
        <img src="/assets/blur.svg" alt="blur" />
      </div>
    </div>
  );
};

export default Download;
