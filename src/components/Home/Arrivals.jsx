import ProductCard from "@/shared/ProductCard";
import React from "react";

const Arrivals = () => {
  const arrivalData = [
    {
      name: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      originalPrice: null,
      discount: null,
      imageUrl: "/product/tshirt.png",
    },
    {
      name: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      imageUrl: "/product/jeans.png",
    },
    {
      name: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      originalPrice: null,
      discount: null,
      imageUrl: "/product/tshirt.png",
    },
    {
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      imageUrl: "/product/jeans.png",
    },
  ];

  return (
    <div className="my-20 container mx-auto px-5">
      <h2 className="text-5xl font-anton text-center">New Arrivals</h2>

      <div className="grid mt-20 grid-cols-4 gap-10">

        {
            arrivalData?.map(item =>  <div ><ProductCard item={item} /></div> )
        }
       
      </div>
    </div>
  );
};

export default Arrivals;
