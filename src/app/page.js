import Arrivals from "@/components/Home/Arrivals";
import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import CustomerReview from "@/components/Home/CustomerReview";
import DressStyle from "@/components/Home/DressStyle";
import UpToDate from "@/components/Home/UpToDate";
import { newArrivalData } from "@/Data/newArrivals";
import { topSelling } from "@/Data/topSelling";
import ProductSection from "@/shared/productSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      {/* <Arrivals/> */}

     <ProductSection
        title={"New Arrival"}
        productData={newArrivalData}
      />
  <ProductSection
        title={"Top Sellings"}
        productData={topSelling}
      />

         <DressStyle />

        <CustomerReview />
   
    </div>
  );
}
