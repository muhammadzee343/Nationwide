import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function Counter(props: any) {
  const [count, setCount] = useState(0);
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
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
        className="w-14 h-7 border border-grey-500 flex
      justify-center text-center text-base text-dark-blue font-semibold outline-0 "
        type="number"
        step={1}
        value={count}
      />
      {/*<div*/}
      {/*  className="w-14 h-7 border border-grey-500 flex*/}
      {/*justify-center text-base text-dark-blue font-semibold "*/}
      {/*>*/}
      {/*  {count}*/}
      {/*</div>*/}
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
