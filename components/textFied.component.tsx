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
  pattern = "",
  errors = {},
  errorClass = "",
}: any) {
  return (
    <div className="w-full">
      <label className={`${className}`}>
        {lable}
        {required && lable && (
          <span className="text-[#ff0000] text-xl ml-1">*</span>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm ${inputClass}`}
        {...register(name, {
          required: { value: required, message: "Field is Required" },
          pattern: { value: pattern, message: "Enter Valid Email" },
        })}
      />
      {errors[name] && (
        <p className={`${errorClass}`}>{errors[name].message}</p>
      )}
    </div>
  );
}

export default TextField;
