import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import Link from "next/link";
import TermsConditionComponent from "./terms&condition.component";
import TextField from "./textFied.component";
import TextArea from "./textArea.component";
import RadioInput from "./radioInput.component";
import {Elements} from "@stripe/react-stripe-js";
import CardFormComponent from "./cardForm.component";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
function BillingForm(props: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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
    },
  });
  return (
    <form className="w-full flex justify-between flex-wrap bg-[#f5f5f5] p-[20px]">
      <div className=" w-full lg:w-[48%]">
        <h3 className="text-[28px] text-dark-blue leading-7 mb-[15px] font-semibold ">
          BILLING DETAILS
        </h3>
        <div className=" flex flex-wrap justify-between justify-center">
          <div className="w-[45%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="First Name"
              name="firstName"
              required={true}
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
          <div className="w-[45%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Last Name"
              required={true}
              name="lastName"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
          <div className="w-full mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Company Name (optional)"
              name="company"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
          <div className="w-full flex items-end gap-9 mb-1">
            <div className="w-[45%]">
              <TextField
                className="text-sm leading-8 text-dark-blue font-semibold"
                lable="PostCode"
                required={true}
                name="postcode"
                register={register}
                inputClass="border-[#DEDEDE] py-2 px-3"
              />
            </div>
            <div>
              <ButtonComponent
                text="FIND ADDRESS"
                className="bg-dark-blue text-white text-[15px] font-semibold px-[20px] py-[10px]
                 hover:bg-lime hover:text-white ease-in duration-200"
              />
            </div>
          </div>
          <div className="w-full mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              placeholder=" House number and street name"
              lable="Street address"
              required={true}
              name="streetAddress"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>

          <div className="w-[45%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Phone"
              required={true}
              name="phone"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
          <div className="w-[45%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Phone 2 (optional)"
              name="phone2"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
          <div className="w-full mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Email"
              required={true}
              name="email"
              register={register}
              inputClass="border-[#DEDEDE] py-2 px-3"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[48%]">
        <div className="bg-[#ebe9eb] mt-[30px]">
          <div className="p-[14px] border-b border-b-[#d3ced2]">
            <RadioInput
              label="Debit/Credit Card"
              register={register}
              name="payment"
              value="DC"
              className="text-sm text-dark-blue font-bold mb-3"
            />
            <Note content="Payment Instructions will be provided once we received your order." >

            </Note>
            <Elements stripe={stripePromise}>
              <CardFormComponent />
            </Elements>
            <RadioInput
              label="Online Bank Transfer"
              register={register}
              name="payment"
              value="bankTransfer"
              className="text-sm text-dark-blue font-bold mb-3"
            />
            <RadioInput
              label="Pay Over the Phone"
              register={register}
              name="payment"
              value="payPhone"
              className="text-sm text-dark-blue font-bold mb-3"
            />
          </div>
          <div className="p-[14px] mb-[15px]">
            <p className="text-[15px] text-[#1a1a1a] leading-6 ">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
              <Link
                href="/privacy-policy"
                className="pl-1 hover:text-lime ease-in duration-200 "
              >
                privacy policy
              </Link>
              .
            </p>
            <TermsConditionComponent />
            <CheckBox
              register={register}
              label="I have read and agree to the website"
              required={true}
            />
            <div className="w-[158px]  mt-3 mb-1 ml-auto">
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

function Note({ content }: any) {
  return (
    <div className="relative bg-[#dfdcde]  px-8 py-3 rounded-sm my-3">
      <div className="text-gray-800 text-[13px] text-[#515151]">{content}</div>
      <div className="absolute top-0 left-[39px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#dfdcde]"></div>
    </div>
  );
}

function CheckBox({ register, label, required, className }: any) {
  return (
    <div className="form-group form-check">
      <input
        name="acceptTerms"
        type="checkbox"
        {...register("acceptTerms")}
        id="acceptTerms"
        className="w-[13px] h-[13px] rounded-sm"
      />
      <label
        htmlFor="acceptTerms"
        className="text-sm text-[#1a1a1a] font-semibold ml-2"
      >
        {label}
        <Link
          href="/privacy-policy"
          className="pl-1 hover:text-lime ease-in duration-200 font-bold "
        >
          Accept Terms & Conditions
        </Link>
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
    </div>
  );
}
export default BillingForm;
