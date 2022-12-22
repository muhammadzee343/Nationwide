import React from "react";

function StepperComponent(props: any) {
  return (
    <div
      className="hidden md:flex justify-between sm:container
       my-6  border-b border-grey-300 border-dashed mb-9"
    >
      <div className="bg-lime font-semibold mb-[-15px]  text-white text-center  w-[30px] h-[30px] rounded-full">
        1
      </div>
      <div className="bg-lime font-semibold mb-[-15px]   text-white text-center  w-[30px] h-[30px] rounded-full">
        2
      </div>
      <div className="bg-lime font-semibold mb-[-15px]  text-white text-center  w-[30px] h-[30px] rounded-full">
        3
      </div>
    </div>
  );
}

export default StepperComponent;
