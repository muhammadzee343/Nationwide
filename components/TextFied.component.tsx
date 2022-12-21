import React from "react";

function TextField({
  lable = "",
  placeholder = "",
  name = "",
  className = "",
  handleChange,
}: any) {
  return (
    <div className="w-full">
      <label className={`text-lg text-dark-blue font-semibold ${className}`}>
        {lable}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        required
        name={name}
        className="border w-full border-grey-500 py-2.5 px-3 focus:border-lime  outline-none"
        onChange={({ target: { value } }) => {
          handleChange(value);
        }}
      />
    </div>
  );
}

export default TextField;
