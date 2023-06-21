import React, {useState, useEffect, useContext} from "react";
import { SidebarContext } from "../../../context/sidebarContext";
import {howItWorks, service, updateServiceData} from "../../../utility/constants";
import ServiceInfo from "../../../components/serviceInfo.component";
import Head from "next/head";
import HowItWorks from "../../../components/howItWorksCard.component";
import ServiceHeader from "../../../components/serviceHeader.component";
import ButtonComponent from "../../../components/button.component";
import QuoteButtonComponent from "../../../components/quoteButton.component";
import router from "next/router";
import FaqAccordionComponent from "../../../components/faqAccordion.component";
import BoxBackgroundComponent from "../../../components/boxBackground.component";
import TextField from "../../../components/textFied.component";
import {VALIDATION_CONFIG} from "../../../config/validation.config";
import { useForm } from "react-hook-form";
import TextArea from "../../../components/textArea.component";
import Swal from "sweetalert2";
import CarouselComponent from "../../../components/carousel.component";
import PricingCarouselComponent from "../../../components/pricingCarousel.component";
import Pricing from "../../../components/pricing.component";

function Service({ data, slug }: any) {
    updateServiceData(data.services_content)
    const certificate = service.filter((ele: any) => ele.certificate === slug);

  const { setShowDrawer, setOverlay, setPropertyType, propertyType } =
    useContext(SidebarContext);
    const displayDrawer = (propertyType: string) => {
    setPropertyType(propertyType);
    setOverlay(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
    setShowDrawer(true);
    }, 1);
    };

  //QUOTE BUTTON HIDE AND SHOW ON SCROLL
  const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const scrollBar = () => {
          if (window.scrollY >= 450) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
        window.addEventListener('scroll', scrollBar);
        return () => {
          window.removeEventListener('scroll', scrollBar);
        };
      }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm({mode: "onChange"});
  const [next, setNext] = useState(false )
  const requestCallBack = async (data:any)=>{

      const body = {
        contact_form: {
          first_name: data.full_name,
          last_name: "",
          phone: data.phone,
          email: data.email,
          existing_job_enquiry: "not_sure",
          "type_of_enquiry": "availability_or_quotation",
          post_code: data.post_code,
          "contact_by": "email",
          enquiry: data.enquiry
        },
        services: [certificate[0].id],
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        `${process.env.BASE_URL_DEV}contact_forms`,
        requestOptions
      );

      if (response.ok) {
        let data = await response.json();
        Swal.fire({
          title: 'Success!',
          text: 'We have received your query',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor:'#c2cf10'
        })
        reset({
          full_name: "",
          phone: "",
          email:"",
          post_code: "",
          enquiry: ""
        })
        setNext(false)
      } else {
        reset({
          full_name: "",
          phone: "",
          email:"",
          post_code: "",
          enquiry: ""
        })
        alert("Something Went wrong");
      }
  }

  return (
    <>
      {certificate[0]?.servicesDec && <ServiceHeader servicesDec={certificate[0]?.servicesDec} serviceTitle={certificate[0]?.bannerTitle} serviceBanner={certificate[0]?.bannerImage} serviceBannerMobile={certificate[0]?.bannerImageMobile} certificate={certificate}/>}
      <div className="w-full flex justify-center bg-white">
      {showButton && (
        <QuoteButtonComponent
          text="GET INSTANT QUOTE"
          className="fixed top-[30%] right-[-77px] hidden lg:block hover:bg-lime hover:text-black font-semibold uppercase px-[20px] h-[52px] max-h-[52px]  bg-dark-blue text-white ease-in duration-200 w-[205px] rotate-[-90deg] rounded-t-[10px] z-40 drop-shadow-sm"
          onClick={() => displayDrawer("residential_property")}
          type="button"
        />
      )}
        <div className="w-full xxl:continer flex flex-col lg:flex-row">
          <Head>
            <title>{certificate[0]?.title}</title>
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
          </div>
          </div>
          <div className="w-full pb-10 lg:min-[970px] xl:min-w-[100%] xl:max-w-[100%] ">
          <BoxBackgroundComponent className='h-[650px] pt-1'
                                greyStyle='w-[40%] h-[50%] md:w-[40%] hidden lg:block'
                                limeStyle='right-0 bottom-0 w-[60%] h-[40%] md:w-[60%] hidden lg:block'
        >
            <div className='w-full py-4 mt-3 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1190px] mx-auto '>
                <div className='px-[20px] lg:px-[0px]  md:ml-0'>
                    <div className='border-[2px] w-[70px] rounded-full mt-2 mb-1 md:w-28 border-lime'/>
                    <h2 className='text-[18px] font-semibold md:text-[30px] mb-4'>Services Bundle Offers</h2>
                </div>
                <PricingCarouselComponent />
                <Pricing />
            </div>
        </BoxBackgroundComponent>

            
            </div>
            <div className="w-full flex justify-center bg-white">
        <div className="w-full xxl:continer flex flex-col lg:flex-row">
          <div className="w-full py-5 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto ">
            <div className="px-[20px] sm:px-[20px] md:px-[20px] lg:px-[0px]">
              <div className="border-b-4 border-lime w-[105px] rounded-full mb-3"></div>
              <h2 className="text-lime text-4xl lg:mb-5">
                Services
              </h2>
              {certificate[0]?.content?.map((item: any, index: any) => {
                return (
                  <>
                    
                    <div
                      className={`flex chuu ${
                        index % 2 != 0
                          ? "flex-col-reverse lg:flex-row"
                          : "flex-col-reverse lg:flex-row-reverse"
                      }  gap-6`}
                      key={index}
                    >
                      <ServiceInfo content={item} className={item.className} />
                      
                    </div>
                    <div className=" h-[0.05em] w-full my-[40px] bg-[#dfdfdf]"></div>

                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     

        <div className="w-full py-5 lg:min-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto ">
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
                        <div className="flex mt-10  md:hidden w-full  justify-center xl:flex-nowrap gap-1 lg:gap-7">
                            <CarouselComponent list={howItWorks} component={HowItWorks} className='h-420px '/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="w-full flex justify-center bg-white">
            <div className="w-full xxl:continer flex flex-col lg:flex-row">
                <div className="w-full py-10 lg:w-[970px] xl:min-w-[1170px] xl:max-w-[1170px] mx-auto  ">
                    <div className="2xl:w-8/12 px-[20px] sm:px-[20px] md:px-[20px] lg:px-[0px]">

                        <section>
                            <div className="w-full flex flex-col gap-y-4 md:flex-row md:justify-between">
                                <div className="w-full md:w-[50%]">
                                    <div className="border-b-4 border-lime w-[85px] rounded-full mb-3"></div>
                                    <h2 className="text-black text-3xl font-medium ">
                                        Frequently Asked Questions
                                    </h2>
                                    <p className="text-black text-[15px] leading-[27px] mt-5 mb-10">
                                        I am promo text. Click edit button to change this text. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
                                    </p>
                                    <FaqAccordionComponent
                                        accordionData={certificate[0]?.faq}
                                        iconMinusColor="#fff"
                                        iconPlusColor="#8d9297"
                                        headerBackground="bg-white"
                                        headerTitleColor="text-gray-400"
                                        activeHeadBackgorund="bg-white"
                                        hoverHeadBackground="bg-lime"
                                        defaultActiveaccordion="3"
                                        navigateFromFAQ
                                    />
                                </div>
                                <div className="w-full  lg:w-[40%] md:w-[47%]">
                                    <BoxBackgroundComponent
                                        className='h-[550px] pt-5 sticky top-[100px]'
                                        greyStyle='-right-3 lg:-right-5 top-10 w-[60%] h-[40%] md:w-[40%] lg:h-[45%]'
                                        limeStyle='-left-3 lg:-left-5 bottom-36 w-[60%] h-[40%] md:w-[40%] xl:bottom-0'
                                    >
                                        <div className="rounded-lg p-5 border-lime border-t-8 bg-white drop-shadow-lg self-center">
                                            <h2 className="text-black text-xl lg:text-2xl font-medium ">
                                            Got a Different Question?
                                            </h2>
                                            <p className="text-black text-[15px] leading-[27px] mt-2 mb-6">
                                                Ask your query by filling this form.
                                            </p>
                                            <form onSubmit={handleSubmit(requestCallBack)}>
                                                <div className="w-full flex flex-col items-center md:flex-row flex-wrap gap-y-3 lg:gap-y-4 mt-2 justify-between">
                                                    <div className={`${!next ? 'flex':'hidden'} w-full  flex-col items-center md:flex-row flex-wrap gap-y-3 lg:gap-y-4 justify-between`}>
                                                        <div className="w-full">
                                                            <TextField
                                                                lable="Full Name"
                                                                name="full_name"
                                                                className="text-sm text-black font-semibold"
                                                                errors={errors}
                                                                register={register}
                                                                errorClass="text-[#ff0000] text-sm float-right "
                                                                required={true}
                                                                inputClass="border-lime py-2.5 px-3"
                                                            />
                                                        </div>
                                                        <div className="w-full" >
                                                            <div className="">
                                                                <p className="text-sm text-black mr-3 font-semibold lg:bold">
                                                                    Postcode where your property exist?
                                                                </p>
                                                                <p className="text-[10px] md:text-[12px] my-1">
                                                                    This is to check the availability and converage
                                                                </p>
                                                                <TextField
                                                                    placeholder="Enter postcode here"
                                                                    className="text-lg text-black font-semibold"
                                                                    errors={errors}
                                                                    register={register}
                                                                    errorClass="text-[#ff0000] text-sm  float-right"
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
                                                                className="text-sm text-black mr-3 font-semibold lg:bold"
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
                                                                className="text-sm text-black mr-3 font-semibold lg:bold"
                                                                inputClass="border-lime py-2.5 px-3"
                                                            />
                                                        </div>
                                                        <div className="w-full md:px-0">
                                                            <ButtonComponent
                                                                text="Next"
                                                                type="button"
                                                                onClick={()=> {
                                                                    trigger().then(isValid => {
                                                                        if (errors?.enquiry?.message && Object.keys(errors).length === 1) {
                                                                            setNext(true)
                                                                            delete errors.enquiry
                                                                        }
                                                                    });}
                                                                }
                                                                className="bg-lime text-black uppercase text-sm lg:text-lg mt-4 font-semibold px-[2px] sm:px-[20px] py-[13px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={`${next ? 'flex':'hidden'} w-full  flex-col items-center md:flex-row flex-wrap gap-y-3 lg:gap-y-6 mt-5 justify-between`}>
                                                        <div className="px-4 md:px-0">
                                                            <TextArea
                                                                lable="Please use box below to provide any further information related to your enquiry"
                                                                className="text-sm text-black"
                                                                inputClass="border-grey-500 py-2.5 px-3 mt-3.5"
                                                                errors={errors}
                                                                register={register}
                                                                errorClass="text-[#ff0000] text-sm font-semibold float-right"
                                                                required={true}
                                                                name="enquiry"
                                                                customStyle={{ height: 'auto', minHeight: '300px' }}
                                                            />
                                                        </div>
                                                        <div className="w-full md:px-0 mt-6">
                                                            <ButtonComponent
                                                                text="Submit"
                                                                className="bg-lime text-black uppercase text-lg font-semibold px-[2px] sm:px-[20px] py-[13px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                                                            />
                                                        </div>
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
                                        <h2 className="text-xl lg:text-4xl text-black font-semibold">
                                            READY TO PLACE ORDER
                                        </h2>
                                        <p className="text-[10px] md:text-[12px] mt-[5px] uppercase text-black ">
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
                                        <p className="text-black text-[15px] leading-[27px]">
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

export const getServerSideProps = async (context: any) => {
    const { slug } = context.query;
    const res = await fetch(`${process.env.BASE_URL_DEV}/services/services_content`);
    const data = await res.json();

    return {
        props: {
            data,
            slug
        },
    };
};


export default Service;
