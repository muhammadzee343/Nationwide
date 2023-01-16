import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
function Counter({
  minValue = 0,
  label,
  setValue,
  preValue = 0,
  className = "",
}: any) {
  const [count, setCount] = useState<number>(preValue || minValue);
  function increment() {
    setCount(function (prevCount) {
      setValue((types) => {
        return { ...types, [label]: prevCount };
      });
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      setValue((types: any) => {
        return { ...types, [label]: prevCount };
      });
      if (prevCount > minValue) {
        return (prevCount -= 1);
      } else {
        return (prevCount = minValue);
      }
    });
  }
  return (
    <div className="flex cursor-pointer">
      <div className="mr-3" onClick={increment}>
        <span className=" w-6 h-6 sm:w-7 sm:h-7 bg-lime flex justify-center items-center rounded-full">
          <FontAwesomeIcon
            className=" w-4 h-4 sm:w-5 sm:h-5 bg-lime text-white"
            icon={faPlus}
          ></FontAwesomeIcon>
        </span>
      </div>
      <input
        className={`w-14 h-7 border border-grey-500 flex
      justify-center text-center text-base text-dark-blue font-semibold outline-none focus:ring-transparent ${className}`}
        type="number"
        step={1}
        min={minValue}
        value={count}
        onChange={() => {}}
      />
      <div className="ml-3" onClick={decrement}>
        <span className="w-6 h-6 sm:w-7 sm:h-7 bg-lime flex justify-center items-center rounded-full">
          <FontAwesomeIcon
            className="w-4 h-4 sm:w-5 sm:h-5  bg-lime text-white font-bold rounded-full"
            icon={faMinus}
          ></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
}

export default Counter;
