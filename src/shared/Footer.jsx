import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#E5E5E5] pt-32 py-20 px-5">
      <div className="container grid  gap-6 grid-cols-2 lg:grid-cols-6 mx-auto">
        <div className="space-y-2 col-span-2">
          <button className="font-anton tracking-wider  text-2xl">
            SHOP.CO
          </button>

          <p className="text-black/70 max-w-[300px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <div className="flex gap-2 items-center">
            <div className="bg-white w-8 h-8 flex justify-center items-center border-2  border-[#CCCCCC] rounded-full p-1">
              <FaTwitter />
            </div>

            <FaFacebook className="w-7 h-7" />
            <div className="bg-white w-8 h-8 flex justify-center items-center border-2  border-[#CCCCCC] rounded-full p-1">
              <FaInstagram />
            </div>
            <div className="bg-white w-8 h-8 flex justify-center items-center border-2  border-[#CCCCCC] rounded-full p-1">
              <FaGithub />
            </div>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-black font-semibold">Company </h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>About </li>
            <li>Features </li>
            <li>work</li>
            <li>Carrer</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-black font-semibold">Company </h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>About </li>
            <li>Features </li>
            <li>work</li>
            <li>Carrer</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-black font-semibold">Company </h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>About </li>
            <li>Features </li>
            <li>work</li>
            <li>Carrer</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-black font-semibold">Company </h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>About </li>
            <li>Features </li>
            <li>work</li>
            <li>Carrer</li>
          </ul>
        </div>
      </div>
      <hr className="mt-5 text-[#cccccc]" />
     <div className="flex flex-col lg:flex-row mt-5 justify-between items-center">
         <p className="">Shop.co © 2000-2023, All Rights Reserved</p>
         <img src="/footer-payment-card.png" alt="" />
     </div>
    </footer>
  );
};

export default Footer;
