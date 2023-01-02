import React, { useState } from "react";
import RadioButton from "../components/RadioButton.component";
import TextField from "../components/TextFied.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import { services } from "../utility/orderNowConstants";
import TextArea from "../components/TextArea.component";
import ButtonComponent from "../components/button.component";
import { useForm } from "react-hook-form";

function GeneralEnquiries() {
  const radioQuestions = [
    {
      question: "Is this enquiry related to an existing job?",
      attr: "jobType",
      options: [
        { title: "Yes", value: true, pclass: "font-semibold" },
        { title: "No", value: false, pclass: "font-semibold" },
        { title: "Not Sure", value: "Not sure", pclass: "font-semibold" },
      ],
    },
    {
      question: "What type of enquiry is it?",
      attr: "enquiryType",
      options: [
        {
          title: "Help or advice about the services we offer",
          value: true,
          pclass: "",
        },
        {
          title: "Confirm availability and Quotations",
          value: false,
          pclass: "",
        },
        { title: "Other", value: "other", pclass: "" },
      ],
    },
  ];
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const selectService = (title: string) => {
    const temp = title;
    const condition = selectedService.findIndex((ele) => title === ele) === -1;
    if (condition) {
      const selectedServicesData = [...selectedService, temp];

      setSelectedService(selectedServicesData);
    } else {
      const index = selectedService.findIndex((ele) => title === ele);
      selectedService.splice(index, 1);
      setSelectedService([...selectedService]);
    }
  };
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full flex justify-center pt-[82px]">
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
                          lable={opt.attr}
                          className={`border border-grey-500 border border-grey-500 w-6 h-6 sm:w-7 sm:h-7`}
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
                  register={register}
                  name="postcode"
                  inputClass="border-grey-500 py-2.5 px-3"
                />
              </div>
            </div>

            <div className="w-full flex flex-wrap gap-y-3  justify-between">
              {services.map(({ service }: any, index, array) => {
                return (
                  <div
                    key={index}
                    className=" w-full md:w-[49%]"
                    onClick={() => selectService(array[index]?.name)}
                  >
                    <ServiceSelectionCard
                      title={`${array[index]?.name}`}
                      className={`${
                        selectedService.includes(array[index]?.name)
                          ? "bg-lime self-end "
                          : ""
                      } py-[11px]`}
                    />
                  </div>
                );
              })}
            </div>
            <div className=" my-12">
              <TextArea
                lable="Please use box below to provide any further information related to your enquiry"
                className="text-lg text-dark-blue font-semibold my-1"
                inputClass="border-grey-500 py-2.5 px-3"
                register={register}
                name="enquiry"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-y-6 justify-between">
              <div className="w-full md:w-[49%]">
                <TextField
                  lable="First Name"
                  name="firstName"
                  className="text-lg text-dark-blue font-semibold"
                  register={register}
                  inputClass="border-grey-500 py-2.5 px-3"
                />
              </div>
              <div className="w-full md:w-[49%]">
                <TextField
                  lable="Last Name"
                  name="lastName"
                  register={register}
                  className="text-lg text-dark-blue font-semibold"
                  inputClass="border-grey-500 py-2.5 px-3"
                />
              </div>
              <div className="w-full md:w-[49%]">
                <TextField
                  lable="Phone"
                  name="phone"
                  register={register}
                  className="text-lg text-dark-blue font-semibold"
                  inputClass="border-grey-500 py-2.5 px-3"
                />
              </div>
              <div className="w-full md:w-[49%]">
                <TextField
                  lable="Email"
                  name="email"
                  register={register}
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
                  lable="prefrence"
                  className={`border border-grey-500 w-6 h-6 sm:w-7 sm:h-7`}
                  pClass="font-semibold"
                />
              </div>
              <div className="my-4">
                <RadioButton
                  title="By Email"
                  value="email"
                  lable="prefrence"
                  className={`border border-grey-500 w-6 h-6 sm:w-7 sm:h-7`}
                  pClass="font-semibold"
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
    </div>
  );
}

// GeneralEnquiries.getInitialProps = async () => {
//   const res = await fetch("http://192.168.10.38:3000/services/list_services");
//   const data = await res.json();
//
//   return {
//     services: data,
//   };
// };

export default GeneralEnquiries;
