import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function ButtonComponent({
  text = "",
  className = "",
  children,
  type = "submit",
  icon=null,
  iconClassName = "",
  ...buttonProps
}: any) {
  const buttonClassName = `w-full text-center tracking-normal ease-in duration-200 ${className}`;
  const iconClassNames = `h-5 md:h-4 px-2 lg: h-8 ${iconClassName}`;
  // @ts-ignore
  return (
    <>
      <div className="flex flex-wrap justify-center w-full">
        <button
          type={type}
          className={buttonClassName}
          {...buttonProps}
        >
          {icon &&  <FontAwesomeIcon icon={icon} className={iconClassNames}/>}
          {text}
          {children}
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
