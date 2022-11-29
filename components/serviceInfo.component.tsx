import React from "react";
import Image from "next/image";
import Link from "next/link";

import surveryor from "../public/surveyor-1.jpg";
import styles from "../styles/service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ServiceInfo({ className, content }: any) {
  return (
    <>
      <div className="lg:w-5/12 py-4 px-4 flex justify-center">
        <Image
          className=" h-full cursor-pointer"
          src={content.image}
          alt="Nwlogo"
        />
      </div>
      <div className="lg:w-7/12 py-4 px-4">
        <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
          <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
            {content.subTitle}
          </h4>
          <h2 className="text-4xl text-[#1a1a1a] font-medium">
            {content.title}
          </h2>
        </div>
        <p className={styles.servicePara}>{content.paragraph1}</p>
        <div>
          <p className={styles.servicePara2}>{content.paragraph2}</p>
        </div>
        <Link
          href={"#"}
          className="text-sm uppercase text-lime hover:text-dark-blue flex"
        >
          {content.link}
          {content.link && (
            <span className="flex ml-1">
              <FontAwesomeIcon className="w-2 " icon={faChevronRight} />
              <FontAwesomeIcon className="w-2 " icon={faChevronRight} />
            </span>
          )}
        </Link>
      </div>
    </>
  );
}

export default ServiceInfo;
