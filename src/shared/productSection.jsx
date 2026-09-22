import ProductCard from "@/shared/ProductCard";
import React from "react";

const ProductSection = ({productData = [] , title }) => {
 

  return (
    <div className="my-20 container mx-auto px-5">
      <h2 className="text-4xl lg:text-5xl font-anton text-center">{title}</h2>

      <div className="grid mt-20 grid-cols-2 lg:grid-cols-4 gap-10">

        {
            productData?.map(item =>  <div ><ProductCard item={item} /></div> )
        }
       
      </div>
    </div>
  );
};

export default ProductSection;
