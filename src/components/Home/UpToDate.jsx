import React from "react";
import { IoMailOutline } from "react-icons/io5";

const UpToDate = () => {
  return (
    <div className="px-5 -mb-20 relative mt-20 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between p-8 lg:p-10 rounded-xl text-white bg-black">
        <h2 className=" text-[46px] lg:text-5xl font-anton uppercase">STAY UPTO DATE ABOUT <br className="hidden lg:block"  /> OUR LATEST OFFERS</h2>

        <div className="space-y-2 mt-5 lg:mt-0">
          <div className="bg-white w-full lg:w-64 flex  gap-2 items-center  text-black px-5 py-2 rounded-full">
            <IoMailOutline className="text-lg  shrink-0" />
            <input type="text" 
            className="focus:outline-0"
             placeholder="Enter Your Email Address"
            />
          </div>

          <button className="bg-white w-full lg:w-64 text-black px-5 py-2 rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpToDate;
