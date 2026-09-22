import { productsData } from "@/Data/products";
import ProductCard from "@/shared/ProductCard";
import React from "react";
import { IoIosArrowDown, IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const ProductList = () => {
  return (
    <div className="px-4">
      <div className="flex  justify-between  items-center">
        <h2 className="text-3xl font-semibold">Casual</h2>
        <div className="flex  gap-4">
          <p className="hidden lg:block text-black/70">
            Showing 1 - 9 of 100 Products
          </p>

          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
               sort By : Most Popular <IoIosArrowDown/> 
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Most Popular</a>
                </li>
                <li>
                  <a>Price (Highest)</a>
                </li>
                <li>
                  <a>Price (Lowest)</a>
                </li>
                <li>
                  <a>Highest Ratingss</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {productsData?.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <button className=" flex items-center btn btn-outline">
          <IoMdArrowRoundBack /> <span className="hidden md:block">Previous</span>
        </button>

        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>

        <button className=" btn btn-outline">
          {" "}
         <span className="hidden md:block">Next</span><IoMdArrowRoundForward />{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
