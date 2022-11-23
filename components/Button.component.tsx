import React from "react";

function ButtonComponent({ text = "", className = "" }) {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full ">
        <button
          className={`w-full uppercase  px-[20px] py-[13px] text-[15px] font-bold 
              text-center tracking-normal ${className}`}
        >
          {text}
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
