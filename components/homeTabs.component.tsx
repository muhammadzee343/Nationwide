import Link from "next/link";
import React, { useMemo, useState } from "react";
import { SERVICES, LEC, EPC, GSC, BHR } from "../utility/constants";
import Image from 'next/image'
import arrow from "../public/trending_flat.png";
const HomeTab = () => {
    const [activeService, setService] = useState(LEC);

    console.log(activeService);

    return (
        <div className="lg:flex gap-x-14 xxl:gap-x-16 xl:gap-x-[] px-3 py-6 lg:py-3 lg:px-0 md:min-h-[421px]">
            <div className={`relative self-start lg:min-h-[380px] xl:min-h-[450px]  
              ${activeService.title === 'Electrical Installation Condition Report (EICR)' ? "lg:bg-hero": 
              activeService.title === 'Energy Performance Certificate'? "lg:bg-hero_EPC":
                activeService.title === 'Gas Safety Certificate' ? "lg:bg-hero_gas_safety":
                  activeService.title === 'Building Survey & HomeBuyer Reports' ? "bg-hero_building_survey":""} bg-cover lg:w-[50%] mb-5 lg:mb-0`}>
                <ul className="flex justify-center flex-wrap align-center lg:flex-col lg:absolute -right-7 -bottom-[6%] z-10 lg:mt-6">
                    {SERVICES.map((ele, index) => {
                        return (
                            <li
                                className="min-w-[160px] bg-white lg:min-h-min min-h-[117px] md:w-[320px] mr-2 mb-2 lg:mr-0 lg:mb-0 md:w-[230px] lg:w-[180px] xl:w-[230px]"
                                key={index}
                                onClick={() => setService(ele.slug)}
                            >
                                <div
                                    className={`flex items-center px-3 border-white ${index !==0 ? "border-t-[1px]":"border-t-[0px]"} lg:min-h-[50px] min-h-full xl:min-h-[80px] font-bold text-[13px] md:px-5 xl:px-5 md:text-[17px]
                                     lg:px-7 lg:py-[17px] lg:text-[10px] xl:text-[16px] ${
                                        activeService.title === ele.slug.title
                                            ? 'bg-lime opacity-90'
                                            : 'bg-white text-black lg:bg-dark-blue opacity-90 lg:text-white hover:bg-lime hover:opacity-100'
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
            <div className="animate-fade-in-up flex flex-col md:px-11 lg:px-1 lg:mb-0 lg:w-[50%]">
                <h1 className="text-[26px] md:text-[30px] font-bold leading-10 text-white lg:text-[20px] xl:text-[25px] xxl:text-[34px] lg:text-black mb-6 animate-fade-in-up">
                    {activeService.title}
                </h1>
                <div className="flex flex-row">
                    <h2 className="font-semibold text-3xl lg:text-2xl xxl:[29px] text-[#c2cf10] mb-6 animate-fade-in-up">
                        {activeService.subTitle}
                    </h2>
                    <p className="text-[#c2cf10] mt-4">*</p>
                </div>
                <ul className="marker:text-lime marker:text-[20px] list-disc text-white lg:text-black ml-9 lg:ml-5">
                    {activeService.points.map((ele, index) => {
                        return (
                            <li key={index} className="text-sm lg:text-[13px] xl:text-[14px] mb-[12px] xl:mb-[16px]">
                                {ele}
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="flex flex-row items-center self-center lg:self-start justify-center bg-lime lg:bg-dark-blue hover:bg-lime text-white hover:text-white px-5 py-2
        ease-in duration-200 ease-out duration-200 text-[15px] lg:text-[11px] xl:text-[12px] my-4 uppercase"
                >
                    <Image src={arrow} alt={'Arrow'} className='mr-3'/>
                    <Link href={`service/${activeService.btnLink}`}>
                        {activeService.btnText}
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default HomeTab;
