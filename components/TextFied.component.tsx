import React from "react";

function TextField({ lable, placeholder, name, handleChange }: any) {
  return (
    <div className="w-full">
      <label className="text-lg text-dark-blue font-semibold">{lable}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={""}
        name={name}
        className="border w-full border-grey-500 py-2.5 px-3"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default TextField;
