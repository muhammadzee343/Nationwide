import React from "react";

function ButtonComponent({
  text = "",
  className = "",
  children,
  ...buttonProps
}: any) {
  // @ts-ignore
  return (
    <>
      <div className="flex flex-wrap justify-between w-full">
        <button
          className={`w-full   
              text-center tracking-normal ease-in duration-200  ${className}`}
          type="submit"
          {...buttonProps}
        >
          {text}
          {children}
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
