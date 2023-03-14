import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "isomorphic-dompurify";
import BoxBackgroundComponent from "./boxBackground.component";

function ServiceInfo({ className, content }: any) {
  const cleanContent = DOMPurify.sanitize(content.content);
  return (
    <>
      {content.image && (
        <BoxBackgroundComponent className={'h-[300px] w-full lg:w-5/12 p-2 lg:h-auto'}
        greyStyle='w-[30%] h-[50%] top-[0] right-[0] '
        limeStyle='w-[30%] h-[50%] bottom-[0] left-[0]'
        contentStyle='p-4 m-auto'>
                <Image
                    className="h-full cursor-pointer"
                    src={content.image}
                    alt="ServiceInfo"
                />
        </BoxBackgroundComponent>
      )}
      <div
        className={`${content.image ? "lg:w-[58%]" : "lg:w-12/12"} py-4 px-1`}
      >
        {content.type !== "Service" && (
          <>
            <div className="mb-[30px] py-2">
              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
                {content.subTitle}
              </h4>
              <h2 className="text-4xl text-[#1a1a1a] font-medium">
                {content.title}
              </h2>
            </div>
            <p className={styles.servicePara2}>{content.paragraph1}</p>
            <div>
              <p className={styles.servicePara2}>{content.paragraph2}</p>
            </div>
            {content.link && (
                <div className='flex flex-row hover:text-dark-blue'>
                <span className="flex mr-2 text-lime">
                  <FontAwesomeIcon className="w-5" icon={faArrowRightLong} />
                </span>
              <Link
                href={content.link}
                className="text-sm border-slate-700 border-b-[1px] uppercase text-lime hover:text-dark-blue flex"
              >
                  Read More
              </Link>
            </div>
            )}
          </>
        )}
        {content.type === "Service" && (
          <div className="flex flex-col leading-relaxed list-disc w-[80%]">
            <h3
              className={`text-[26px] font-semibold mb-2 ${styles.serviceHeading}`}
            >
              {content.heading}
            </h3>
            <div
              className="text-[#1A1A1A] text-[15px]"
              dangerouslySetInnerHTML={{
                __html: `${cleanContent}`,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ServiceInfo;
