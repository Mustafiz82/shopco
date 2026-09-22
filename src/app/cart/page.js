"use client";
import { newArrivalData } from "@/Data/newArrivals";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaTicket,
  FaTrash,
} from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";

const page = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();


  console.log(session);

  const handleChangeQuantity = (symbol) => {
    const newQuantity =
      symbol == "-"
        ? selectedQuantity > 1
          ? selectedQuantity - 1
          : 1
        : selectedQuantity + 1;
    setSelectedQuantity(newQuantity);
  };
  return (
    <div className="container px-4 mx-auto py-14">
      <h2 className="text-4xl lg:text-5xl font-anton ">Your Cart</h2>

      <div className="flex flex-col lg:flex-row items-start gap-5 py-5">
        <div className="border w-full lg:w-[60%] p-5 pt-0 rounded-xl border-black/40">
          {newArrivalData?.map((item, index) => (
            <div
              className={`flex mt-5 ${newArrivalData.length - 1 != index && "border-b pb-5"} border-black/40  relative gap-4`}
            >
              <img className="w-24 h-auto" src={item.imageUrl} alt="" />

              <div className="flex w-full items-end justify-between">
                <div className="w-full">
                  <h2 className="text-lg md:text-2xl font-semibold">
                    {item?.name}
                  </h2>
                  <p>
                    Size : <span className="text-black/70">Large</span>
                  </p>
                  <p>
                    Color : <span className="text-black/70">White</span>
                  </p>

                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">${item.price}</h3>

                    <div className="w-[150px] px-5 py-2 flex justify-between items-center rounded-full bg-base-300">
                      <FaMinus onClick={() => handleChangeQuantity("-")} />
                      <span>{selectedQuantity}</span>
                      <FaPlus onClick={() => handleChangeQuantity("+")} />
                    </div>
                  </div>
                </div>
              </div>

              <FaTrash className="absolute right-0 top-0 text-red-500" />
            </div>
          ))}
        </div>

        <div className="border w-full max-w-full lg:max-w-[40%] p-5 space-y-3 border-black/40 rounded-xl">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="flex  justify-between">
            <span className="text-black/60">Subtotal </span>
            <span className="text-black font-semibold text-xl">$565 </span>
          </div>
          <div className="flex  justify-between">
            <span className="text-black/60 ">Discount (-20%) </span>
            <span className="text-black font-semibold text-xl text-red-500">
              -$113{" "}
            </span>
          </div>
          <div className="flex  justify-between">
            <span className="text-black/60">Delivery Fee </span>
            <span className="text-black font-semibold text-xl">$15 </span>
          </div>
          <hr className="text-black/40" />
          <div className="flex  justify-between">
            <span className="text-black">Total </span>
            <span className="text-black font-semibold text-2xl">$175 </span>
          </div>

          <div className="flex gap-3">
            <div className="flex lg:flex-1  py-3 px-3 md:px-4 text-base md:text-lg items-center gap-2 bg-base-300 rounded-full">
              <IoPricetagOutline className="-rotate-90" />
              <input
                className="focus:outline-0"
                type="text"
                placeholder="Add Promo Code"
              />
            </div>
            <button className="px-5 md:px-8 py-2 bg-black text-white  rounded-full">
              Apply
            </button>
          </div>
          <button className="px-8 py-3 w-full bg-black text-white  rounded-full">
            Go To Checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
