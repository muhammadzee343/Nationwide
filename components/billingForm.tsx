import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import TextField from "./textFied.component";
import Link from "next/link";
import { Select } from "antd";
import { OverlayContext } from "../context/sidebarContext";
import {VALIDATION_CONFIG} from "../config/validation.config";
import CardFormComponent from "./cardForm.component";
import RadioInput from "./radioInput.component";

function BillingForm(props: any) {
  const [addresses, setAddresseses] = useState([]);
  const { isLoading, setIsLoading } = useContext<any>(OverlayContext);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname:"",
      company: "",
      postcode: "",
      streetAddress: "",
      appartment: "",
      city: "",
      county: "",
      phone: "",
      phone2: "",
      email: "",
      orderNotes: "",
      payment: "",
      postAddress: "",
    },
  });
  const postcode = watch("postcode", "");
  const postAddress = watch("postAddress", "");
  const handleChange = (value: string) => {
    setValue("postAddress", value, { shouldValidate: true });
  };

  useEffect(() => {
    const detail = props.billingDetails;

    for (const key in detail) {
        if (key){
          // @ts-ignore
          setValue(key, detail[key], { shouldValidate: true });
        }

    }
  }, [props.billingDetails]);

  // const stripObj = {
  //   strip: null,
  //   element: null,
  // };



  const getPropertyAddress = async (isFinalReq = false) => {
    if (postcode) {
      setIsLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ postcode: postcode }),
      };
      try {
        const response = await fetch(
          `${process.env.BASE_URL_DEV}postcodes/find_address`,
          requestOptions
        );
        if (!response.ok) {
          setAddresseses([]);
          switch (response.status) {
            case 422:
              alert("Please Enter a valid Postcode");
          }

          setIsLoading(false);
          return false;
        } else {
          const data = await response.json();
          if ((isFinalReq && postAddress.length < 5) || !isFinalReq) {
            const addresses = [...data.addresses];
            const newAddress = addresses.map((item) => {
              return { value: item.address, label: item.address };
            });
            setAddresseses([...newAddress]);
          }

          setIsLoading(false);
          return true;
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err, "err");
      }
    }
  };

  const submitHandler = (data: any) => {
    getPropertyAddress(true).then((status) => {
      if (status) {
        if (data.postAddress.length > 5) {
          props.chargeCard(data);
        } else {
          alert("Please select a valid address.");
        }
      }
    });
  };

  return (
    <form
      autoComplete={"off"}
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex justify-between flex-wrap bg-white shadow-xl border border-lime space-y-6 p-[20px]"
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-x-5">
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-wrap justify-between justify-center">
            <h3 className="text-[23px] text-dark-blue leading-7 mb-[15px] font-semibold">
              BILLING DETAILS
            </h3>
            <div className="w-full mb-1">
              <TextField
                className="text-sm leading-8 text-dark-blue font-semibold"
                lable="Full Name"
                name="full_name"
                required={true}
                register={register}
                errors={errors}
                inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
              />
            </div>
              <div className="w-full">
                <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Company Name (optional)"
                  name="company"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                />
              </div>
              <div className="w-full">
                <TextField
                  className="w-full text-sm leading-8 text-dark-blue font-semibold"
                  lable="Email"
                  required={true}
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                />
              </div>
            <div className={`w-full flex ${errors['postcode'] ? 'items-center':'items-end'} md:flex-row justify-between`}>
              <div className="w-[65%]">
                <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="PostCode"
                  required={true}
                  name="postcode"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                  reactHookValidations={{
                    required: VALIDATION_CONFIG.required,
                    validate: VALIDATION_CONFIG.postCode,
                  }}
                />
              </div>
              <div className="w-[30%]">
                <ButtonComponent
                  type="button"
                  text="FIND ADDRESS"
                  className="bg-dark-blue text-white rounded-md text-[8px] px-[13px] py-[14px]
                 hover:bg-lime hover:text-white ease-in duration-200 lg:text-[6px] lg:px-[10px] py-[13px] xl:text-[10px] xl:px-[13px] py-[13px]"
                  onClick={() => {
                    getPropertyAddress();
                  }}
                />
              </div>
            </div>
            <div className="w-full mb-1">
              <div className="mb-1 w-full relative">
                <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  placeholder=" House number and street name"
                  lable="Address"
                  required={true}
                  name="streetAddress"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                />
                {addresses.length > 0 && (
                  <div className="w-[100%] max-h-[300px] overflow-y-auto border border-lime absolute bg-white ">
                    {addresses.map((ele, index) => {
                      return (
                        <div
                          key={index}
                          className="border-b border-b-grey-500 px-[20px] py-[10px] text-[15px] font-normal text-dark-blue"
                          onClick={() => {
                            setValue("postAddress", ele.value, {
                              shouldValidate: true,
                            });
                            setValue("streetAddress", ele.value, {
                              shouldValidate: true,
                            });
                            setAddresseses([]);
                          }}
                        >
                          {ele.value}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
              <div className="w-full">
                <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Phone"
                  required={true}
                  name="phone"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                />
              </div>
              <div className="w-full">
                <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Phone 2 (optional)"
                  name="phone2"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
                />
              </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center">
          <h3 className="text-[23px] text-dark-blue leading-7 mb-[15px] mt-[15px] lg:mt-[0px] self-start">
            Additional Information
          </h3>
          <div className="mt-1">
            <label className="text-[15px]  text-dark-blue font-semibold ">
              Order notes (optional)
            </label>
            <textarea
              cols={80}
              placeholder="You can provide any special instructions/notes to help us deal with your order."
              name="orderNotes"
              className={`border h-[75px] w-full text-sm focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
            />
          </div>
          <div className="w-full border-[#DEDEDE] border-[2px] p-3 my-3">
            <div className="mb-2 flex flex-col items-center">
              <div className="w-full flex">
                <input
                  type="radio"
                  name="paymentRadio"
                  onClick={()=>{
                    props.setPaymentType("payByCard")
                  }}
                  checked={props.paymentType === "payByCard"}
                  value="payByCard"
                  className="mb-[4px] mr-[13px] h-[20px] w-[20px]"
                />
                <h3 className="ml-2 text-[17px] text-black leading-5 font-bold self-start">
                  Debit / Credit Card
                </h3>
              </div>
              {props.paymentType === "payByCard" && (
              <div className='w-full mt-2 mb-1 border-[#DEDEDE] border-[1px] p-2'>

                  <div className="w-full" id="card">
                    <p className="font-sm text-[17px] mb-3">Pay with Your Debit/Credit Card</p>
                    <div className="bg-white space-y-6">
                      <div>
                        <CardFormComponent
                          stripObj={props.stripeObj}
                          cardError={props.cardError}
                          setCardError={props.setCardError}
                        />
                      </div>
                    </div>
                  </div>
              </div>
              )}
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="radio"
                name="paymentRadio"
                onClick={()=>{
                  props.setPaymentType("payByBank")
                }}
                checked={props.paymentType === "payByBank"}
                value="payByBank"
                className="mb-[4px] mr-[13px] h-[20px] w-[20px]"
              />
              <h3 className="ml-2 text-[17px] text-black leading-5 font-bold self-start">
                Online Bank Transfer
              </h3>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentRadio"
                onClick={()=>{
                  props.setPaymentType("payOverPhone")
                }}
                checked={props.paymentType === "payOverPhone"}
                value="payOverPhone"
                className="mb-[4px] mr-[13px] h-[20px] w-[20px]"
              />
              <h3 className="ml-2 text-[17px] text-black leading-5 font-bold self-start">
                Pay Over Phone
              </h3>
            </div>
          </div>
          <div className="w-full">
            <p className="font-sm text-[11px] mb-3 text-justify">Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described in our privacy policy.</p>
          </div>
          <div className="w-full mb-[15px]">
            <CheckBox
              register={register}
              label="I have read and agree to the website"
              required={true}
              errors={errors}
            />
            <div className="w-full mt-3 mb-1 items-center">
              <ButtonComponent
                text="PLACE ORDER"
                className="bg-dark-blue text-white text-[13px] px-[20px] py-[10px]
                 hover:bg-lime hover:text-white ease-in duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

function CheckBox({ register, label, required, className , errors }: any) {
  return (
    <div className="form-group form-check">
      <input
        name="acceptTerms"
        type="checkbox"
        {...register("acceptTerms")}
          required
        id="acceptTerms"
        className="w-[13px] h-[13px] rounded-sm"
      />
      <label
        htmlFor="acceptTerms"
        className="text-sm text-[#1a1a1a] ml-2"
      >
        {label}
        <Link
          href="/terms-condition"
          className="pl-1 text-sm hover:text-lime ease-in duration-200 font-bold "
        >
          Accept Terms & Conditions
        </Link>
        {required && <span className="text-[#ff0000] text ml-1">*</span>}
      </label>
      {errors["acceptTerms"] && (
          // <div className={`p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-40 ${errorClass}`}
          //      role="alert">
          //     {errors[name].message}
          // </div>
          <div
              className={
                `flex  text-sm text-red-800 rounded-lg mt-2 dark:bg-gray-800 dark:text-red-400 `
              }
              role="alert"
          >
            <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Info</span>
            <div>{errors["acceptTerms"].message}</div>
          </div>
      )}
    </div>
  );
}

export default BillingForm;
