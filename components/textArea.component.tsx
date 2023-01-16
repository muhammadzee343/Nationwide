import React from "react";

function TextArea({
  lable = "",
  placeholder,
  name,
  required,
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
        name={name}
        className={`border w-full outline-none ${inputClass}`}
        onChange={() => {}}
        {...register(name, { required })}
      ></textarea>
    </div>
  );
}

export default TextArea;
