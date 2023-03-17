import Link from "next/link";
import React, { useMemo, useState } from "react";
import { SERVICES, LEC, EPC, GSC, BHR } from "../utility/constants";
import Image from 'next/image'
import arrow from "../public/trending_flat.png";
const HomeTab = () => {
    const [activeService, setService] = useState(LEC);

    return (
        <div className="lg:flex gap-x-20 p-6 lg:py-3 lg:px-0 md:min-h-[421px]">
            <div className="relative self-start lg:min-h-[450px] lg:bg-hero lg:w-[50%] mb-5 lg:mb-0 ">
                <ul className="flex justify-center flex-wrap align-center lg:flex-col lg:absolute -right-7 -bottom-[6%] z-10 lg:mt-6">
                    {SERVICES.map((ele, index) => {
                        return (
                            <li
                                className="min-w-[143px] md:w-[300px] mr-3 mb-3 lg:mr-0 lg:mb-0 md:w-[230px] lg:w-[160px] xl:w-[230px]"
                                key={index}
                                onClick={() => setService(ele.slug)}
                            >
                                <div
                                    className={`flex items-center px-3 border-white ${index !==0 ? "border-t-[1px]":"border-t-[0px]"} min-h-[80px] md:py-8 lg:py-0 lg:rounded-none font-bold text-[11px] md:px-5 md:text-[17px]
                                     lg:px-7 lg:py-6 lg:text-[16px] ${
                                        activeService.title === ele.slug.title
                                            ? 'bg-lime'
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

            <div className="animate-fade-in-up flex flex-col md:px-11 lg:mb-0 lg:w-[50%]">
                <h2 className="text-[26px] md:text-[30px] font-bold leading-10 text-white lg:text-[30px] lg:text-black mb-4 animate-fade-in-up">
                    {activeService.title}
                </h2>
                <div className="flex flex-row">
                    <h3 className="font-semibold text-3xl text-[#c2cf10] mb-5 animate-fade-in-up">
                        {activeService.subTitle}
                    </h3>
                    <p className="text-[#c2cf10] mt-4">*</p>
                </div>
                <ul className="marker:text-lime marker:text-[20px] list-disc text-white lg:text-black ml-5">
                    {activeService.points.map((ele, index) => {
                        return (
                            <li key={index} className="text-sm p-2">
                                {ele}
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="flex flex-row items-center self-center lg:self-start justify-center bg-lime lg:bg-dark-blue hover:bg-lime text-white hover:text-white px-5 py-[6px]
        ease-in duration-200 ease-out duration-200 text-[15px] my-4 uppercase"
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
