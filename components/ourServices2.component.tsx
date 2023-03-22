import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "isomorphic-dompurify";
import BoxBackgroundComponent from "./boxBackground.component";

function OurServices2({ title, image, list }: any) {
  return (
    <>
      {image && (
        <BoxBackgroundComponent className={'min-h-[350px] w-full lg:w-[50%] p-2 lg:h-auto'}
                                greyStyle='w-[30%] h-[50%] top-[0] right-[0] '
                                limeStyle='w-[30%] h-[50%] bottom-[0] left-[0]'
                                contentStyle='p-4  m-auto'>
          <Image
            className="h-full w-full cursor-pointer"
            src={image}
            alt="ServiceInfo"
          />
        </BoxBackgroundComponent>
      )}
      <div
        className={`w-full ${image ? "lg:w-[58%]" : "lg:w-12/12"} py-4`}
      >
        <h2 className="text-2xl xl:text-4xl text-[#1a1a1a] font-medium pb-[15px]">
          {title}
        </h2>
        <div>
          <p className={`${styles.servicePara2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
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
    </>
  );
}

export default OurServices2;
