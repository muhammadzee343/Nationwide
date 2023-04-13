import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight, faVolumeControlPhone, faXmark
} from "@fortawesome/free-solid-svg-icons";
import AlertBox from "./alertBox.component";
import TextField from "./textFied.component";
import TextArea from "./textArea.component";
import ButtonComponent from "./button.component";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function RequestCallBack({
  attributes,
  services,
  propertyType,
  price,
  setPaymentType,
  order_id,
  uuid,
  requestACBSucess
}: any) {
  const [collapse, setCollapse] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const submitForm = async (data: any, e: any) => {
    if (router.pathname === "/") {
      requestCBHome(data);
    } else {
      requestCBCheckout(data);
    }
  };

  const requestCBCheckout = async (data: any) => {

    const name = data.full_name.split(' ')

    const body = {
      customer_note:data.customer_note,
      email_address:data.email_address,
      first_name:name[0],
      last_name:name[1],
      phone:data.phone,
      session_id: uuid,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}callback_requests/create_cart_callback?order_id=${order_id}`,
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
        requestACBSucess()
        const data = await response.json();
      }
    } catch (error) {
      switch (error?.cause?.response?.status) {
        case 422:
          console.log("Error");
          break;
        default:
      }
    }
  };

  const requestCBHome = async (data: any) => {
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
        requestACBSucess()
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
    setCollapse(!collapse);

    // setPaymentType("");
  };
  return (
    <div className="bg-white shadow-md relative mt-5">
      <div className='flex justify-center items-center w-full bg-dark-blue hover:bg-lime ease-in duration-200 px-[25px] py-[25px] text-white hover:text-black cursor-pointer' onClick={handleCallbackClick}>
        {/*<Image src={callback} alt='callback' className='w-10 h-10 rounded-full mr-4 filter grayscale hover:invert-100'/>*/}
        <FontAwesomeIcon className="w-8 mr-6" icon={faVolumeControlPhone} />
        <h4
          className='mr-8'
          // onClick={handleCallbackClick}
        >
          REQUEST A CALLBACK
        </h4>
        {collapse &&
            <span className="flex mt-1.5 ml-2 mb-1">
          <FontAwesomeIcon className="w-4" icon={faChevronRight} />
        </span>}
        {!collapse &&
            <span
                className="absolute top-[20] right-[29px] z-[900] flex mt-1.5 ml-2 mb-1"
            >
          <FontAwesomeIcon className="w-4" icon={faXmark} />
        </span>
        }
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
                  <div className="flex flex-col mt-[25px]">
                    <div className="w-full">
                      <TextField
                        handleChange={() => {}}
                        className="text-sm leading-8 text-dark-blue font-semibold"
                        lable="Full Name"
                        required={true}
                        name="full_name"
                        register={register}
                        placeholder="Enter full name here"
                        inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                        handleChange={() => {}}
                        className="text-sm leading-8 text-dark-blue font-semibold"
                        lable="Phone"
                        required={true}
                        name="phone"
                        placeholder="Enter a callback number"
                        register={register}
                        inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                      />
                    </div>
                    <div className="w-full">
                      <TextField
                        handleChange={() => {}}
                        className="text-sm leading-8 text-dark-blue font-semibold"
                        lable="Email"
                        required={false}
                        name="email_address"
                        placeholder="Enter email address"
                        register={register}
                        inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                      />
                    </div>
                    <TextArea
                      lable="Additional Notes"
                      placeholder="Any additional information"
                      className="text-sm leading-8 text-dark-blue font-semibold"
                      inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border font-light text-sm border placeholder-gray-600 placeholder-opacity-70"
                      register={register}
                      required={false}
                      name="customer_note"
                    />
                    <ButtonComponent
                      text="Submit"
                      className="flex font-bold uppercase justify-center items-center text-sm bg-lime
             border border-lime mt-6 hover:bg-dark-blue hover:text-white px-[28px] py-[12px] ease-in duration-200"
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
