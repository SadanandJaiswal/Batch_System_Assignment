"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-[10%] py-[30px]">
        <div className="flex border-red-500">
          <Link href='/' className='flex items-center mr-4 w-120'>
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={120}
              height={35}
              className='object-contain'
            />
          </Link>
          
          <div className="flex gap-3 md:gap-5 items-center font-bold ">
            <a href="#" className="text-red-500 p-1 hoverNav">Home</a>
            <a href="#" className=" p-1 hoverNav">About Us</a>
            <a href="#" className=" p-1 hoverNav">Pricing</a>
            <a href="#" className=" p-1 hoverNav">Features</a>
          </div>
        </div>
        
        <div>
          <button className="w-180 bg-black text-white px-8 py-3 rounded">
            Download
          </button>
        </div>
    </nav>
  );
}

export default Navbar;
