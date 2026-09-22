import React from "react";

const DressStyle = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="rounded-2xl p-5 lg:p-10 bg-gray-200">
        <h2 className="text-5xl font-anton text-center uppercase">
          BROWSE BY dress STYLE
        </h2>

        <div className="mt-10 grid gap-5 grid-cols-1  lg:grid-cols-[3fr_2fr_3fr]">
          <div className="relative overflow-hidden  h-[220px] lg:h-[280px] rounded-2xl p-4 md:p-6">
            <h2 className="text-2xl  relative z-[999] font-semibold">Casual</h2>

            <img className="absolute -top-[85px] lg:-top-[125px] -right-[80px] lg:-right-[180px] min-w-[200%]" src="/dress-style/casual-3.png" alt="" />
          </div>
          <div className="bg-[url(/dress-style/formal.png)] bg-white h-[220px] lg:h-[280px] bg-right bg-no-repeat rounded-2xl p-4 md:p-6 col-span-2">
            <h2 className="font-semibold text-2xl ">Formal</h2>
          </div>
          <div className="bg-[url(/dress-style/party.png)] col-span-2 bg-white h-[220px] lg:h-[280px] bg-right bg-no-repeat rounded-2xl p-4 md:p-6">
            <h2 className="font-semibold text-2xl ">Party</h2>
          </div>
          <div className="bg-[url(/dress-style/gym.png)] bg-white h-[220px] lg:h-[280px] bg-right bg-no-repeat rounded-2xl p-4 md:p-6">
            <h2 className="font-semibold text-2xl  ">Gym</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
