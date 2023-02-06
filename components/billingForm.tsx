import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import TextField from "./textFied.component";


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
      <div className="w-full">
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
            <div className="w-[45%] mb-1">
              <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Company Name (optional)"
                  name="company"
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
              />
            </div>
            <div className="w-[45%] mb-1">
              <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Email"
                  required={true}
                  name="email"
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
        </div>
      </div>
    </form>
  );
}



export default BillingForm;
