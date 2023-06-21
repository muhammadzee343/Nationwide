import React from "react";
import HeaderComponent from "../components/header.component";
import FaqCardComponent from "../components/faqCard.component";
import ButtonComponent from "../components/button.component";
import FaqAccordionComponent from "../components/faqAccordion.component";
import { faqCardData, faqAccordionData } from "../utility/constants";
import Link from "next/link";
import Head from "next/head";
import Meta from "../components/meta.component";

function Feq() {
  return (
    <div className="w-full bg-white flex justify-center">
      <Meta title="gjggjjgjgj"/>
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="FAQs"
          breadcrumb="FAQs"
          className="bg-dark-blue"
        />
        <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-0 w-full lg:max-w-[970px] xl:max-w-[1170px]">
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
          <div className="w-full flex flex-col xl:max-w-[1114px] pt-[30px] mb-[40px] lg:mb-[70px] px-3 xl:px-0">
            <FaqAccordionComponent
              accordionData={faqAccordionData}
              iconMinusColor="#fff"
              iconPlusColor="#8d9297"
              headerBackground="bg-white"
              headerTitleColor="text-gray-400"
              activeHeadBackgorund="bg-lime"
              hoverHeadBackground="bg-lime"
              defaultActiveaccordion="1"
              navigateFromFAQ
            />
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
          <div className="w-full flex flex-col xl:max-w-[1024px] pt-[40px] pb-[50px] px-3 xl:px-0 md:flex md:flex-row items-center">
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
