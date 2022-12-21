import React from "react";

function CardComponent({ heading = "", paragraph = "", className = "" }) {
  return (
    <div className={`${className}`}>
      <div>
        <h4 className="text-xl mb-[15px] text-black font-bold text-center">
          HOW IT WORKS?
        </h4>
        <p className=" font-semibold text-justify text-base">
          Orders can be placed online 24/7 or over the phone during our working
          hours. We can also coordinate directly with your tenants, agent or
          vendor to organise inspection appointment(s). Our normal wait time is
          currently between 1 to 3 working days. If you want to discuss a
          quotation, need help placing new order or got any other question,
          please don’t hesitate to call us free at 0800 048 7474 or request a
          callback.{" "}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
