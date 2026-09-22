import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({item}) => {

    console.log(item);
  return (
    <div className="p-5 space-y-2 border border-black/50 rounded-xl">
      <Rating readonly initialValue={item.rating} allowFraction={true} size={22} />

      <h3 className="flex items-center gap-2">{item.name} <span className="bg-green-600 w-4 h-4 text-white p-1 rounded-full text-xs flex justify-center items-center"><FaCheck/></span> </h3>

      <p className="text-black/70">&quot;{item?.comment}&quot;</p>

      <p className="text-black/70">Posted on {item?.date}</p>
    </div>
  );
};

export default ReviewCard;
