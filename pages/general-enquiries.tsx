import React, { useEffect, useMemo, useState } from "react";
import RadioButton from "../components/radioButton.component";
import TextField from "../components/textFied.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import TextArea from "../components/textArea.component";
import ButtonComponent from "../components/button.component";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function GeneralEnquiries({ Services }: any) {
  const radioQuestions = [
    {
      question: "Is this enquiry related to an existing job?",
      attr: "existing_job_enquiry",
      options: [
        { title: "Yes", value: "yes", pclass: "font-semibold" },
        { title: "No", value: "no", pclass: "font-semibold" },
        { title: "Not Sure", value: "not_sure", pclass: "font-semibold" },
      ],
    },
    {
      question: "What type of enquiry is it?",
      attr: "type_of_enquiry",
      options: [
        {
          title: "Help or advice about the services we offer",
          value: "help_or_advice",
          pclass: "",
        },
        {
          title: "Confirm availability and Quotations",
          value: "availability_or_quotation",
          pclass: "",
        },
        { title: "Other", value: "other", pclass: "" },
      ],
    },
  ];

  const router = useRouter();
  const { enquiryOrder } = router.query;

  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [selectedServiceId, setSelectedServiceId] = useState([]);

  const [contactType, setContactType] = useState({ contact_by: "" });

  const [intialQ, setIntialQ] = useState<any>({
    type_of_enquiry: "",
    existing_job_enquiry: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

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
        `${process.env.BASE_URL_DEV}quotation_logs`,
        requestOptions
      );

      if (response.ok) {
        let data = await response.json();
      } else {
        alert("Something Went wrong");
      }
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
          className="w-full md:w-[47.5%] xxl:w-[48%]"
          onClick={() => selectService(service)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${
              selectedServiceId.includes(service.id) ? "bg-lime self-end " : ""
            } text-[15px] py-[11px] border-lime`}
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
    <div className="w-full flex justify-center pt-[82px]">
      <form onSubmit={handleSubmit(requestCallback)}>
        <div className=" w-full px-8 xl:px-0 xl:max-w-[1114px]  flex flex-col">
          <div className="border-l-[6px] border-lime mb-[20px] px-5">
            <h2 className="text-[36px] text-dark-blue font-semibold">
              Request a callback
            </h2>
          </div>
          <p className="text-[15px] mb-[40px] text-[#1a1a1a] leading-7 ">
            Please complete short form below and we’ll get the right person to
            call you back. We aim to respond within 60 minutes of receiving
            callback requests during our working hours. We apologise if you
            experience any delays and ask for your understanding and patience at
            this time.
          </p>
          <div className="flex flex-col">
            <div className="">
              {radioQuestions.map((ele: any, index) => {
                return (
                  <div className="pb-8" key={index}>
                    <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 w-5/12">
                      {ele.question}
                    </p>
                    <div className="flex flex-wrap gap-5 justify-between max-w-[400px]">
                      {ele.options.map((opt: any, index: number) => {
                        return (
                          <RadioButton
                            key={index}
                            title={opt.title}
                            value={opt.value}
                            lable={ele.attr}
                            selectattribute={setIntialQ}
                            className={`border border-grey-500 border border-grey-500 w-6 h-6 sm:w-7 sm:h-7
                            ${
                              intialQ[ele.attr] == opt.value
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
              <div className="w-full">
                <div className="pb-8 w-6/12">
                  <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 ">
                    Postcode where services are required
                  </p>
                  <p className="text-sm my-3">
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
                    inputClass="border-grey-500 py-2.5 px-3"
                  />
                  {errors.firstName?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-wrap gap-y-3  justify-between">
                {services}
              </div>
              <div className=" my-12">
                <TextArea
                  lable="Please use box below to provide any further information related to your enquiry"
                  className="text-lg text-dark-blue font-semibold my-1"
                  inputClass="border-grey-500 py-2.5 px-3"
                  errors={errors}
                  register={register}
                  errorClass="text-[#ff0000] text-sm font-semibold float-right"
                  required={true}
                  name="enquiry"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-y-6 justify-between">
                <div className="w-full md:w-[49%]">
                  <TextField
                    lable="First Name"
                    name="first_name"
                    className="text-lg text-dark-blue font-semibold"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    required={true}
                    inputClass="border-grey-500 py-2.5 px-3"
                  />
                </div>
                <div className="w-full md:w-[49%]">
                  <TextField
                    lable="Last Name"
                    name="last_name"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    required={true}
                    className="text-lg text-dark-blue font-semibold"
                    inputClass="border-grey-500 py-2.5 px-3"
                  />
                </div>
                <div className="w-full md:w-[49%]">
                  <TextField
                    lable="Phone"
                    name="phone"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    required={true}
                    className="text-lg text-dark-blue font-semibold"
                    inputClass="border-grey-500 py-2.5 px-3"
                  />
                </div>
                <div className="w-full md:w-[49%]">
                  <TextField
                    lable="Email"
                    name="email"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    pattern={/^\S+@\S+$/i}
                    required={true}
                    className="text-lg text-dark-blue font-semibold"
                    inputClass="border-grey-500 py-2.5 px-3"
                  />
                </div>
              </div>
              <div className="py-8">
                <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 w-5/12">
                  How would you prefer to be contacted?
                </p>
                <div className="my-4">
                  <RadioButton
                    title="By Phone"
                    value="phone"
                    lable="contact_by"
                    className={`border border-grey-500 border border-grey-500 w-6 h-6 sm:w-7 sm:h-7
                            ${
                              contactType["contact_by"] == "phone"
                                ? "bg-lime"
                                : "border border-grey-500"
                            }`}
                    pClass="font-semibold"
                    selectattribute={setContactType}
                  />
                </div>
                <div className="my-4">
                  <RadioButton
                    title="By Email"
                    value="email"
                    lable="contact_by"
                    className={`border border-grey-500 border border-grey-500 w-6 h-6 sm:w-7 sm:h-7
                            ${
                              contactType["contact_by"] == "email"
                                ? "bg-lime"
                                : "border border-grey-500"
                            }`}
                    pClass="font-semibold"
                    selectattribute={setContactType}
                  />
                </div>
              </div>

              <div className="my-8">
                <ButtonComponent
                  text="Submit"
                  className="bg-dark-blue text-white uppercase text-sm px-[2px] sm:px-[20px] py-[13px] hover:bg-lime hover:text-white ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
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
