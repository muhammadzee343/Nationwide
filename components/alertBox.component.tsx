import React from "react";

export default function AlertBox({ text, className = "" }: any) {
  return (
    <div
      className={`py-[7px] px-[20px] border-l-[5px]
     border-l-lime bg-cream rounded  drop-shadow-xl text-dark-blue ${className}`}
    >
      {text}
    </div>
  );
}
