import React from "react";
import {ourServices, howItWorks, homeServices} from "../utility/constants";
import OurServicesComponent from "../components/ourServices.component";
import Head from "next/head";
import HowItWorks from "../components/howItWorksCard.component";
import CarouselComponent from "../components/carousel.component";
import PricingCarouselComponent from "../components/pricingCarousel.component";
import Pricing from "../components/pricing.component";
import BoxBackgroundComponent from "../components/boxBackground.component";
import ButtonComponent from "../components/button.component";
import ServiceInfo from "../components/serviceInfo.component";
import SelectProperty from "../components/selectProperty.component";
import router from "next/router";
import OurServices2 from "../components/ourServices2.component";


function OurServices(props: any) {
    return (
      <div className="ml-auto mr-auto">
          <Head>
              <title>Landlord Certifications | Nationwide Surveyors</title>
              <meta
                name="description"
                content="Nationwide Surveyors provide a wide range of domestic and commercial services to Private Landlords, Homeowners, Buyers, Sellers, Property Managers, Housing Associations and many more."
              />
          </Head>
          <div className="bg-our_services bg-cover w-full">
              <div className="flex w-full bg-[#000000]/70 backdrop-brightness-100 pt-[45px] pb-[70px] lg:pb-[30px] lg:min-h-[450px] xl:min-h-[552px] flex flex-row flex-wrap justify-around">
                  <div className="w-full px-5 md:px-10 lg:px-0 lg:mt-10 lg:w-[40.5%] xl:w-[35.7%]">
                      <div className="border-b-4 border-lime rounded-full w-[85px] mb-3"></div>
                      <h1 className="font-bold text-white uppercase text-[26px] ">Our Services</h1>
                      <div>
                          <p className="pt-10 text-white text-justify">
                              We provide a wide range of domestic and commercial services to Private Landlords, Homeowners, Buyers, Sellers, Property Manager, Housing Associations and many more.
                              <br/>
                              <br/>
                              <br/>
                              Our online ordering system allows you to add multiple properties with a variety of services, in just a single order.
                          </p>

                      </div>
                  </div>
                  <div className="mt-10 px-5 md:px-10 lg:px-0 lg:mt-0 lg:order-2  w-full lg:w-[27.5%] xl:w-[26.7%] ">
                      <SelectProperty
                          sticky={false}/>
                  </div>
              </div>
          </div>

          {/*SERVICE INFO*/}

          <div className="relative w-full xxl:max-w-[1440px] xxl:mx-auto mt-8">
              <div className="relative w-full flex flex-row justify-center">
                  <div className="flex flex-col justify-between items-center py-5 mb-8 lg:w-[2%] xxl:w-[1%] hidden md:block">
                      <div className="w-[1px] items-center justify-between py-10 flex flex-col bg-dark-blue h-full">
                          <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                          <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                          <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                          <div className="bg-lime rounded-full w-[5px] h-[8%]"></div>
                      </div>
                  </div>
                  <div className="flex justify-center lg:justify-start xl:justify-center content-container-homepage lg:w-[93%] xxl:w-[95%]">
                      <div className="w-[85%] lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto">
                          <div className="flex flex-col items-center justify-center ">
                              <div className='flex flex-col self-start mb-6'>
                                  <div className='border-lime border-b-4 rounded-full w-[40%] mb-3'></div>
                                  <h2 className="text-black text-4xl font-semibold">
                                      All Our Services
                                  </h2>
                              </div>
                              {
                                  ourServices.map(({ list, title, image }, index) => {
                                      return (
                                          <div
                                              className={`w-full ${
                                                  index % 2 != 0
                                                      ? "flex-col-reverse lg:flex-row"
                                                      : "flex-col-reverse  lg:flex-row-reverse"
                                              } pb-[60px] flex gap-6`}
                                              key={index}
                                          >
                                              <OurServices2 title={title} image={image} list={list}/>
                                          </div>
                                      );
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

              <BoxBackgroundComponent className='h-[650px] pt-5'
                                      greyStyle='w-[40%] h-[50%] md:w-[40%] hidden md:block'
                                      limeStyle='right-0 bottom-0 w-[60%] h-[40%] md:w-[60%] hidden md:block'
              >
                  <div className='w-full py-5 mt-3 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto'>
                      <div className='px-2 ml-4 md:ml-0'>
                          <div className='border-[2px] rounded-full w-[70px] mt-2 mb-1 md:w-28 border-lime'/>
                          <h2 className='text-[18px] font-semibold md:text-[30px] mb-4'>Services Bundle Offers</h2>
                      </div>
                      <PricingCarouselComponent />
                      <Pricing />
                  </div>
              </BoxBackgroundComponent>

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
                  <div className="w-full lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto px-3">
                      <div className="w-full flex flex-row justify-between items-start flex-wrap pt-[80px] pb-[60px]">
                          <div className="flex flex-col border-white mb-[30px] py-2">
                              <div className='border-b-4 rounded-full border-lime w-[70px] mb-3'></div>
                              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-black tracking-[1px]">
                                  Placing Repeat Orders ?
                              </h4>
                              <h2 className="text-4xl text-black font-semibold">
                                  READY TO PLACE ORDER
                              </h2>
                              <div className="hidden w-[60%] lg:flex ">
                                  <ButtonComponent
                                    text="Instant Quote and order here"
                                    className="w-full flex mt-5  bg-lime self-start font-semibold uppercase items-center justify-center hover:bg-dark-blue hover:text-white px-[22px] py-[12px] text-[12px] ease-in duration-200"
                                    type="button"
                                    onClick={() =>{
                                        router?.push({
                                            pathname: "/order-now",
                                        });
                                    }
                                    }
                                  >
                                  </ButtonComponent>
                              </div>
                          </div>
                          <div className="w-full self-center xl:w-[44%]">
                              <p className="text-black text-[16px] leading-[27px]">
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
                                });
                            }
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

export default OurServices;
