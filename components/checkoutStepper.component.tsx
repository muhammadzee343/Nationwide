import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckoutStepper({paymentType}: any) {

  return (
    <div
      className=" flex justify-between sm:container  sm:w-[60%] w-[80%]  my-6 border-b-[4px] border-lime  mb-20"
    >
      <div className="bg-lime relative  mb-[-18px]  text-white  text-center  w-[35px] h-[35px] rounded-full">
        <FontAwesomeIcon className=" w-5 mt-[7px] ml-[6px]" icon={faCheck} />
        <span className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px]   sm:text-[12px] text-[10px] lg:text-base  sm:w-[160px] md:w-[180px] font-semibold text-dark-blue sm:border-b-[3px] border-lime">
          ORDER INFORMATION
        </span>
      </div>
      <div className="bg-lime relative mb-[-18px]   text-white  text-center  w-[35px] h-[35px] rounded-full">
        <FontAwesomeIcon className=" w-5 mt-[7px] ml-[6px]" icon={faCheck} />
        <span className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px] sm:text-[12px] text-[10px] lg:text-base  sm:w-[160px] md:w-[180px] font-semibold text-dark-blue sm:border-b-[3px] border-lime">
          ORDER SUMMARY
        </span>
      </div>
      <div className={`${paymentType !== "" ? "bg-lime text-white" : "border-[3px] border-lime rounded-full bg-white"} relative mb-[-18px]  text-center  w-[35px] h-[35px] rounded-full`}>
        {paymentType && <FontAwesomeIcon className=" w-5 mt-[7px] ml-[6px]" icon={faCheck} />}
        <span className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px] sm:text-[12px] text-[10px] lg:text-base  sm:w-[160px] md:w-[180px] font-semibold text-dark-blue sm:border-b-[3px] border-lime">
          ORDER PAYMENT
        </span>
      </div>
    </div>
  );
}

export default CheckoutStepper;
