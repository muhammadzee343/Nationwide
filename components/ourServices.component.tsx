import React from "react";
import Link from "next/link";
import { ourServices } from "../utility/constants";

function OurServices({ list, title }: any) {
  return (
    <div
      className="h-[320px] w-[285px] max-w-[285px] leading-4 bg-light-blue
       hover:bg-lime transition-all ease-in duration-300  p-[30px] flex flex-col"
    >
      <span className="text-white text-[15px] font-bold mb-[10px] pb-[10px]  border border-transparent border-b-grey-300">
        {title}
      </span>
      <ul>
        {list.map((ele: any, index: number) => {
          return (
            <li
              key={index}
              className="border border-transparent border-b-grey-300 pb-[5px] mb-[5px] cursor-pointer"
            >
              <Link
                href={"#"}
                className="text-white text-sm pb-[6px] mb-[6px] hover:text-black
                        transition-all ease-in duration-300"
              >
                {ele.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OurServices;
