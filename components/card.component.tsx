import React from "react";

function CardComponent({ heading = "", paragraph = "", className = "" }) {
  return (
    <div className={`${className}`}>
      <div>
        <h4 className="text-xl mb-[15px] text-black font-bold text-center">
          {heading}
        </h4>
        <p className=" font-semibold text-justify text-base">{paragraph}</p>
      </div>
    </div>
  );
}

export default CardComponent;
