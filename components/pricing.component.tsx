import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./button.component";
import "swiper/css";
import PricingCard from "./pricingCard.component";
import { bundles } from "../utility/constants";
const Pricing = () => {
  return (
    <>
      <div className=" hidden w-full lg:flex md:justify-center md:flex-nowrap flex-wrap px-6 sm:px-0 mt-[-125px]">
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
