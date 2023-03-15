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
import Image from 'next/image';
import formImage from '../public/Rectangle394.png'


function ContactUsNew({ Services }: any) {



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
          <div className="w-full flex justify-center pt-[82px]">
              <Head>
                  <title>Join Us - Nationwide Surveyors</title>
              </Head>
              <form onSubmit={handleSubmit(requestCallback)}>
                  <div className="w-full md:px-8  xl:max-w-[1114px] flex flex-col items-center">
                      <div className="self-start mb-[20px] px-4 md:px-0">
                          <div className="border-b-4 border-lime w-[85px] mb-3"></div>
                          <h2 className="text-[36px] text-dark-blue font-semibold">
                              Join Us
                          </h2>
                      </div>
                      <p className="text-[15px] mb-[40px] px-4 md:px-0 md:pr-[30%] text-[#1a1a1a] leading-7 ">
                          We are always looking to partner with reliable and committed professionals.
                          If you have a passion for customer service then complete application below and we will get in touch with you soon.
                      </p>
                      <div className="w-[90%] flex flex-col md:gap-5 md:flex-row">
                        <div className="w-full md:w-[50%] bg-white rounded-lg md:drop-shadow-lg overflow-hidden">
                          <div className="flex w-full bg-lime">
                            <Image src={formImage} alt="Form Image here "/>
                          </div>
                          <div className="px-4 md:px-8 pt-8">
                              <div className="w-full gap-y-6 " >
                                  <div className="pb-8">
                                      <div className="w-full flex flex-col md:flex-row flex-wrap gap-y-6 mt-5 justify-between">
                                          <div className="w-full ">
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
                                          <div className="w-full">
                                              <Select
                                                  label="PostCodes you cover"
                                                  className="text-sm leading-8 text-dark-blue font-semibold"
                                                  name="position"
                                                  errors={errors}
                                                  register={register}
                                                  errorClass="text-[#ff0000] text-sm font-semibold float-right"
                                                  inputClass="border-lime py-2.5 px-3"
                                                  required={true}
                                                  options={{}}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                          <div className="w-full md:w-[50%] bg-white rounded-lg md:drop-shadow-lg mb-6 md:mb-0 md:pt-8">
                              <div className="">
                                  <p className="text-[20px] px-4 md:px-8 text-dark-blue mr-3 ">
                                      Please choose the services you'd like to discuss
                                  </p>
                              </div>
                              <div className="w-full flex flex-col gap-y-3 justify-between items-center p-4">
                                {services}
                              </div>
                          </div>
                      </div>
                      <div className="flex w-[50%] mb-14 px-4 md:px-0 gap-x-4 mt-6">
                          <ButtonComponent
                              text="Submit"
                              className="bg-lime  text-dark-blue uppercase text-lg font-semibold  py-[16px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                          />
                        <ButtonComponent
                          text="Cancel"
                          className="border-[2px] border-dark-blue text-dark-blue uppercase text-lg font-semibold  py-[16px] hover:bg-dark-blue hover:text-white ease-in duration-200"
                        />
                      </div>
                  </div>
              </form>
          </div>
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

const Select = ({
                  label,
                  register,
                  name,
                  required,
                  inputClass,
                  className,
                  errors = {},
                  errorClass = "",
                  options = [],
                }: any) => {
  const option = [
    { title: "Please Select", value: "" },
    { title: "Male", value: "male" },
    { title: "Female", value: "female" },
    { title: "Other", value: "other" },
  ];
  return (

    <>
      <label className={`${className}`}>
        {label}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <select
        {...register(name, {
          required: { value: true, message: "Field is Required" },
        })}
        name={name}
        className={`border w-full outline-none focus:border-lime focus:ring-transparent shadow-sm text-[15px] text-[#555555] ${inputClass}`}
      >
        {option.map(({ value, title }: any, index: number) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <p className={`${errorClass}`}>{errors[name].message}</p>
      )}
    </>
  );
};

export default ContactUsNew;
