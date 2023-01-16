import React from "react";

function CardComponent({
  heading = "",
  paragraph = "",
  className = "",
  hClass = "",
  pClass = "",
}) {
  return (
    <div className={`${className}`}>
      <div>
        <h4 className={`${hClass}`}>{heading}</h4>
        <p className={`${pClass}`}>{paragraph}</p>
      </div>
    </div>
  );
}

export default CardComponent;
