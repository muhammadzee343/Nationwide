import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ServiceInfo({ className, content }: any) {
  return (
    <>
      {content.image && (
        <div className="lg:w-6/12 py-4 px-8 flex justify-center">
          <Image
            className=" h-fit cursor-pointer"
            src={content.image}
            alt="ServiceInfo"
          />
        </div>
      )}
      <div
        className={`${content.image ? "lg:w-6/12" : "lg:w-12/12"} py-4 px-1`}
      >
        {content.type !== "Service" && (
          <>
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
            {content.link && (
              <Link
                href="#"
                className="text-sm uppercase text-lime hover:text-dark-blue flex"
              >
                {content.link}
                <span className="flex ml-1">
                  <FontAwesomeIcon className="w-2 " icon={faChevronRight} />
                  <FontAwesomeIcon className="w-2 " icon={faChevronRight} />
                </span>
              </Link>
            )}
          </>
        )}
        {content.type === "Service" && (
          <div className="flex flex-col leading-relaxed list-disc">
            <h3
              className={`text-[26px] font-semibold mb-2 ${styles.serviceHeading}`}
            >
              {content.heading}
            </h3>
            <div
              className="text-[#1A1A1A] text-[15px]"
              dangerouslySetInnerHTML={{
                __html: `${content.content}`,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ServiceInfo;
