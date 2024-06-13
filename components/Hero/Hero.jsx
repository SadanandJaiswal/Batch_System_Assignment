// import Image from "next/image";
// import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/solid';
import { FaArrowRight } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="flex min-h-screen px-[7%]">
      <div className="relative w-1/2">
        <div className='pl-[5%] pt-24'>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold  text-black mb-3">
            Make The Best Financial Decisions
          </h1>
          <p className="text-gray-400 mb-4">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className='flex'>
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
        <div className='w-[90%]'>
          <img
            src="/assets/hero_zigzag.png" 
            alt="logo"
            className="object-contain"
          />
        </div>
        
      </div>
      <div className="w-1/2">
        <img
          src="/assets/hero_3iphone.png"
          alt="logo"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
