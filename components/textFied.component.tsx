import React from "react";

function TextField({
  lable = "",
  placeholder = "",
  name = "",
  className = "",
  required = false,
  register,
  inputClass = "",
  type = "text",
}: any) {
  return (
    <div className="w-full">
      <label className={` ${className}`}>
        {lable}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm ${inputClass}`}
        {...register(name, { required })}
      />
    </div>
  );
}

export default TextField;
