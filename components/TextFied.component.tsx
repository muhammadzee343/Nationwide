import React from "react";

function TextField({
  lable = "",
  placeholder = "",
  name = "",
  className = "",
  handleChange,
  required,
  register,
  inputClass = "",
}: any) {
  return (
    <div className="w-full">
      <label className={` ${className}`}>
        {lable}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        required
        name={name}
        className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm ${inputClass}`}
        {...register(name, { required: true })}
        onChange={({ target: { value } }) => {
          handleChange(value);
        }}
      />
    </div>
  );
}

export default TextField;
