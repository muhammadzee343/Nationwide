import React from "react";

function TextField({ lable, placeholder }: any) {
  return (
    <div className="w-full">
      <label className="text-lg text-dark-blue font-semibold">{lable}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full border-grey-500 py-2.5 px-3"
      />
    </div>
  );
}

export default TextField;
