import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import Link from "next/link";
import TermsConditionComponent from "./terms&condition.component";

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
    <div>
      <form className="w-full flex justify-between flex-wrap bg-[#f5f5f5] p-[20px]">
        <div className=" w-full lg:w-[48%]">
          <h3 className="text-[28px] text-dark-blue leading-7 mb-[15px] font-semibold ">
            BILLING DETAILS
          </h3>
          <div className=" flex flex-wrap justify-between justify-center">
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="First Name"
                name="firstName"
                required={true}
                register={register}
              />
            </div>
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Last Name"
                required={true}
                name="lastName"
                register={register}
              />
            </div>
            <div className="w-full mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Company Name (optional)"
                name="company"
                register={register}
              />
            </div>
            <div className="w-full flex items-end gap-9 mb-1">
              <div className="w-[45%]">
                <Input
                  className="text-sm leading-8 text-dark-blue font-medium"
                  placeholder=""
                  lable="PostCode"
                  required={true}
                  name="postcode"
                  register={register}
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
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=" House number and street name"
                lable="Street address"
                required={true}
                name="streetAddress"
                register={register}
              />
            </div>
            <div className="w-full mt-3 mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder="Apartment, suite, unit, etc. (optional)"
                lable=""
                name="appartment"
                register={register}
              />
            </div>
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Town / City"
                required={true}
                name="city"
                register={register}
              />
            </div>
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="County Optional"
                required={true}
                name="county"
                register={register}
              />
            </div>
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Phone"
                required={true}
                name="phone"
                register={register}
              />
            </div>
            <div className="w-[45%] mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Phone 2 (optional)"
                name="phone2"
                register={register}
              />
            </div>
            <div className="w-full mb-1">
              <Input
                className="text-sm leading-8 text-dark-blue font-medium"
                placeholder=""
                lable="Email"
                required={true}
                name="email"
                register={register}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[48%]">
          <h3 className="text-[28px] text-dark-blue leading-7 mb-[15px] font-semibold ">
            Additional information
          </h3>
          <div className="w-full mb-1">
            <TextArea
              lable="Order Notes (optional)"
              placeholder="You can provide any special instructions/notes to help us deal with your order."
              name="orderNotes"
              className="text-sm leading-8 text-dark-blue font-medium"
              register={register}
            />
          </div>
          <div className="bg-[#ebe9eb] mt-[30px]">
            <div className="p-[14px] border-b border-b-[#d3ced2]">
              <RadioInput
                label="Debit/Credit Card"
                register={register}
                name="payment"
                value="DC"
              />
              <Note content="Payment Instructions will be provided once we received your order." />
              <RadioInput
                label="Online Bank Transfer"
                register={register}
                name="payment"
                value="bankTransfer"
              />
              <RadioInput
                label="Pay Over the Phone"
                register={register}
                name="payment"
                value="payPhone"
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
                className=""
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
    </div>
  );
}

function Input({
  className,
  lable,
  placeholder,
  register,
  required,
  name,
}: any) {
  return (
    <div className="w-full">
      <label className={`${className}`}>
        {lable}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full border-[#DEDEDE] py-2 px-3
          outline-none shadow-sm focus:border-lime focus:ring-transparent"
        {...register(name, { required: true })}
      />
    </div>
  );
}
function TextArea({ lable, placeholder, name, className, register }: any) {
  return (
    <div className="w-full">
      <label className={`${className}`}>{lable}</label>
      <textarea
        cols={80}
        placeholder={placeholder}
        value={""}
        name={name}
        className="border w-full border-[#DEDEDE] py-5 px-3 focus:border-lime
          outline-none shadow-sm"
        {...register(name, { required: true })}
      ></textarea>
    </div>
  );
}
function RadioInput({ label, value, register, name }: any) {
  return (
    <label className="text-sm text-dark-blue font-bold mb-3">
      <div className="my-1.5">
        <input
          type="radio"
          value={value}
          {...register(name)}
          className="mb-[4px] mr-[13px] h-[13px] w-[13px]"
        />
        {label}
      </div>
    </label>
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
