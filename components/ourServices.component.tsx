import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

function OurServicesComponent({ list, title, image }: any) {
  return (
    <div className='shadow-lg md:w-[370px] lg:w-[275px] lg:max-w-[300px] h-full rounded overflow-hidden'>
    <Image src={image} alt={title} className='h-[170px] lg:h-[180px] w-full'/>
    <div
      className="h-full bg-white text-black hover:bg-dark-blue hover:text-white leading-4 border-t-4 border-lime
        hover: transition-all ease-in duration-300 p-4 flex flex-col"
    >
      <span className="uppercase text-[15px] font-bold mb-[10px] pb-[10px]  border border-transparent ">
        {title}
      </span>
      <ul>
        {list.map((ele: any, index: number) => {
          return (
            <li
              key={index}
              className="flex items-baseline hover:text-white border border-transparent cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowRight} className='w-3 text-lime mr-2'/>
                <Link
                    href={`service${ele.link}`}
                    className=" text-[13px] pb-[5px] mb-[6px] hover:text-lime
                        transition-all ease-in duration-300"
                >
                  {ele.text}
                </Link>

            </li>
          );
        })}
      </ul>
    </div>
      </div>
  );
}

export default OurServicesComponent;
