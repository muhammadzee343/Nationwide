import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

function OurServicesComponent({ list, title, image }: any) {
  return (
    <div className='shadow-lg md:w-[280px] lg:hover:bg-dark-blue transition-all ease-in duration-300 lg:w-[220px] min-h-[410px] xl:w-[270px] lg:max-w-[300px] lg:h-full rounded overflow-hidden'>
    <Image src={image} alt={title} className='h-[170px] lg:h-[180px] w-full object-cover'/>
    <div
      className="h-full bg-white text-black lg:hover:bg-dark-blue lg:hover:text-white leading-4 border-t-3 border-lime
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
                    className="text-[11px] xl:text-[13px] pb-[5px] mb-[6px] hover:text-lime
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
