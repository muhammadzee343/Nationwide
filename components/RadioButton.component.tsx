import React from "react";

function RadioButton({
  title = "",
  className = "",
  pClass = "",
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
      <p className={`${pClass} text-[18px] text-dark-blue ml-3`}>{title}</p>
    </div>
  );
}
export default RadioButton;
