import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "isomorphic-dompurify";
import BoxBackgroundComponent from "./boxBackground.component";

function ServiceInfo({ className, content, index }: any) {
  const cleanContent = DOMPurify.sanitize(content.content);
  return (
    <>
      {content.image && (
        <BoxBackgroundComponent className={'min-h-[300px] md:min-h-[400px] lg:min-h-[300px] xl:min-h-[350px]  w-full lg:w-5/12 p-2 lg:h-auto'}
                                greyStyle='w-[30%] h-[50%] top-[0] right-[0] '
                                limeStyle='w-[30%] h-[50%] bottom-[0] left-[0]'
                                contentStyle='p-4  m-auto'>
          <Image
            className="h-full w-full cursor-pointer object-cover"
            // src={content.image}
            src={`/images/${content.image}`}
            alt="ServiceInfo"
            width={500}
            height={300}
          />
        </BoxBackgroundComponent>
      )}
      <div
        className={`w-full ${content.image ? "lg:w-[58%]" : "lg:w-12/12"} `}
      >
        {content.type !== "Service" && (
          <>
            <div className="mb-[17px] lg:mb-[30px]">
              <h4 className="text-[10px] xl:text-sm mb-[21px] md:[21px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
                {content.subTitle}
              </h4>
              <h2 className="text-2xl xl:text-4xl text-[#1a1a1a] font-medium">
                {content.title}
              </h2>
            </div>
            <p className={`${styles.servicePara2}`}>{content.paragraph1}</p>
            <div>
              <p className={`${styles.servicePara2}`}>{content.paragraph2}</p>
            </div>
            {content.link && (
              <div className={"flex flex-row hover:text-dark-blue"}>
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
          <div className="flex flex-col leading-relaxed list-disc">
            <h3
              className={`text-[26px] font-semibold mb-2 ${styles.serviceHeading}`}
            >
              {content.heading}
            </h3>
            <div
              className="text-[#1A1A1A] text-[16px] text-justify"
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
