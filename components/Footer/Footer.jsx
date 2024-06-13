import React from "react";

const links = [
  {
    heading: "Links",
    links: ["Home", "About Us", "Bookings", "Blog"],
  },
  {
    heading: "Legal",
    links: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
  },
  {
    heading: "Product",
    links: ["Take Tour", "Live Chat", "Reviews"],
  },
];

const Footer = () => {
  return (
    <div className="flex px-[10%] flex-col justify-center item-center mt-10 pt-10 ">
      <div className="flex flex-col flex-wrap sm:flex-row justify-between mb-5">
        <div className="flex flex-col">
          <div className="max-h-20 mb-4">
            <img src="/assets/logo.png" alt="logo" />
          </div>
          <div className="flex items-center mb-4">
            <img src="/assets/msgIcon.svg" alt="icon" className="mr-2" />
            Help@Frybix.Com
          </div>
          <div className="flex items-center mb-4">
            <img src="/assets/callIcon.svg" alt="icon" className="mr-2" />
            +91 99999 99999
          </div>
        </div>
        {links.map((item, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <h1 className="text-2xl font-bold mb-4">{item.heading}</h1>
              <div className="flex flex-col">
                {item.links.map((link, index) => {
                  return (
                    <p className="mb-2" key={index * 2}>
                      {link}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Newsletter</h1>
          <p className="mb-2">Stay Up To Date</p>
          <div className="flex">
            <input
              type="text"
              className="border p-2 "
              placeholder="Your Email"
            />
            {/* <button className="flex items-center px-4 py-3 bg-black text-white font-bold rounded shadow-lg">
                    Get Started 
                  </button> */}
            <button className="flex items-center px-4 py-3 font-bold rounded bg-black text-white">
              Watch Video
            </button>
          </div>
        </div>
      </div>
      <hr className="h-1" />
      <div className="flex justify-center items-center py-5">
        Copyright2022 Uifry.Com All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
