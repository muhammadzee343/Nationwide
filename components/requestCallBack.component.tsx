import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import AlertBox from "./alertBox.component";
import TextField from "./textFied.component";
import TextArea from "./textArea.component";
import ButtonComponent from "./button.component";
import { useForm } from "react-hook-form";

function RequestCallBack({ attributes, services, propertyType, price , setPaymentType}: any) {
  const [collapse, setCollapse] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const submitForm = async (data: any, e: any) => {
    const body = {
      callback_request: { ...data, service_type: propertyType },
      callback_request_product: {
        ...attributes,
        studio: attributes.bedrooms === "s" ? true : false,
      },
      services,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}callback_requests`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Bad Response", {
          cause: {
            response,
          },
        });
      } else {
        setSubmitted(true);
        const data = await response.json();
      }
    } catch (error) {
      switch (error.cause.response.status) {
        case 422:
          console.log("Error");
          break;
        default:
      }
    }
  };
  const handleCallbackClick = () => {
    setCollapse(!collapse)
    setPaymentType("")
  }
  return (
    <div className="bg-white shadow-md relative">
      {!collapse && (
        <span
          className="absolute top-[17px] right-[12px] bg-white rounded-full
       w-6 h-6 flex justify-center items-center cursor-pointer"
          onClick={() => setCollapse(!collapse)}
        >
          <FontAwesomeIcon className="text-dark-blue w-3" icon={faXmark} />
        </span>
      )}
      <div>
        <h4
          className={`px-[25px] pt-[15px] pb-[15px] ${
            !collapse
              ? "bg-dark-blue text-white text-[17px] font-semibold"
              : "bg-lime hover:bg-dark-blue hover:text-white ease-in duration-200" +
                " text-dark-blue text-[17px] font-bold"
          } flex gap-2 cursor-pointer`}
          onClick={handleCallbackClick}
        >
          REQUEST A CALLBACK
          {collapse && (
            <FontAwesomeIcon className="w-3 absolute top-[17px] right-[15px]" icon={faChevronRight} />
          )}
        </h4>
      </div>
      {/*Content*/}
      {!collapse && (
        <div>
          <div className={`px-[20px] py-[25px] flex flex-col`}>
            {submitted && (
              <div>
                <p className="text-dark-blue text-[20px] leading-8 font-semibold mb-15">
                  We have received your callback request and would like to thank
                  you for contacting us. If your inquiry is urgent, please use
                  the telephone number listed below to talk to one of our team
                  members during our working hours.
                </p>
                <p className="text-dark-blue text-[20px] leading-8 font-semibold mb-15">
                  Otherwise, we will get back to you as soon as possible.
                </p>
                <p className="text-dark-blue text-[20px] leading-8 font-semibold mb-15">
                  Talk to you soon
                </p>
              </div>
            )}

            {!submitted && (
              <>
                <AlertBox
                  text="If you would like to discuss above quotation, check availability or got any other questions,
          please fill and submit call back request. We aim to respond within 60 minutes of receiving callback
           requests during our working hours."
                  className="text-[14px]"
                />
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="flex flex-col my-[25px]">
                    <div className=" w-full">
                      <TextField
                          handleChange={() => {}}
                          className="text-sm leading-8 font-semibold"
                          lable="First Name"
                          required={true}
                          name="first_name"
                          register={register}
                          placeholder="Enter first name here"
                          inputClass="border-grey-500 px-3"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                          handleChange={() => {}}
                          className="text-sm leading-8 font-semibold"
                          lable="Last Name"
                          required={true}
                          name="last_name"
                          register={register}
                          placeholder="Enter last name here"
                          inputClass="border-grey-500 px-3"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                          handleChange={() => {}}
                          className="text-sm leading-8 font-semibold"
                          lable="Phone"
                          required={true}
                          name="phone"
                          placeholder="Enter a callback number"
                          register={register}
                          inputClass="border-grey-500 px-3"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                          handleChange={() => {}}
                          className="text-sm leading-8 font-semibold"
                          lable="Email"
                          required={false}
                          name="email_address"
                          placeholder="Enter email address"
                          register={register}
                          inputClass="border-grey-500 px-3"
                      />
                    </div>
                    <hr className="h-[2px] bg-[#ececec] my-[25px]" />
                    <TextArea
                      lable="Additional Notes"
                      placeholder="Any additional information"
                      className="text-sm leading-8 font-semibold my-1"
                      inputClass="border-grey-500 px-3"
                      register={register}
                      required={false}
                      name="customer_note"
                    />
                    <hr className="h-[2px] bg-[#ececec] my-[25px]" />
                    <ButtonComponent
                      text="Submit"
                      className="flex font-bold uppercase justify-center items-center text-sm bg-lime
             border border-lime hover:bg-dark-blue hover:text-white px-[28px] py-[12px] ease-in duration-200"
                    />
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestCallBack;
