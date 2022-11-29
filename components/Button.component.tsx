import React from "react";
import { children } from "dom7";

function ButtonComponent({
  text = "",
  className = "",
  icon = false,
  children,
}: any) {
  // @ts-ignore
  return (
    <>
      <div className="flex flex-wrap justify-between w-full ">
        <button
          className={`w-full uppercase text-[15px]  
              text-center tracking-normal  ${className}`}
        >
          {text}
          {children}
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
