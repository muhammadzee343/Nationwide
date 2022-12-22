import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCartShopping,
  faChevronDown,
  faChevronRight,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  fab,
  faFacebook,
  faFacebookF,
  faFlickr,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import HomeTab from "../components/homeTabs.component";
import SelectProperty from "../components/selectProperty.component";
import Pricing from "../components/pricing.component";
import PricingCarouselComponent from "../components/pricingCarousel.component";
import { DeviceContext } from "../components/deviceContext.component";
import React, { useContext } from "react";
import ServiceInfo from "../components/serviceInfo.component";
import { homeServices, howItWorks, ourServices } from "../utility/constants";
import OurServicesComponent from "../components/ourServices.component";
import HowItWorks from "../components/howItWorksCard.component";
import StepperComponent from "../components/stepper.component";
import ButtonComponent from "../components/Button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselComponent from "../components/carousel.component";

library.add(
  faCartShopping,
  faEnvelope,
  faPhone,
  faXmark,
  faChevronDown,
  faBars,
  fab,
  faTwitter,
  faFacebook,
  faFacebookF,
  faLinkedin,
  faFlickr,
  faChevronRight
);
export default function Home() {
  const { smallDevice, middleDevice, largeDevice }: any =
    useContext(DeviceContext);
  return (
    <div className="">
      <Head>
        <title>
          Nationwide Surveyors | All Landlord Certifications Offered at One
          Place
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className=" lg:min-h-[700px] py-[60px] bg-home_bg_image bg-no-repeat bg-cover w-full flex flex-wrap justify-evenly">
        <div className=" container flex flex-col-reverse flex-col items-center lg:items-start lg:flex-row flex-wrap justify-around">
          <div className=" w-[95%] lg:w-[65%] xxl:w-[55%]">
            <HomeTab />
          </div>
          <div className="w-[95%] lg:w-[30%] xl:w-[30%] xxl:w-[27%]">
            <SelectProperty />
          </div>
        </div>
      </div>
      <PricingCarouselComponent />
      <Pricing />
      {/*SERVICE INFO*/}
      <section>
        <div className="bg-row_bg w-full flex flex-col items-center justify-center px-3 ">
          {homeServices.map(({ className, content }: any, index: any) => {
            return (
              <div
                className={`xl:container ${
                  index % 2 == 0
                    ? "flex flex-col lg:flex-row"
                    : "flex flex-col-reverse lg:flex-row-reverse"
                } pb-[60px]`}
                key={index}
              >
                <ServiceInfo content={content} className={className} />
              </div>
            );
          })}
        </div>
      </section>
      {/*ALL OUR SERVICES*/}
      <section>
        <div className="bg-row_bg w-full flex flex-col items-center justify-center px-3">
          <div className="w-full md:container flex flex-wrap pb-[60px]">
            <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
              <h2 className="text-dark-blue text-4xl font-medium font-bold">
                All Our Services
              </h2>
            </div>
            <div className=" hidden lg:flex flex-wrap lg:gap-2 xl:gap-6 xxl:gap-9">
              {ourServices.map(({ list, title }, index) => {
                return (
                  <OurServicesComponent key={index} list={list} title={title} />
                );
              })}
            </div>
            <div className="lg:hidden  w-full md:container ">
              <CarouselComponent
                list={ourServices}
                component={OurServicesComponent}
                className="h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/*HOW IT WORKS*/}

      <section>
        <div className="bg-row_bg w-full flex flex-col items-center justify-center px-3">
          <div className="  w-full md:container flex flex-col  flex-wrap  pb-[60px]">
            <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
              <h2 className="text-dark-blue text-4xl font-medium font-bold">
                How it works?
              </h2>
            </div>
            <StepperComponent />
            <div className=" hidden w-full md:flex  justify-center xl:flex-nowrap gap-1 xl:gap-7">
              {howItWorks.map(({ title, paragraph }: any, index) => {
                return (
                  <HowItWorks
                    key={index}
                    title={title}
                    paragraph={paragraph}
                    index={index}
                    type="Home"
                  />
                );
              })}
            </div>
            <div className=" flex md:hidden  w-full h-[300px]  justify-center xl:flex-nowrap gap-1 xl:gap-7">
              <CarouselComponent list={howItWorks} component={HowItWorks} />
            </div>
          </div>
        </div>
      </section>
      {/*B2B SECTION*/}
      <section>
        <div className="bg-lime w-full flex justify-center px-3 ">
          <div className="sm:container w-full  flex flex-col flex-wrap pt-[80px] pb-[60px]">
            <div className="border-l-[8px] border-white mb-[30px] px-5 py-2">
              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-white tracking-[1px]">
                Placing Repeat Orders ?
              </h4>
              <h2 className="text-4xl text-white font-semibold">
                Why Not Join Our B2B
                <br />
                Service
              </h2>
            </div>
            <div className=" w-full xl:w-2/5">
              <p className="text-white text-[15px] leading-[27px]">
                For those customers needing to make regular orders you can get
                direct access to our bespoke order management system for live
                updates.We offer a fully national service and can provide EPCs,
                Electrical Reports, Gas Safety Certificates plus many additional
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" w-full bg-row_bg flex  justify-center px-3">
          <div className="sm:container flex  flex-wrap justify-between items-center  pt-[80px] pb-[60px] ">
            <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
                We are Nationwide Surveyors
              </h4>
              <h2 className="text-4xl text-[#1a1a1a] font-medium">
                With Local
                <br />
                Coverage!
              </h2>
            </div>
            <div className="mb-4 sm:mb-0">
              <p className="text-dark-blue">
                It only takes under three minutes to place an order
                <br className="hidden sm:block" />
                and then leave the rest on us.
              </p>
            </div>
            <div>
              <ButtonComponent
                text="Instant Quote and order here"
                className=" flex font-semibold uppercase border-2 border-dark-blue hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm ease-in duration-200"
              >
                <span className="flex mt-1.5 ml-2">
                  <FontAwesomeIcon className="w-1.5" icon={faChevronRight} />
                  <FontAwesomeIcon className="w-1.5" icon={faChevronRight} />
                </span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
