import Image from "next/image";
import React from "react";
import styles from "../styles/footer.module.css";
import FaqAccordionComponent from "../components/faqAccordion.component";
import { joinAdvantageList, careerAccordionData } from "../utility/constants";
import surveyor_image from "../public/surveyor-1.jpg";
import Head from "next/head";
function Career() {
  return (
    <div className="w-full bg-white flex justify-center">
      <Head>
        <title>Career - Nationwide Surveyors</title>
      </Head>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0">
          <div className="grid place-items-center">
            <h1 className="font-medium text-4xl text-center mb-5">
              We're Hiring!
            </h1>
            <div className="h-1.5 w-20 bg-lime" />
            <br />
            <div className="w-full md:flex md:flex-row">
              <div className="w-full md:w-1/2 p-5">
                <p className="text-[20px] font-semibold tracking-wider">
                  Are you a Qualified Energy Assessor, a Gas Safe Registered
                  Engineer, Qualified Electrician or a Chartered Surveyor ? We
                  can offer you a regular stream of prebooked work within your
                  selected postcode areas.
                </p>
                <br />
                <p className="text-[20px] font-bold">
                  Some of the advantages of joining Nationwide Surveyors:
                </p>
                <br />
                <ul
                  className={`list-disc list-inside bg-blue-400 font-opensans ${styles.footerParagraph}`}
                >
                  {joinAdvantageList.map((item, index) => {
                    return (
                      <div className="flex flex-row" key={index}>
                        <li className="text-justify ml-2"></li>
                        <p>{item.point}</p>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full md:w-1/2 p-5">
                <Image className="inline" src={surveyor_image} alt="NoImage" />
              </div>
            </div>
            <h1 className="font-medium text-4xl text-center mb-5">
              Opened Positions
            </h1>
            <div className="h-1.5 w-20 bg-lime" />
            <br />
            <br />
            <FaqAccordionComponent
              accordionData={careerAccordionData}
              iconMinusColor="#c2cf10"
              iconPlusColor="#000"
              headerTitleColor="text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
