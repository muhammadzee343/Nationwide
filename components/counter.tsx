import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setValue((types) => {
      return { ...types, [label]: count };
    });
  }, [count]);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      // setValue((types: any) => {
      //   return { ...types, [label]: prevCount };
      // });
      if (prevCount > minValue) {
        return (prevCount -= 1);
      } else {
        return (prevCount = minValue);
      }
    });
  }
  return (
    <div className="flex cursor-pointer items-center">
      <div className="mr-2 flex items-center" onClick={decrement}>
        <span className=" w-5 h-5 bg-lime flex justify-center items-center items-center rounded-full">
          <FontAwesomeIcon
            className=" w-[17px] h-[20px] text-white"
            icon={faMinus}
          />
        </span>
      </div>
      <input
        className={`w-16 h-7 border border-grey-500 flex
      justify-center text-center text-base text-dark-blue font-semibold outline-none focus:ring-transparent ${className} `}
        type="number"
        step={1}
        min={minValue}
        value={count}
        onChange={() => {}}
      />

      <div className="ml-2 flex items-center" onClick={increment}>
        <span className="w-5 h-5 bg-lime flex justify-center items-center rounded-full">
          <FontAwesomeIcon
            className=" w-[17px] h-[20px] text-white "
            icon={faPlus}
          />
        </span>
      </div>
    </div>
  );
}

export default Counter;
