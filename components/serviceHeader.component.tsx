import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SelectProperty from "./selectProperty.component";

function ServiceHeader(props: any) {
  const epcPoints = [
    "EICR certificate shared same day",
    "Failings repaired on half hour rate",
    "Knowledge & advice you can trust",
    "Charged at £30.00 ex VAT per circuit",
  ];
  return (
    <>
      <div className="bg-header_bg bg-blue-transparent bg-cover bg-no-repeat relative h-[230px] sm:h-[300px] md:h-fit  w-full">
        <div className="md:bg-blue-transparent hidden md:block w-full py-[32px]">
          <div className="w-full flex justify-between">
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:px-10 lg:px-16">
              <div className="w-[50%] h-full pt-12 flex flex-col lg:ml-10 ">
                <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                <h1 className="text-[39px] md:text-[20px] lg:text-[39px] bg-blue-transparent md:bg-transparent font-semibold text-white mb-[25px] ">
                  Energy Performance Certificate
                </h1>
                {props?.servicesDec.map((ele: any, index) => {
                  return (
                    <div key={index} className="flex mx-2 gap-3 my-2 items-center">
                      <span className="w-6 h-6 flex justify-center rounded-full">
                        <FontAwesomeIcon
                          className="w-2 text-white"
                          icon={faCircle}
                        ></FontAwesomeIcon>
                      </span>
                      <p className="text-base lg:text-xl text-dark-blue md:text-white ">
                        {ele}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="lg:order-2 w-[95%] md:w-[45%] lg:w-[40.7%] xl:w-[30%] ">
                <SelectProperty />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-blue-transparent md:hidden block w-full py-[32px] relative">
        <h1 className=" text-[20px] md:text-[34px] md:text-[40px] bg-blue-transparent md:bg-transparent font-bold text-white mb-[25px] text-center absolute py-[3px] top-[-35px] md:top-[-51px] w-full">
          Energy Performance Certificate
        </h1>
        <div className="w-full flex justify-around">
          <div className="w-full md:container flex flex-col md:flex-row justify-center md:items-center px-6">
            <div className=" w-full md:w-5/12 flex flex-col">
              {props?.servicesDec.map((ele: any, index) => {
                return (
                  <div key={index} className="flex gap-3 my-2">
                    <span className="w-6 h-6 flex justify-center rounded-full">
                      <FontAwesomeIcon
                        className="w-2"
                        icon={faCircle}
                      ></FontAwesomeIcon>
                    </span>
                    <p className="text-base text-dark-blue md:text-white font-semibold">
                      {ele}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="md:hidden mt-10 ">
              <SelectProperty />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeader;
