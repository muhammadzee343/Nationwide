import React from "react";
import "swiper/css";
import PricingCard from "./pricingCard.component";
import { bundles } from "../utility/constants";

const Pricing = () => {
  return (
    <>
      <div className="hidden w-full lg:flex md:justify-center md:flex-nowrap flex-wrap px-6 sm:px-0 mx-[-0.5rem]">
        {bundles.map(({ className, content }, index) => {
          return (
            <PricingCard
              key={index}
              content={{ ...content }}
              className={className}
            />
          );
        })}
      </div>
    </>
  );
};

export default Pricing;
