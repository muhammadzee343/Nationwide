import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function QuoteButtonComponent({
  text = "",
  className = "",
  children,
  type = "submit",
  icon=null,
  ...buttonProps
}: any) {
  // @ts-ignore
  return (
    <>
      <div className="flex flex-wrap justify-center w-full">
        <button
          className={`text-center tracking-normal ease-in duration-200  ${className}`}
          type={type}
          {...buttonProps}
        >
          {icon &&  <FontAwesomeIcon icon={icon} className="h-5  md:h-4 px-2 lg: h-8"/>}
          {text}
          {children}
        </button>
      </div>
    </>
  );
}

export default QuoteButtonComponent;
