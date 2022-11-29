import Link from "next/link";
import React, { useMemo, useState } from "react";
import styles from "../styles/Home.module.css";
import { SERVICES, LEC, EPC, GSC, BHR } from "../utility/constants";
const HomeTab = () => {
  const [activeService, setService] = useState(LEC);

  return (
    <div className="bg-[#182333bf] lg:flex gap-x-28 p-6 lg:py-6 lg:px-0 md:min-h-[440px]">
      <div className="my-auto">
        <ul className="flex flex-wrap align-center lg:flex-col lg:mt-6">
          {SERVICES.map((ele, index) => {
            return (
              <li
                className=" py-1 lg:py-2 w-full md:w-[238px] "
                key={index}
                onClick={() => setService(ele.slug)}
              >
                <div
                  className={`${
                    activeService.title === ele.slug.title
                      ? styles.pointerActive
                      : styles.pointer
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

      <div className="animate-fade-in-up">
        <h2 className="font-semibold text-4xl text-white mb-10 animate-fade-in-up">
          {activeService.title}
        </h2>
        <h3 className="font-semibold text-3xl text-[#c2cf10] mb-5 animate-fade-in-up">
          {activeService.subTitle}
        </h3>
        <ul className="marker:text-white list-disc text-white ml-5">
          {activeService.points.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
        <button
          className="bg-lime hover:bg-dark-blue text-dark-blue hover:text-white px-5 py-[6px]
        ease-in duration-200 ease-out duration-200 font-normal hover:font-semibold text-md my-2 uppercase "
        >
          {activeService.btnText}
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
