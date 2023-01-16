import React from "react";

const Select = ({
  label,
  register,
  name,
  required,
  inputClass,
  className,
  options = [],
}: any) => {
  return (
    <>
      <label className={`${className}`}>
        {label}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <select
        {...register(name, { required: required })}
        name={name}
        className={`border w-full outline-none focus:border-[#DEDEDE] focus:ring-transparent shadow-sm text-[15px] text-[#555555] ${inputClass}`}
      >
        {options.map(({ value, title }: any, index: number) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
