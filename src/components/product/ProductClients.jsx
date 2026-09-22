"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const ProductClients = () => {
  const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

   
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <div className="container my-10  mx-auto">
      <div className="flex gap-5">
        <div
          className={`${isOpen ? "left-0" : "-left-full"} duration-300  w-[300px]  fixed lg:static h-full overflow-auto bg-white top-0 !z-[999] lg:w-1/4`}
        >
          
            <Filter />
          {/* </div> */}
        </div>
       {
        isOpen &&  <div
          onClick={() => setIsOpen(false)}
          className="inset-0 bg-black/50 z-[99] fixed "
        ></div>
       }
        <div className="w-full lg:w-3/4">
          <ProductList />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn lg:hidden z-[999] fixed bottom-10 right-10 btn-neutral"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProductClients;
