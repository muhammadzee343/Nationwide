import React from "react";

function RadioInput({ label, value, register, name, className = "" }: any) {
  return (
    <label className={`${className}`}>
      <div className="my-1.5">
        <input
          type="radio"
          value={value}
          {...register(name)}
          className="mb-[4px] mr-[13px] h-[13px] w-[13px]"
        />
        {label}
      </div>
    </label>
  );
}

export default RadioInput;
