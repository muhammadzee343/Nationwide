import Link from "next/link";
import React, { useState } from "react";
import { SERVICES, LEC } from "../utility/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
const HomeTab = () => {
    const [activeService, setService] = useState(LEC);

    return (
        <div className="lg:flex gap-x-14 xxl:gap-x-16 xl:gap-x-[] px-3 py-6 lg:py-3 lg:px-0 md:min-h-[421px]">
            <div className={`relative self-start lg:min-h-[380px] xl:min-h-[450px]  
              ${activeService.title === 'Electrical Installation Condition Report (EICR)' ? "lg:bg-hero": 
              activeService.title === 'Energy Performance Certificate'? "lg:bg-hero_EPC":
                activeService.title === 'Gas Safety Certificate' ? "lg:bg-hero_gas_safety":
                  activeService.title === 'Building Survey & HomeBuyer Reports' ? "lg:bg-hero_building_survey":""} bg-cover lg:w-[50%] mb-5 lg:mb-0`}>
                <ul className="flex w-full lg:w-auto justify-between flex-wrap align-center gap-y-4 md:gap-y-4 lg:gap-y-0 lg:gap-x-0  lg:flex-col lg:absolute -right-7 -bottom-[6%] z-10 lg:mt-6">
                    {SERVICES.map((ele, index) => {
                        return (
                            <li
                                className="w-[48%] md:w-[49%] bg-white lg:min-h-min min-h-[117px] lg:mr-0 lg:mb-0  lg:w-[180px] xl:w-[230px]"
                                key={index}
                                onClick={() => setService(ele.slug)}
                            >
                                <div
                                    className={`flex items-center px-3 border-white ${index !==0 ? "lg:border-t-[1px]":"border-t-[0px]"} lg:min-h-[50px] min-h-full xl:min-h-[80px] font-bold text-[16px] md:px-5 xl:px-5 md:text-[17px]
                                     lg:px-7 lg:py-[17px] lg:text-[10px] xl:text-[16px] ${
                                        activeService.title === ele.slug.title
                                            ? 'bg-lime opacity-90'
                                            : 'bg-white text-black lg:bg-dark-blue lg:text-white hover:bg-lime hover:opacity-100'
                                    } w-full`}
                                >
                                    <Link href="#" onClick={(event) => event.preventDefault()}>
                                        {ele.title} <br />
                                        {ele.certificate}
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="animate-fade-in-up flex flex-col lg:px-1 lg:mb-0 lg:w-[50%]">
                <h1 className="text-[26px] md:text-[30px] font-bold leading-10 text-white lg:text-[20px] xl:text-[25px] xxl:text-[34px] lg:text-black mb-6 animate-fade-in-up">
                    {activeService.title}
                </h1>
                <div className="flex flex-row">
                    <h2 className="font-semibold text-3xl lg:text-2xl xxl:[29px] text-[#c2cf10] mb-6 animate-fade-in-up">
                        {activeService.subTitle}
                    </h2>
                    <p className="text-[#c2cf10] mt-4">*</p>
                </div>
                <ul className="marker:text-lime marker:text-[20px] list-disc text-white lg:text-black ml-12 lg:ml-5">
                    {activeService.points.map((ele, index) => {
                        return (
                            <li key={index} className="text-sm lg:text-[13px] xl:text-[14px] mb-[12px] xl:mb-[16px]">
                                {ele}
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="flex flex-row gap-x-5 items-center self-center lg:self-start justify-center bg-lime lg:bg-dark-blue hover:bg-lime text-white hover:text-dark-blue px-5 py-2
                    ease-in duration-200 ease-out duration-200 text-[15px] lg:text-[11px] xl:text-[12px] my-4 uppercase"
                >
                    <svg width="27" height="12" viewBox="0 0 38 16" className="fill-black group-hover:fill-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.8182 15.8077L28.766 14.7556L34.5531 8.96852H0.672668V7.49546H34.5531L28.766 1.70844L29.8182 0.65625L37.394 8.23199L29.8182 15.8077Z" />
                    </svg>
                    <Link href={`service/${activeService.btnLink}`}>
                        {activeService.btnText}
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default HomeTab;
