import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ServiceSelectionCard({ title = "", className = "" }: any) {
  return (
    <div
      className={` ${className} border  drop-shadow-xl shadow-lime  cursor-pointer`}
    >
      <div className="flex items-center pl-[20px] justify-between pr-[10px]">
        <p className="pr-[20px] sm:pr-[45px] ">
          {title}
        </p>
        {className.includes("bg-lime") && (
          <FontAwesomeIcon className="w-5" icon={faCheck} />
        )}
      </div>
    </div>
  );
}

export default ServiceSelectionCard;
