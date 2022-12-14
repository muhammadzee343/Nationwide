import React from "react";

function RadioButton({
  title = "",
  className = "",
  selectattribute,
  lable,
  value,
}: any) {
  return (
    <div
      className="flex  items-center cursor-pointer"
      onClick={() => {
        selectattribute((types) => {
          return { ...types, [lable]: value };
        });
      }}
    >
      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:border-lime hover:bg-lime ${className} `}
      />
      <p className=" text-[18px] text-dark-blue font-semibold ml-3">{title}</p>
    </div>
  );
}
export default RadioButton;
