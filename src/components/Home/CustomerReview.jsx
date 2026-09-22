"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { reviewData } from "@/Data/review";
import { FaArrowLeftLong } from "react-icons/fa6";

const SwiperChild = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()} className="absolute top-0 z-50 right-12 text-xl">
        <FaArrowLeftLong />
      </button>
      <button onClick={() => swiper.slideNext()} className="absolute top-0 z-50 right-0 text-xl ">
        <FaArrowLeftLong className="rotate-180" />
      </button>
    </div>
  );
};

const CustomerReview = () => {
  return (
    <div className="container mt-10 mx-auto p-5">
      <h2 className="text-5xl font-anton -mb-8 relative z-[999] max-w-[600px]  uppercase">Our Happy Customers</h2>

      <Swiper
       
        breakpoints={{
          620 : {
            slidesPerView : 1
          }, 
          1024 : {
             slidesPerView : 3
          }
        }}

        spaceBetween={30}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay : 2000
        }}
        className="mySwiper"
      >
        {reviewData.map((item) => (
          <SwiperSlide>
            {" "}
            <div className="p-5 border border-black/50 rounded-2xl mt-10">
              <Rating
                readonly
                initialValue={5}
                allowFraction={true}
                size={22}
              />

              <h2 className="text-xl my-3 font-semibold  flex  gap-2">
                Sarah M. <img src="/tikmark.svg" alt="" />
              </h2>

              <p className="text-black/70">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </SwiperSlide>
        ))}

        <SwiperChild/>
      </Swiper>
    </div>
  );
};

export default CustomerReview;
