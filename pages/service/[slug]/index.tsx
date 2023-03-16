import React from "react";
import { howItWorks, service } from "../../../utility/constants";
import ServiceInfo from "../../../components/serviceInfo.component";
import Head from "next/head";
import HowItWorks from "../../../components/howItWorksCard.component";
import ServiceHeader from "../../../components/serviceHeader.component";
import ButtonComponent from "../../../components/button.component";
import {router} from "next/client";
import { faqCardData, faqAccordionData } from "../../../utility/constants";
import FaqAccordionComponent from "../../../components/faqAccordion.component";
import BoxBackgroundComponent from "../../../components/boxBackground.component";
import TextField from "../../../components/textFied.component";
import {VALIDATION_CONFIG} from "../../../config/validation.config";
import { useForm } from "react-hook-form";

function Service({ certificate }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({mode: "onChange"});
  return (
    <>
      {certificate[0]?.servicesDec && <ServiceHeader servicesDec={certificate[0]?.servicesDec} />}
      <div className="w-full flex justify-center bg-white">
        <div className="w-full xxl:container flex flex-col lg:flex-row">
          <Head>
            <title>{certificate[0].title}</title>
            {
              certificate[0]?.metaData && Object.entries(certificate[0]?.metaData).map((data) => {
                return (
                  <meta
                    name={data[0]}
                    content={data[1]}
                  />
                );
              })
            }

          </Head>
          <div className="w-full py-10 lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto">
            <div className=" px-5">
              <div className="border-b-4 border-lime w-[105px] rounded-full mb-3"></div>
              <h2 className="text-lime text-4xl font-medium lg:mb-5">
                Services
              </h2>
              {certificate?.map(({ className, content }: any, index: any) => {
                return (
                  <>
                    <div
                      className={`${
                        index % 2 != 0
                          ? "flex flex-col lg:flex-row"
                          : "flex flex-col-reverse lg:flex-row-reverse"
                      } pb-[60px] gap-6 `}
                      key={index}
                    >
                      <ServiceInfo content={content} className={className} />
                    </div>

                  </>
                );
              })}
            </div>
            <div className="2xl:w-8/12 px-4">
              <section>
                <div className=" w-full flex flex-col items-center justify-center px-3">
                  <div className="w-full md:container flex flex-col  flex-wrap  pb-[60px]">
                    <div className="pt-6 pb-20">
                      <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                      <h2 className="text-dark-blue text-4xl font-medium ">
                        How it works?
                      </h2>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center md:items-center xl:flex-nowrap gap-1 xl:gap-7 gap-y-10">
                      {howItWorks.map(({ title, paragraph , image }: any, index) => {
                        return (
                          <HowItWorks
                            key={index}
                            title={title}
                            paragraph={paragraph}
                            type="service"
                            index={index}
                            image={image}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="w-full flex flex-col gap-y-4 md:flex-row md:justify-between">
                  <div className="w-full md:w-[50%]">
                    <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                    <h2 className="text-dark-blue text-3xl font-medium ">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-dark-blue text-[15px] leading-[27px] mt-5 mb-10">
                      I am promo text. Click edit button to change this text. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
                    </p>
                    <FaqAccordionComponent
                      accordionData={faqAccordionData}
                      iconMinusColor="#fff"
                      iconPlusColor="#8d9297"
                      headerBackground="bg-white"
                      headerTitleColor="text-gray-400"
                      activeHeadBackgorund="bg-white"
                      hoverHeadBackground="bg-lime"
                      defaultActiveaccordion="1"
                      navigateFromFAQ
                    />
                  </div>
                  <div className="w-full  md:w-[40%]">
                    <BoxBackgroundComponent
                      className='h-[700px] pt-5 '
                      greyStyle='-right-3 lg:-right-5 top-10 w-[60%] h-[50%] md:w-[40%]'
                      limeStyle='-left-3 lg:-left-5 bottom-10 w-[60%] h-[40%] md:w-[40%]'
                    >
                      <div className=" h-full rounded-lg p-5 border-lime border-t-8 bg-white drop-shadow-lg self-center">
                        <h2 className="text-dark-blue text-3xl font-medium ">
                          Ask A Different Questions
                        </h2>
                        <p className="text-dark-blue text-[15px] leading-[27px] mt-2 mb-10">
                          Ask your query by filling this form.
                        </p>
                        <form onSubmit={{}}>
                                    <div className="w-full flex flex-col items-center md:flex-row flex-wrap gap-y-3 lg:gap-y-6 mt-5 justify-between">
                                      <div className="w-full">
                                        <TextField
                                          lable="First Name"
                                          name="first_name"
                                          className="text-lg text-dark-blue"
                                          errors={errors}
                                          register={register}
                                          errorClass="text-[#ff0000] text-sm float-right"
                                          required={true}
                                          inputClass="border-lime py-2.5 px-3"
                                        />
                                      </div>
                                      <div className="w-full" >
                                        <div className="">
                                          <p className="text-base md:text-lg text-dark-blue font-semibold mr-3 ">
                                            Postcode where your property exist?
                                          </p>
                                          <p className="text-[10px] md:text-sm my-1">
                                            This is to check the availability and converage
                                          </p>
                                          <TextField
                                            placeholder="Enter postcode here"
                                            className="text-lg text-dark-blue font-semibold"
                                            errors={errors}
                                            register={register}
                                            errorClass="text-[#ff0000] text-sm font-semibold float-right"
                                            required={true}
                                            name="post_code"
                                            inputClass=" border-lime py-2.5 px-3"
                                            reactHookValidations={{
                                              required: VALIDATION_CONFIG.required,
                                              validate: VALIDATION_CONFIG.postCode,
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full ">
                                        <TextField
                                          lable="Phone"
                                          name="phone"
                                          errors={errors}
                                          register={register}
                                          errorClass="text-[#ff0000] text-sm float-right"
                                          required={true}
                                          pattern={/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{5}\)?[\s-]?\d{4,5}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/}
                                          className="text-lg text-dark-blue"
                                          inputClass="border-lime py-2.5 px-3"
                                        />
                                      </div>
                                      <div className="w-full ">
                                        <TextField
                                          lable="Email"
                                          name="email"
                                          errors={errors}
                                          register={register}
                                          errorClass="text-[#ff0000] text-sm float-right"
                                          pattern={/^\S+@\S+$/i}
                                          required={true}
                                          className="text-lg text-dark-blue"
                                          inputClass="border-lime py-2.5 px-3"
                                        />
                                      </div>
                                      <div className="w-full md:px-0">
                                        <ButtonComponent
                                          text="Next"
                                          className="bg-lime text-dark-blue uppercase text-lg font-semibold px-[2px] sm:px-[20px] py-[13px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                                        />
                                      </div>
                          </div>
                        </form>
                      </div>
                    </BoxBackgroundComponent>
                  </div>
                </div>
              </section>
              <div className="w-full flex justify-center mt-10">
                <div className="w-full lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto px-3">
                  <div className="w-full flex flex-row justify-between items-start flex-wrap ">
                    <div className="flex flex-col border-white lg:mb-[30px] py-2">
                      <div className='border-b-4 border-lime w-[70px] mb-3'></div>
                      <h2 className="text-xl lg:text-4xl text-dark-blue font-semibold">
                        READY TO PLACE ORDER
                      </h2>
                      <p className="text-[10px] md:text-[12px] mt-[5px] uppercase text-dark-blue ">
                        Click on ‘Order Now’ to place a new order.
                      </p>
                      <div className="hidden w-[60%] lg:flex ">
                        <ButtonComponent
                          text="Order Now"
                          className="w-full flex mt-5  bg-lime self-start font-semibold uppercase items-center justify-center hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm ease-in duration-200"
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
                      <p className="text-dark-blue text-[15px] leading-[27px]">
                        New orders can be placed anytime through our website with a smooth and quick online order form.
                      </p>
                    </div>
                  </div>
                  <div className="my-5 lg:hidden">
                    <ButtonComponent
                      text="Order Now"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Service.getInitialProps = (props: any) => {
  const { slug } = props.query;
  const certificate: any = service.filter((ele) => {
    return ele.content.certificate === slug;
  });
  return { certificate };
};

export default Service;
