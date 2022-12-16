import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

function HeaderComponent({ header = "", breadcrumb = "", className="" }) {
  return (
    <div className={`w-full  flex justify-center h-[283px] items-center ${className}`}>
      <div className="w-full xl:max-w-[1114px] flex flex-col px-3 xl:px-0">
        <div className="border-l-[8px] border-lime px-5">
          <h2 className="text-[46px] text-white font-semibold">{header}</h2>
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
  );
}

export default HeaderComponent;
