"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import ReviewCard from "./ReviewCard";
import { reviewData } from "@/Data/review";
import { reviews } from "@/Data/ratingData";
import ProductSection from "@/shared/productSection";
import { topSelling } from "@/Data/topSelling";
import UpToDate from "../Home/UpToDate";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/productDetails/image 1.png",
  );

  const [selectedColor, setSelectedColor] = useState("#2D4944");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("Latest");

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
    <div className="container px-4 py-10 mx-auto">
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-start">
          <div className="space-y-4  flex w-fit overflow-auto gap-4 md:flex-col">
            <Image
              src="/productDetails/image 1.png"
              width={130}
              height={130}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 1.png")}
              className="w-[130px]  h-[130px]"
            />
            <Image
              src="/productDetails/image 5.png"
              width={130}
              height={130}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 5.png")}
                 className="w-[130px] h-[130px]"
            />
            <Image
              src="/productDetails/image 6.png"
              width={130}
              height={130}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 6.png")}
                 className="w-[130px] h-[130px] object-cover"
            />
            
          </div>

          <div className="w-full md:flex-1 md:min-w-[480px] aspect-square  relative">
            <Image
              src={selectedImage}
              alt=""
              layout="fill"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* right side  */}
        <div className="space-y-5 lg:space-y-3">
          <h1 className="text-3xl font-syne font-bold">
            One Life Graphic <br className="md:hidden" /> T-shirt
          </h1>

          <Rating readonly initialValue={4.5} allowFraction={true} size={22} />
          <span>{4.5}/5</span>

          <div className="flex gap-3">
            <p className="font-semibold text-3xl">$250</p>
            <p className="font-semibold text-3xl text-black/50 line-through">
              $300
            </p>
            <p className="bg-red-100 text-xl text-red-500 px-4 py-1 rounded-full">
              -40%
            </p>
          </div>

          <p className="text-black/70">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <hr className="text-black/40" />

          <p>Select Colors</p>

          <div className="flex gap-3">
            {["#2D4944", "#4E4530", "#2D2F48"].map((item) => (
              <div
                onClick={() => setSelectedColor(item)}
                style={{backgroundColor : item}}
                className={`w-10 flex justify-center items-center h-10  rounded-full`}
              >
                {selectedColor == item && <FaCheck className="text-white " />}
              </div>
            ))}
          </div>

          <p>Choose Size</p>

          <div className="flex gap-4">
            {["Small", "Medium", "Large", "X-Large"].map((item) => (
              <p
                onClick={() => setSelectedSize(item)}
                className={`${selectedSize == item ? "bg-black text-white" : " bg-base-300"} p-3 px-4 rounded-full`}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex gap-5">
            <div className="w-[150px] px-5 py-2 flex justify-between items-center rounded-full bg-base-300">
              <FaMinus onClick={() => handleChangeQuantity("-")} />
              <span>{selectedQuantity}</span>
              <FaPlus onClick={() => handleChangeQuantity("+")} />
            </div>
            <button className="px-5 py-2 bg-black text-white flex-1 rounded-full">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
 
      <div className="mt-10 flex justify-between">
        <h2 className="text-lg font-semibold ">All Reviews (120)</h2>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="bg-base-300 px-4 py-2 rounded-full">
            {selectedReviewFilter} <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
          >
            {["Latest", "High", "Low"].map((item) => (
              <li onClick={() => setSelectedReviewFilter(item)}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>


      </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

            {
                reviews?.map(item =>   <ReviewCard item={item}/>)
            }
          
        </div>


    <div className="flex justify-center my-8">
            <button className="btn btn-outline rounded-full">Load More Reviews</button>
        </div>



      <ProductSection title={"You Might Also Like"}
        productData={topSelling}
        /> 

      
    </div>
  );
};

export default ProductDetails;
