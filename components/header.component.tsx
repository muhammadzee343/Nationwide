import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

function HeaderComponent({ header = "", breadcrumb = "", className = "" }) {
  return (
    <div
      className={`w-full flex relative justify-center h-[283px] bg-left items-center ${className}`}
    >
      <div className="absolute inset-0 w-full h-full bg-[#182333b8] flex justify-center items-center">
        <div className="sm:w-full md:w-10/12 lg:max-w-[970px] xl:max-w-[1170px] flex flex-col px-3 xl:px-0 font-poppins">
          <div className="border-l-[6px] border-lime px-4 opacity-100 ">
            <h1 className="text-[26px] tracking-normal leading-tight lg:text-[43px] text-white font-semibold">
              {header}
            </h1>
          </div>
          <div className="flex items-center py-3">
            <FontAwesomeIcon
              className="text-white hover:text-lime w-4"
              icon={faHouse}
            />
            <span className="mx-2 text-white text-[18px]">/</span>
            <span className={`text-lime text-sm ${styles.poppinsFamily}`}>
              {breadcrumb}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
