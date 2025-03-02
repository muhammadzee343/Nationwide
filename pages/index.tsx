import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
    faCartShopping,
    faChevronDown,
    faChevronRight,
    faPhone,
    faXmark,
    faCheck
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
import React, {useContext, useState, useLayoutEffect, useEffect} from "react";
import ServiceInfo from "../components/serviceInfo.component";
import {homeReviewsData, homeServices, howItWorks, ourServices, updateHomeReviewsData} from "../utility/constants";
import OurServicesComponent from "../components/ourServices.component";
import HowItWorks from "../components/howItWorksCard.component";
import ButtonComponent from "../components/button.component";
import CarouselComponent from "../components/carousel.component";
import {useRouter} from "next/router";
import BoxBackgroundComponent from "../components/boxBackground.component";
import Image from "next/image";
import styles from "../styles/service.module.css";
import Reviews from "../components/reviews.component";

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
  faChevronRight,
  faCheck
);

/*const content = homeServices[0].content;*/

const Home = (props) => {
    let homeReviews = props.homeReviews;
    let content = props.content;

  const { smallDevice, middleDevice, largeDevice }: any =
    useContext(DeviceContext);
  const router = useRouter();
  const [width, setWidth] = useState(1000);

  updateHomeReviewsData(homeReviews.home_screen_reviews)

  useLayoutEffect(()=> {
    window.addEventListener('resize', ()=> {
      setWidth(window.innerWidth);
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Landlord Certifications | Nationwide Surveyors</title>
        <meta
          name="description"
          content="Nationwide Surveyors offer all types of Landlord Certifications & reports for domestic and commercial properties at competitive prices with Nationwide Coverage."
        />
      </Head>

      <div className="w-full xxl:max-w-[1440px] mx-auto bg-white lg:min-h-[480px] xl:min-h-[530px] md:px-0 xl:px-[39px] pt-[40px] flex flex-wrap justify-center lg:justify-between lg:mb-2 pl-[0px] lg:pl-[20px] lg:pr-[5px] sm:pl-[0px] sm:pr-[0px] xl:pl-[39px]">
            <div className="w-full mt-16 lg:mt-0 bg-dark-blue order-2 lg:bg-white md:order-1 lg:w-[70%] sm:mt-[40px]">
              <HomeTab />
            </div>
            <div className="lg:order-2 w-[95%] lg:w-[29%] xl:w-[30%] flex justify-center px-2 sm:px-[15px] sm:w-full xl:pr-[0px]">
              <SelectProperty
                  sticky={false}
              />

            </div>
      </div>
      <BoxBackgroundComponent className='h-[650px] pt-1'
                              greyStyle='w-[40%] h-[50%] md:w-[40%] hidden lg:block'
                              limeStyle='right-0 bottom-0 w-[60%] h-[40%] md:w-[60%] hidden lg:block'
      >
        <div className='w-full py-4 mt-3 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1190px] mx-auto'>
          <div className='px-[20px] lg:px-[0px] md:ml-0'>
            <div className='border-[2px] w-[70px] rounded-full mt-2 mb-1 md:w-28 border-lime'/>
            <h2 className='text-[18px] font-semibold md:text-[30px] mb-4'>Services Bundle Offers</h2>
          </div>
          <PricingCarouselComponent />
          <Pricing />
        </div>
      </BoxBackgroundComponent>
      <div className="w-full py-5 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto px-[20px]">
        <div className="pb-[60px] pt-10 flex flex-col flex-col-reverse justify-between lg:flex-row gap-x-8">
            {content.image && (
              <BoxBackgroundComponent className={'h-[200px] md:h-[300px] lg:h-[300px] w-[100%] lg:w-[40%] p-2 lg:h-auto'}
                                      greyStyle='w-[15%] h-[50%] -top-[10%] lg:-top-[6%] right-[5%] lg:-right-[4%] '
                                      limeStyle='w-[15%] h-full lg:h-[95%] top-0 lg:top-[5%] -right-[0%]  lg:-right-[8%]'
                                      contentStyle='m-auto w-[90%] lg:w-full'>
                <Image
                  className="h-full w-full cursor-pointer object-cover"
                  src={content.image}
                  alt="ServiceInfo"
                />
              </BoxBackgroundComponent>
            )}
            <div
              className={`${content.image ? "lg:w-[56%]" : "lg:w-12/12"} py-4`}
            >
              {content.type !== "Service" && (
                <>
                  <div className="mb-[30px] py-2">
                    <div className="flex flex-row items-baseline">
                      <div className="border-lime border-b-[3px] w-[40px] mb-6"></div>
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
                </>
              )}
            </div>
        </div>
      </div>
      <div className="relative w-full xxl:max-w-[1440px] xxl:mx-auto">
        <div className="relative w-full flex flex-row justify-center">
          <div className="flex flex-col justify-between items-center py-5 mb-8 lg:w-[2%] xxl:w-[1%] hidden md:block">
            <div className="w-[1px] items-center justify-between py-10 flex flex-col bg-dark-blue h-full">
              <div className="bg-lime rounded-full w-[5px] h-[8%] relative top-[-42px]"></div>
              <div className="bg-lime rounded-full w-[5px] h-[8%] relative top-[-27px]"></div>
              <div className="bg-lime rounded-full w-[5px] h-[8%] relative top-[-90px]"></div>
              <div className="bg-lime rounded-full w-[5px] h-[8%] relative top-[-180px]"></div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start xl:justify-center content-container-homepage lg:w-[93%] xxl:w-[95%]">
            <div className="w-[90%] lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto">
              <div className="flex flex-col items-center justify-center ">
                <div className='flex flex-col self-start mb-6'>
                  <div className='border-lime border-b-4 rounded-full w-[40%] mb-3'></div>
                  <h2 className="text-lime text-4xl font-medium font-semibold">
                    Popular Services
                  </h2>
                </div>
                {
                  homeServices.map(({ className, content }: any, index: any) => {
                    if(index!==0){
                      return (
                        <div
                          className={`${
                            index % 2 == 0
                              ? "flex-col-reverse lg:flex-row"
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
                <div className="hidden lg:flex w-full flex-row justify-between">
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
                      className="h-[470px]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/*HOW IT WORKS*/}

          <section>
            <div className="w-full flex flex-col items-center justify-center px-[20px]">
              <div className="w-full md:container flex flex-col flex-wrap pb-[0px]">
                <div className=" border-lime mb-[30px] py-2">
                  <div className="border-b-4 border-lime rounded-full w-[85px] mb-3"></div>
                  <h2 className="text-black text-4xl font-medium font-semibold">
                    How it works?
                  </h2>
                </div>
                {/*<StepperComponent />*/}
                <div className="hidden mt-10 w-full md:flex justify-between xl:flex-nowrap gap-1 xl:gap-7">
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
                <div className="flex mt-10  md:hidden w-full h-[300px] justify-center xl:flex-nowrap gap-1 lg:gap-7">
                  <CarouselComponent list={howItWorks} component={HowItWorks} className='h-420px '/>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/*B2B SECTION*/}
      <section>
        <div className="w-full flex justify-center">
          <div className="w-[90%] lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto">
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
                <p className="text-black text-[15px] text-justify leading-[27px]">
                  For those customers needing to make regular orders you can get
                  direct access to our bespoke order management system for live
                  updates.We offer a fully national service and can provide
                  EPCs, Electrical Reports, Gas Safety Certificates plus many
                  additional services.
                </p>
              </div>
            </div>
            <div className="w-full mb-5 lg:hidden justify-center flex">
              <ButtonComponent
                  text="Instant Quote and order here"
                  className="w-[80%] flex  bg-lime self-start font-semibold uppercase items-center justify-center hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-[12px] ease-in duration-200"
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

        <Reviews reviewsData={homeReviewsData}/>
    </div>
  );
}

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BASE_URL_DEV}/services/home_screen_reviews`);
    const homeReviews = await res.json();
    const content = await homeServices[0].content;
    console.log(content);
    return {
        props: {
            homeReviews,
            content
        },
    };
};
export default Home;