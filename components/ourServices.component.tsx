import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

function OurServicesComponent({ list, title, image }: any) {
  return (
      <div className={'shadow-lg rounded overflow-hidden'}>
    <Image src={image} alt={title} className={'h-[180px] w-full'}/>
    <div
      className="h-full lg:w-[275px] lg:max-w-[300px] leading-4 border-t-4 border-lime
        hover: transition-all ease-in duration-300  p-[20px] flex flex-col"
    >
      <span className="text-dark-blue uppercase text-[15px] font-bold mb-[10px] pb-[10px]  border border-transparent ">
        {title}
      </span>
      <ul>
        {list.map((ele: any, index: number) => {
          return (
            <li
              key={index}
              className="flex flex-row items-center border border-transparent pb-[3px] mb-[3px] md:pb-[5px] md:mb-[5px] cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowRight} className='w-3 text-lime mr-2'/>
                <Link
                    href={`service${ele.link}`}
                    className="text-dark-blue align-text-bottom text-[10px] pb-[5px] mb-[6px] hover:text-lime
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
