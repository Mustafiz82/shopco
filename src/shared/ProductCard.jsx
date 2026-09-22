"use client";
import Link from "next/link";
import React from "react";
import { Rating } from "react-simple-star-rating";

const ProductCard = ({ item }) => {
  return (
    <Link href={"/products/1"}>
      <div>
        <img className="w-full" src={item.imageUrl} alt="" />
        <h2>{item.name}</h2>
        <div className="flex mt-2 items-end">
          <Rating
            readonly
            initialValue={item.rating}
            allowFraction={true}
            size={22}
          />
          <span>{item.rating}/5</span>
        </div>
        <div className="flex items-start">
          <h3 className="font-semibold text-xl lg:text-2xl mt-2">
            ${item.price}{" "}
            {item?.originalPrice && (
              <span className="text-black/60 line-through">
                ${item.originalPrice}
              </span>
            )}
          </h3>
          {item?.discount && (
            <span className="bg-red-500/15 text-xs text-red-600 rounded-full px-2 py-1">
              {item.discount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
