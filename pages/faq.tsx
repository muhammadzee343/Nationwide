import React from "react";
import HeaderComponent from "../components/Header.component";
import FaqCardComponent from "../components/FaqCard.component";
import ButtonComponent from "../components/button.component";
import FaqAccordionComponent from "../components/FaqAccordion.component";
import { faqCardData, faqAccordionData } from "../utility/constants";
import Link from "next/link";

function Feq() {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="FAQs"
          breadcrumb="FAQs"
          className="bg-dark-blue"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0 font-opensans">
          <div className="grid place-items-center">
            <h1 className="font-medium text-4xl text-center mb-5">
              Frequently Asked Questions
            </h1>
            <div className="h-1.5 w-20 bg-lime" />
            <br />
            <p className="w-4/6 text-center text-[15px] leading-7">
              Below is a list of answers to Frequently Asked Questions about
              most of the services. If your question isn’t answered in any of
              the below, please feel free to contact us and we’ll be happy to
              help with your query.
            </p>
            <br />
          </div>
          <div className="w-full flex flex-col xl:max-w-[1114px] pt-[30px] mb-[40px] lg:mb-[70px] px-3 xl:px-0 font-opensans">
            <FaqAccordionComponent accordionData={faqAccordionData} />
          </div>
          <div className="md:flex md:flex-row content-between grid-cols-3 gap-4 mb-4 lg:mb-14">
            {faqCardData.map((item, index) => {
              return (
                <div
                  className="border border-gray-300 w-full md:w-4/12"
                  key={index}
                >
                  <FaqCardComponent
                    iconProps={item.iconName}
                    title={item.headTitle}
                    description={item.bodyContant}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full bg-lime flex justify-center">
          <div className="w-full flex flex-col xl:max-w-[1024px] pt-[40px] pb-[50px] px-3 xl:px-0 font-opensans md:flex md:flex-row items-center">
            <div className="max-w-3/4 mb-5 md:mb-0">
              <p className="text-[25px] text-white text-center">
                Still couldn't find the answers you are looking for ? Please
              </p>
            </div>
            <Link href="#">
              <ButtonComponent
                text="CONTACT US"
                className="bg-lime text-white border-2 border-white font-medium uppercase px-[20px] py-[13px] hover:bg-white hover:text-black ease-in duration-200 ml-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feq;
