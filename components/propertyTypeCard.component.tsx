import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PropertyTypeCardComponent(props: any) {
  return (
    <div
      className={`border-2 border-lime lg:w-[275px] md:w-[275px] lg:h-[330px]  drop-shadow-lg cursor-pointer ${
        props.propertyType === props.value && "bg-lime"
      }`}
      onClick={() => props.changePropertyType(props.value)}
    >
      <div className="px-[23px]  flex flex-col justify-center pt-[50px] mb-[10px]">
        <div className="h-11 mb-7">
          <FontAwesomeIcon
            className="w-14 h-14 ml-[-3px] text-dark-blue mb-3"
            icon={props.icon}
          />
        </div>
        <h4 className={`text-[22px] text-dark-blue font-bold mb-3`}>
          {props.title}
        </h4>
        <div>
          <p className=" text-base text-dark-blue  leading-7 mb-6">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyTypeCardComponent;
