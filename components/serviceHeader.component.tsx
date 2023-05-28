import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SelectProperty from "./selectProperty.component";

function ServiceHeader(props: any) {
  return (
    <>
      <div className="w-full xxl:max-w-[1440px] mx-auto bg-white lg:min-h-[530px] md:px-0 xl:px-[39px] bg-[#000000]/70 bg-cover bg-no-repeat relative md:min-h-[500px] xl:min-h-[540px] w-full">
        <div className="md:bg-white hidden h-full md:min-h-[500px] xl:min-h-[540px] md:block w-full pt-[40px]">
          <div className="w-full flex justify-between">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="bg-eicr_bg w-[30%]  flex flex-col min-h-[456px] col_1"> </div>
              <div className="w-[40%] h-full pt-12 flex flex-col lg:ml-10 col_2">
                <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                <h1 className="text-[26px] md:text-[30px] font-bold leading-10 text-white lg:text-[20px] xl:text-[25px] xxl:text-[34px] lg:text-black mb-6 animate-fade-in-up">
                  {props.serviceTitle}
                  
                </h1>

                {props?.servicesDec.map((ele: any, index) => {
                  return (
                    <div key={index} className="flex mx-2 gap-3 my-2 items-center">
                      <span className="w-6 h-6 flex justify-center rounded-full bg-[#c2cf10]">
                        <FontAwesomeIcon
                          className="w-2 fa-bold"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </span>
                      <p className="text-base lg:text-[17px] font-semibold"dangerouslySetInnerHTML={{
                        __html: `${ele}`,
                      }}>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-[30%] w-[95%] md:w-[45%] lg:w-[40.7%] xl:w-[30%] h-max col_3">
                <SelectProperty
                  sticky={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-blue-transparent md:hidden block w-full pb-[32px] relative">
      <div className="bg-eicr_bg w-[100%] bg-cover  flex flex-col min-h-[300px] relative">
      <h1 className="bg-[#182333]/80 text-[20px] md:text-[34px] md:text-[40px] md:bg-transparent font-bold  mb-[0px] text-center  bottom-[-0px]  w-full text-white py-[10px] px-[15px] absolute">
                {props.serviceTitle}
              </h1>
         </div>
        <div className="w-full flex justify-around">
          <div className="w-full">
            <div className="md:container bg-white flex flex-col md:flex-row justify-center md:items-center ">
            <div className="w-full md:w-5/12 flex flex-col bg-white bg-cover px-6 items-center py-4">
              
              <div className="w-full">
                {props?.servicesDec.map((ele: any, index) => {
                  return (
                    <div key={index} className="flex gap-3 my-3 justify-start sm:text-[16px]">
                    <span className="w-6 h-6 flex justify-center rounded-full bg-[#c2cf10]">
                        <FontAwesomeIcon
                          className="w-2 fa-bold"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </span>
                      <p className="text-base font-semibold " dangerouslySetInnerHTML={{
                        __html: `${ele}`,
                      }}>
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
