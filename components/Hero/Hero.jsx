// import Image from "next/image";
// import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/solid';
import { FaArrowRight } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="flex min-h-screen px-[7%]  pb-6">
      <div className=" pr-5 relative w-[60%] mb-6">
        <div className='pl-[5%] pt-24'>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold  text-black mb-3">
            Make The Best Financial Decisions
          </h1>
          <p className="text-gray-400 my-6">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className='flex mt-8'>
            <button className="flex items-center px-4 py-3 bg-black text-white font-bold rounded shadow-lg">
              Get Started 
              <FaArrowRight className="ml-2" />
            </button>
            <button className="flex items-center px-4 py-3 font-bold rounded ">
              <MdPlayArrow className="mr-2 " />
              Watch Video
            </button>
          </div>
          <div className="absolute top-0 left-1/4 -z-10">
            <img
              src="/assets/blur.svg" 
              alt="blur"
            />
          </div>
        </div>
        <div className='w-[80%] mt-5'>
          <img
            src="/assets/hero_zigzag.png" 
            alt="logo"
            className="object-contain"
          />
        </div>
        
      </div>
      <div className=" w-[40%]  ">
        <img
          src="/assets/hero_3iphone.png"
          alt="logo"
          className="transform scale-[140%] ml-[10%] mt-[15%]"
        />
      </div>
    </div>
  );
};

export default Hero;
