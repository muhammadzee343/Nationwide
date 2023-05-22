import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SelectProperty from "./selectProperty.component";

function ServiceHeader(props: any) {
  return (
    <>
      <div className="bg-header_bg bg-[#000000]/70 bg-cover bg-no-repeat relative md:min-h-[500px] xl:min-h-[540px] sm:h-[300px] w-full">
        <div className="md:bg-blue-transparent hidden h-full md:min-h-[500px] xl:min-h-[540px] md:block w-full py-[36px]">
          <div className="w-full flex justify-between">
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:px-10 lg:px-16">
              <div className="w-[50%] h-full pt-12 flex flex-col lg:ml-10 ">
                <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                <h1 className="text-[30px] md:text-[20px] lg:text-[38px] bg-blue-transparent md:bg-transparent  font-semibold text-white mb-[25px] ">
                  {props.serviceTitle}
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
                      <p className="text-base lg:text-xl text-dark-blue md:text-white "dangerouslySetInnerHTML={{
                        __html: `${ele}`,
                      }}>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="lg:order-2 w-[95%] md:w-[45%] lg:w-[40.7%] xl:w-[30%] xl:h-[1400px] h-max ">
                <SelectProperty
                  sticky={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-blue-transparent md:hidden block w-full pb-[32px] relative">
        <div className="w-full flex justify-around">
          <div className="w-full">
            <div className="md:container bg-header_bg flex flex-col md:flex-row justify-center md:items-center ">
            <div className="w-full md:w-5/12 flex flex-col bg-[#000000]/70 bg-cover px-6 items-center py-4">
              <h1 className=" text-[20px] md:text-[34px] md:text-[40px] md:bg-transparent font-bold text-white mb-[25px] text-center  py-[3px] top-[-35px] md:top-[-51px] w-full">
                {props.serviceTitle}
              </h1>
              <div className="w-full">
                {props?.servicesDec.map((ele: any, index) => {
                  return (
                    <div key={index} className="flex gap-3 my-2 justify-start">
                    <span className="w-6 h-6 flex justify-center rounded-full">
                      <FontAwesomeIcon
                        className="w-2 text-white"
                        icon={faCircle}
                      ></FontAwesomeIcon>
                    </span>
                      <p className="text-base text-white font-semibold">
                        {ele}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
            <div className="md:hidden mt-6 px-6">
              <SelectProperty
                  sticky={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeader;
