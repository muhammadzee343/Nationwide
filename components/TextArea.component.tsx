import React from "react";

function TextArea({
  lable = "",
  placeholder,
  name,
  handleChange,
  className = "",
  inputClass = "",
  register,
}: any) {
  return (
    <div className="w-full">
      <label className={`${className}`}>{lable}</label>
      <textarea
        cols={80}
        placeholder={placeholder}
        value={""}
        name={name}
        className={`border w-full outline-none ${inputClass}`}
        onChange={(e) => handleChange(e)}
        {...register(name)}
      ></textarea>
    </div>
  );
}

export default TextArea;
