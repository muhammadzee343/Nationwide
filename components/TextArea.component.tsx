import React from "react";

function TextArea({ lable = "", placeholder, name, handleChange }: any) {
  return (
    <div className="w-full">
      <label className="text-lg text-dark-blue font-semibold my-1">
        {lable}
      </label>
      <textarea
        cols={80}
        placeholder={placeholder}
        value={""}
        name={name}
        className="border w-full border-grey-500 py-2.5 px-3 outline-none"
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
}

export default TextArea;
