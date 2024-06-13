"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-[10%] py-[30px]  relative">
      <div className="flex">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-4 w-120">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={120}
              height={35}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-3 md:gap-5 items-center font-bold">
          <a href="#" className="text-red-500 p-1 hoverNav">
            Home
          </a>
          <a href="#" className="p-1 hoverNav">
            About Us
          </a>
          <a href="#" className="p-1 hoverNav">
            Pricing
          </a>
          <a href="#" className="p-1 hoverNav">
            Features
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <button className="w-180 bg-black text-white px-8 py-3 rounded">
          Download
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute px-[10%] top-[70px] left-0 w-full bg-white shadow-md flex flex-col gap-3 py-4 z-20">
          <a href="#" className="text-red-500 p-1 hoverNav">
            Home
          </a>
          <a href="#" className="p-1 hoverNav">
            About Us
          </a>
          <a href="#" className="p-1 hoverNav">
            Pricing
          </a>
          <a href="#" className="p-1 hoverNav">
            Features
          </a>
          <button className="w-180 bg-black text-white px-8 py-3 rounded mt-4">
            Download
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
