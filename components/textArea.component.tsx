import React from "react";

function TextArea({
  lable = "",
  placeholder,
  name,
  required,
  className = "",
  inputClass = "",
  register,
  errors = {},
  errorClass = "",
  customStyle
}: any) {
  return (
    <div className="w-full">
      <label className={`${className}`}>
        {lable}
        {required && lable && (
          <span className="text-[#ff0000] text-xl ml-1">*</span>
        )}
      </label>
      <textarea
        cols={80}
        placeholder={placeholder}
        name={name}
        className={`border w-full outline-none ${inputClass}`}
        onChange={() => {}}
        {...register(name, {
          required: { value: required, message: "This Field is required" },
        })}
          style={customStyle}
      ></textarea>
      {errors[name] && (
        <p className={`${errorClass}`}>{errors[name].message}</p>
      )}
    </div>
  );
}

export default TextArea;
