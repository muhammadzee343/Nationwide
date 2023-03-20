import React, { useEffect, useMemo, useState } from "react";
import RadioButton from "../components/radioButton.component";
import TextField from "../components/textFied.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import TextArea from "../components/textArea.component";
import ButtonComponent from "../components/button.component";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/footer.module.css";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';
import {VALIDATION_CONFIG} from "../config/validation.config";


function GeneralEnquiries({ Services }: any) {


  let postVariable = true;
  const radioQuestions = [
    {
      question: "Is this enquiry related to an existing job?",
      attr: "existing_job_enquiry",
      options: [
        { title: "Yes", value: "yes", pclass: "text-sm md:text-base" },
        { title: "No", value: "no", pclass: "text-sm md:text-base" },
        { title: "Not Sure", value: "not_sure", pclass: "text-sm md:text-base" },
      ],
    },
    {
      question: "What type of enquiry is it?",
      attr: "type_of_enquiry",
      options: [
        {
          title: "Help or advice about the services we offer",
          value: "help_or_advice",
          pclass: "text-sm md:text-base",
        },
        {
          title: "Confirm availability and Quotations",
          value: "availability_or_quotation",
          pclass: "text-sm md:text-base",
        },
        { title: "Other", value: "other", pclass: "text-sm md:text-base" },
      ],
    },
  ];

  const router = useRouter();
  const { enquiryOrder } = router.query;

  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [selectedServiceId, setSelectedServiceId] = useState([]);

  const [contactType, setContactType] = useState({ contact_by: "phone" });

  const [requestSubmitted, setrequestSubmitted] = useState(false);

  const [validPostCode, setValidPostcode] = useState(true);

  const [intialQ, setIntialQ] = useState<any>({
    type_of_enquiry: "",
    existing_job_enquiry: "",
  });


  const validatePostCode = (data) => {
    console.log('data', data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({mode: "onChange"});

  useEffect(() => {
    switch (enquiryOrder) {
      case "existing":
        setIntialQ({
          type_of_enquiry: "other",
          existing_job_enquiry: "yes",
        });
        break;
      case "looking_advice":
        setIntialQ({
          type_of_enquiry: "help_or_advice",
          existing_job_enquiry: "no",
        });
        break;
      case "new_quote":
        setIntialQ({
          type_of_enquiry: "availability_or_quotation",
          existing_job_enquiry: "not_sure",
        });
        break;
      case "enquire":
        setIntialQ({
          type_of_enquiry: "other",
          existing_job_enquiry: "no",
        });
        break;
      default:
        setIntialQ({
          type_of_enquiry: "",
          existing_job_enquiry: "",
        });
    }
  }, []);
  const requestCallback = async (data: any) => {


    const code = data.post_code.replace(/\s/g, "");


    if (postcodeValidator(code, 'UK') || postcodeValidator(code, 'US')) {

      if (
          checkFormValidity(Object.keys(contactType), contactType) &&
          selectedServiceId.length
      ) {
        const body = {
          contact_form: {
            ...data,
            ...intialQ,
            ...contactType,
          },
          services: [...selectedServiceId],
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
          setrequestSubmitted(true);

        } else {
          alert("Something Went wrong");
        }
      }

    }else{
      setValidPostcode(false)
    }
  };
  const checkFormValidity = (keys, obj) => {
    return keys.every((data) => {
      return obj[data] !== "";
    });
  };
  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    const services = Services;
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      elements.push(
        <div
          key={i}
          className="w-full "
          onClick={() => selectService(service)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${selectedServiceId.includes(service.id) ? "bg-lime self-end " : ""
              } text-[15px] py-[11px] border-0`}
          />
        </div>
      );
    }

    return elements;
  }, [, selectedService]);

  const selectService = ({ name, id }: any) => {
    const temp = name;

    const condition = selectedService.findIndex((ele) => name === ele) === -1;

    if (condition) {
      const selectedServicesData = [...selectedService, temp];
      const selectedServicesId: any = [...selectedServiceId, id];
      setSelectedService(selectedServicesData);
      setSelectedServiceId(selectedServicesId);
    } else {
      const index = selectedService.findIndex((ele) => name === ele);
      const idIndex = selectedServiceId.findIndex((ele) => +id === +ele);
      selectedService.splice(index, 1);
      selectedServiceId.splice(idIndex, 1);
      setSelectedService([...selectedService]);
      setSelectedServiceId([...selectedServiceId]);
    }
  };

  return (
    <>
      {!requestSubmitted &&
        <div className="w-full flex justify-center pt-[82px]">
          <Head>
            <title>General Enquiries - Nationwide Surveyors</title>
          </Head>
          <form onSubmit={handleSubmit(requestCallback)}>
            <div className="w-full md:px-8  xl:max-w-[1114px]  flex flex-col">
              <div className="mb-[20px] px-4 md:px-0">
                <div className="border-b-4 rounded-full border-lime w-[85px] mb-3"></div>
                <h2 className="text-[36px] text-black font-semibold">
                  Request a callback
                </h2>
              </div>
              <p className="text-[15px] mb-[40px] px-4 md:px-0 text-[#1a1a1a] leading-7 ">
                Please complete short form below and we’ll get the right person to
                call you back. We aim to respond within 60 minutes of receiving
                callback requests during our working hours. We apologise if you
                experience any delays and ask for your understanding and patience at
                this time.
              </p>
              <div className="flex flex-col md:gap-5 md:flex-row">
                <div className="w-full md:w-[50%] bg-white rounded-lg md:drop-shadow-lg px-4 md:px-8 pt-8">
                  <div >
                    <p className="text-[20px] text-black mr-3 ">
                      Your Contact Details
                    </p>
                    <p className="text-[10px] text-slate-500 mr-3 ">
                      This is to check the availability
                    </p>
                  </div>
                  {radioQuestions.map((ele: any, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <p className="text-[15px] xl:text-lg text-black my-8 font-semibold mr-3 ">
                          {ele.question}
                        </p>
                        <div className="flex flex-wrap gap-5 justify-between md:max-w-[340px] max-w-[320px]">
                          {ele.options.map((opt: any, index: number) => {
                            return (
                              <RadioButton
                                key={index}
                                title={opt.title}
                                value={opt.value}
                                lable={ele.attr}
                                selectattribute={setIntialQ}
                                className={`border border-grey-500 border border-grey-500 w-6 h-6
                          ${intialQ[ele.attr] == opt.value
                                    ? "bg-lime"
                                    : "border border-grey-500"
                                  }`}
                                pClass={opt.pclass}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <div className="w-full gap-y-6 " >
                    <div className="pb-8">
                      <p className=" text-lg text-black my-3 font-semibold mr-3 ">
                        Postcode where services are required
                      </p>
                      <p className="text-sm my-3">
                        This is to check the availability and converage
                      </p>
                      <TextField
                        placeholder="Enter postcode here"
                        className="text-lg text-black font-semibold"
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
                      <div className="w-full flex flex-col md:flex-row flex-wrap gap-y-6 mt-5 justify-between">
                        <div className="w-full ">
                          <TextField
                              lable="First Name"
                              name="first_name"
                              className="text-lg text-black"
                              errors={errors}
                              register={register}
                              errorClass="text-[#ff0000] text-sm float-right"
                              required={true}
                              inputClass="border-lime py-2.5 px-3"
                          />
                        </div>
                        <div className="w-full">
                          <TextField
                              lable="Last Name"
                              name="last_name"
                              errors={errors}
                              register={register}
                              errorClass="text-[#ff0000] text-sm float-right"
                              required={true}
                              className="text-lg text-black"
                              inputClass="border-lime py-2.5 px-3"
                          />
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
                              className="text-lg text-black"
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
                              className="text-lg text-black"
                              inputClass="border-lime py-2.5 px-3"
                          />
                        </div>
                      </div>
                      <div className="w-full py-8">
                        <p className="text-lg text-black my-3 font-semibold mr-3 ">
                          How would you prefer to be contacted?
                        </p>
                        <div className="w-full flex flex-row gap-x-4 pr-4 md:pr-0">
                          <div
                              onClick={()=> setContactType({contact_by: "phone"})}
                              className={`cursor-pointer border-lime border-[2px] text-black text-base min-w-[50%] flex items-center justify-center sm:px-[20px] mb-2 py-[10px] ${contactType["contact_by"] == "phone" ? "bg-lime":"bg-white"}`}
                          >Phone</div>
                          <div
                              onClick={()=> setContactType({contact_by: "email"})}
                              className={`cursor-pointer border-lime border-[2px] text-black text-base min-w-[50%] flex items-center justify-center sm:px-[20px] mb-2 py-[13px] ${contactType["contact_by"] == "email" ? "bg-lime":"bg-white"}`}
                          >Email</div>
                        </div>
                        {/*<div className="my-4">*/}
                        {/*  <RadioButton*/}
                        {/*      title="By Phone"*/}
                        {/*      value="phone"*/}
                        {/*      lable="contact_by"*/}
                        {/*      className={`border border-lime border border-grey-500 w-6 h-6 sm:w-7 sm:h-7*/}
                        {/*  ${contactType["contact_by"] == "phone"*/}
                        {/*          ? "bg-lime"*/}
                        {/*          : "border border-grey-500"*/}
                        {/*      }`}*/}
                        {/*      pClass="font-semibold"*/}
                        {/*      selectattribute={setContactType}*/}
                        {/*  />*/}
                        {/*</div>*/}
                        {/*<div className="my-4">*/}
                        {/*  <RadioButton*/}
                        {/*      title="By Email"*/}
                        {/*      value="email"*/}
                        {/*      lable="contact_by"*/}
                        {/*      className={`border border-grey-500 border border-grey-500 w-6 h-6 sm:w-7 sm:h-7*/}
                        {/*  ${contactType["contact_by"] == "email"*/}
                        {/*          ? "bg-lime"*/}
                        {/*          : "border border-grey-500"*/}
                        {/*      }`}*/}
                        {/*      pClass="font-semibold"*/}
                        {/*      selectattribute={setContactType}*/}
                        {/*  />*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="w-full md:w-[50%] bg-white rounded-lg md:drop-shadow-lg mb-6 md:mb-0 md:pt-8">
                    <div className="">
                      <p className="text-[20px] px-4 md:px-8 text-black mr-3 ">
                        Please choose the services you'd like to discuss
                      </p>
                    </div>
                  <div className="w-full flex flex-col gap-y-3 justify-between items-center p-4">
                    {services}
                  </div>
                </div>
              </div>
              <div className="my-6 px-4 md:px-0">
                <TextArea
                    lable="Please use box below to provide any further information related to your enquiry"
                    className="text-lg text-black font-semibold my-2"
                    inputClass="border-grey-500 py-2.5 px-3"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    required={true}
                    name="enquiry"
                />
              </div>
              <div className="mb-14 px-4 md:px-0">
                <ButtonComponent
                    text="Submit"
                    className="bg-lime text-black uppercase text-lg font-semibold px-[2px] sm:px-[20px] py-[16px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                />
              </div>
            </div>
          </form>
        </div>}
      {
        requestSubmitted && <div className='w-full flex justify-center'>
          <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-0 w-full lg:max-w-[900px] xl:max-w-[1050px]">
            <div className='border-l-[6px] pl-4 p-y-2 border-lime'>
              <h1 className={`${styles.footerPagesHeading} `}>
                Request a callback
              </h1>
            </div>
            <br />
            <p className={`pb-3 ${styles.footerSmallHead}`}>
              We have recieved your inquiry and would like to thank you for writing us. if your inquiry is urgent,
              please use the telephone number listed below to talk to one of our staff members during our
              working hours.
            </p>
            <p className={`pb-3 ${styles.footerSmallHead}`}>
              Otherwise, we will get back to you as sson as possible.
            </p>
            <p className={`pb-3 ${styles.footerSmallHead}`}>
              Talk to you soon
            </p>
          </div>
        </div>
      }
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BASE_URL_DEV}/services/list_services`);
  const data = await res.json();

  return {
    props: {
      Services: data.services,
    },
  };
};

export default GeneralEnquiries;
