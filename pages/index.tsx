import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightLong,
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
import ButtonComponent from "../components/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselComponent from "../components/carousel.component";
import {useRouter} from "next/router";
import BoxBackgroundComponent from "../components/boxBackground.component";
import Image from "next/image";
import styles from "../styles/service.module.css";
import Link from "next/link";

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

const content = homeServices[0].content;



export default function Home() {
  const { smallDevice, middleDevice, largeDevice }: any =
    useContext(DeviceContext);
  const router = useRouter();
  return (
    <div className="ml-auto mr-auto">
      <Head>
        <title>Landlord Certifications | Nationwide Surveyors</title>
        <meta
          name="Nationwide Surveyors"
          content="Generated by create next app"
        />
      </Head>
      <div className="w-full bg-white lg:min-h-[530px] lg:px-10 pt-[40px] flex flex-wrap justify-around ">
            <div className="w-full mt-4 lg:mt-0 bg-dark-blue order-2 lg:bg-white md:order-1 lg:w-[63.5%] xl:w-[62.4%]">
              <HomeTab />
            </div>
            <div className="lg:order-2 w-[95%] lg:w-[27.5%] xl:w-[26.7%] ">
              <SelectProperty />
            </div>
      </div>
      <BoxBackgroundComponent className='h-[700px] pt-1'
        greyStyle='w-[60%] h-[50%] md:w-[40%]'
        limeStyle='right-0 bottom-0 w-[60%] h-[40%] md:w-[40%]'
      >
        <div className='w-full py-4 mt-3 lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto'>
          <div className='px-2 ml-4 md:ml-0'>
            <div className='border-[2px] w-[70px] rounded-full mt-2 mb-1 md:w-28 border-lime'/>
            <h2 className='text-[18px] font-semibold md:text-[30px] mb-4'>Services Bundle Offers</h2>
          </div>
          <PricingCarouselComponent />
          <Pricing />
        </div>
      </BoxBackgroundComponent>
      <div className="w-full py-5 lg:w-[80%] mx-auto">
        <div className="pb-[60px] flex gap-6 flex-col lg:flex-row">
          <>
            {content.image && (
              <BoxBackgroundComponent className={'h-[300px] w-full lg:w-5/12 p-2 lg:h-auto'}
                                      greyStyle='w-[15%] h-[50%] top-[0] right-[0] '
                                      limeStyle='w-[15%] h-[90.5%] top-[5%] -right-[5%]'
                                      contentStyle='p-4  m-auto'>
                <Image
                  className="h-full w-full cursor-pointer"
                  src={content.image}
                  alt="ServiceInfo"
                />
              </BoxBackgroundComponent>
            )}
            <div
              className={`${content.image ? "lg:w-[58%]" : "lg:w-12/12"} py-4 px-3`}
            >
              {content.type !== "Service" && (
                <>
                  <div className="mb-[30px] py-2">
                    <div className="flex flex-row items-baseline">
                      <div className="border-lime border-b-[3px] w-[40px]"></div>
                      <h4 className="text-xl text-lime mb-[2px] mt-[5px] uppercase tracking-[1px]">
                        {content.subTitle}
                      </h4>
                    </div>
                    <h2 className="text-4xl text-[#1a1a1a] font-medium">
                      {content.title}
                    </h2>
                  </div>
                  <p className={`${styles.servicePara2}`}>{content.paragraph1}</p>
                  <div>
                    <p className={styles.servicePara2}>{content.paragraph2}</p>
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
        </div>
      </div>
      <div className="w-full py-5 lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto ">
            <div className="w-full flex flex-row gap-x-2">
              <div className="flex flex-col justify-between items-center py-5 mb-8">
                <div className="w-[1px] items-center justify-between py-10 flex flex-col bg-dark-blue h-full">
                  <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                  <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                  <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                  <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                </div>
              </div>
                <div className="flex flex-col items-center justify-center px-3 ">
                  {
                    homeServices.map(({ className, content }: any, index: any) => {
                      if(index!==0){
                        return (
                        <div
                          className={`${
                            index % 2 == 0
                              ? "flex-col lg:flex-row"
                              : "flex-col-reverse  lg:flex-row-reverse"
                          } pb-[60px] flex gap-6`}
                          key={index}
                        >
                          <ServiceInfo content={content} index={index} className={className} />
                        </div>
                        );
                      }
                  })}
              </div>
            </div>
        </div>
          {/*ALL OUR SERVICES*/}
          <div className="w-full py-5 lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto ">
          <section>
            <div className="w-full flex flex-col items-start md:items-center justify-center px-3">
              <div className="w-full md:container flex flex-wrap pb-[60px]">
                <div className="mb-[30px] pr-5 py-2">
                  <div className='border-lime border-b-4 rounded-full w-[40%] mb-3'></div>
                  <h2 className="text-black text-4xl font-medium font-semibold">
                    All Our Services
                  </h2>
                </div>
                <div className=" hidden lg:flex lg:gap-2 xl:gap-6 xxl:gap-9">
                  {ourServices.map(({ list, title, image }, index) => {
                    return (
                        <OurServicesComponent
                            key={index}
                            list={list}
                            title={title}
                            image={image}
                        />
                    );
                  })}
                </div>
                <div className="lg:hidden w-full">
                  <CarouselComponent
                      list={ourServices}
                      component={OurServicesComponent}
                      className="h-[420px]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/*HOW IT WORKS*/}

          <section>
            <div className="w-full flex flex-col items-center justify-center px-3">
              <div className="w-full md:container flex flex-col flex-wrap pb-[0px]">
                <div className=" border-lime mb-[30px] py-2">
                  <div className="border-b-4 border-lime rounded-full w-[85px] mb-3"></div>
                  <h2 className="text-black text-4xl font-medium font-semibold">
                    How it works?
                  </h2>
                </div>
                {/*<StepperComponent />*/}
                <div className="hidden mt-10 w-full md:flex justify-center xl:flex-nowrap gap-1 xl:gap-7">
                  {howItWorks.map(({ title, paragraph, image }: any, index) => {
                    return (
                        <HowItWorks
                            key={index}
                            title={title}
                            paragraph={paragraph}
                            index={index}
                            type="Home"
                            image={image}
                        />
                    );
                  })}
                </div>
                <div className="flex mt-10  md:hidden w-full h-[300px] justify-center xl:flex-nowrap gap-1 xl:gap-7">
                  <CarouselComponent list={howItWorks} component={HowItWorks} className='min-h-520px '/>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/*B2B SECTION*/}
      <section>
        <div className="w-full flex justify-center">
          <div className="w-full lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto px-3">
            <div className="w-full flex flex-row justify-between items-start flex-wrap pt-[80px] pb-[60px]">
              <div className="flex flex-col border-white mb-[30px] py-2">
                <div className='border-b-4 border-lime rounded-full w-[70px] mb-3'></div>
                <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-black tracking-[1px]">
                  Placing Repeat Orders ?
                </h4>
                <h2 className="text-4xl text-black font-semibold">
                  Why Not Join Our B2B
                  Service
                </h2>
                  <div className="hidden w-[60%] lg:flex ">
                    <ButtonComponent
                        text="Instant Quote and order here"
                        className="w-full flex mt-5  bg-lime self-start font-semibold uppercase items-center justify-center hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm ease-in duration-200"
                        type="button"
                        onClick={() =>{
                          router?.push({
                            pathname: "/order-now",
                          });}
                        }
                    >
                    </ButtonComponent>
                  </div>
                </div>
              <div className="w-full self-center xl:w-[44%]">
                <p className="text-black text-[15px] leading-[27px]">
                  For those customers needing to make regular orders you can get
                  direct access to our bespoke order management system for live
                  updates.We offer a fully national service and can provide
                  EPCs, Electrical Reports, Gas Safety Certificates plus many
                  additional services.
                </p>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <ButtonComponent
                  text="Instant Quote and order here"
                  className="w-full flex  bg-lime self-start font-semibold uppercase items-center justify-center hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm ease-in duration-200"
                  type="button"
                  onClick={() =>{
                    router?.push({
                      pathname: "/order-now",
                    });}
                  }
              >
              </ButtonComponent>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
