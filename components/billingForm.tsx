import React, {useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import TextField from "./textFied.component";
import Link from "next/link";
import {Select} from 'antd'
import {OverlayContext} from "../context/sidebarContext";

function BillingForm(props: any) {
  const [addresses, setAddresseses] = useState([]);
  const { isLoading, setIsLoading } = useContext<any>(OverlayContext);
  const { register, setValue, watch, handleSubmit , formState: { errors },  } = useForm({
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
      postAddress:"",
    },
  });
  const postcode = watch("postcode", "");
  const postAddress = watch("postAddress", "");
  const handleChange = (value: string ) => {
    console.log(`Selected: ${value}`);
    setValue("postAddress",value,{shouldValidate:true});
  };
  const getPropertyAddress = async (isFinalReq = false) => {
    if (postcode){
      setIsLoading(true)
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

          setIsLoading(false)
          return false;
        } else {
          const data = await response.json();
          if ((isFinalReq && postAddress.length < 5) || (!isFinalReq) ){
            const addresses = [...data.addresses];
            const newAddress= addresses.map((item) => {
              return{  value: item.address,
                label: item.address,}
            })
            setAddresseses([...newAddress]);
          }

          setIsLoading(false)
          return true;
        }

      } catch (err) {
        setIsLoading(false)
        console.log(err, 'err')
      }
    }

  };

  const submitHandler = (data: any) => {
    getPropertyAddress(true).then((status) =>{
      if (status){
        if (data.postAddress.length > 5){
          props.chargeCard(data);
        }else {
          alert("Please select a valid address.");
        }
      }

    })
  };

  return (
    <form autoComplete={"off"} onSubmit={handleSubmit(submitHandler)}  className="w-full flex justify-between flex-wrap bg-white shadow-xl border border-slate-100 space-y-6 p-[20px]">
      <div className="w-full">
        <h3 className="text-[28px] text-dark-blue leading-7 mb-[15px] font-semibold">
          BILLING DETAILS
        </h3>
        <div className=" flex flex-wrap justify-between justify-center">
          <div className="md:w-[48%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="First Name"
              name="firstName"
              required={true}
              register={register}
              errors={errors}
              inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
            />
          </div>
          <div className="md:w-[48%] mb-1">
            <TextField
              className="text-sm leading-8 text-dark-blue font-semibold"
              lable="Last Name"
              required={true}
              name="lastName"
              register={register}
              errors={errors}
              inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
            />
          </div>
            <div className="md:w-[48%] mb-1">
              <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Company Name (optional)"
                  name="company"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
              />
            </div>
            <div className="md:w-[48%] mb-1">
              <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Email"
                  required={true}
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
              />
            </div>
          <div className="md:w-[48%] flex flex-col md:flex-row justify-between">
            <div className="md:w-[60%]">
              <TextField
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="PostCode"
                  required={true}
                  name="postcode"
                  register={register}
                  errors={errors}
                  inputClass="border-[#DEDEDE] py-2 px-3 rounded-md border"
              />
            </div>
            <div className="mt-5 md:mt-8">
              <ButtonComponent
                  type="button"
                  text="FIND ADDRESS"
                  className="bg-dark-blue text-white text-[13px] px-[20px] py-[10px]
                 hover:bg-lime hover:text-white ease-in duration-200"
                  onClick={()=>{getPropertyAddress()}}
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
                              setValue("postAddress",ele.value,{shouldValidate:true});
                              setValue("streetAddress",ele.value,{shouldValidate:true});
                              setAddresseses([])
                            }
                            }
                        >
                          {ele.value}
                        </div>
                    );
                  })}
                </div>
            )}
          </div>
          </div>

          <div className="w-[48%] mb-1">
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
          <div className="w-[48%] mb-1">
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
        <div className="w-full p-[14px] mb-[15px]">
          <CheckBox
              register={register}
              label="I have read and agree to the website"
              required={true}
          />
          <div className="w-[300px]  mt-3 mb-1 items-center">
            <ButtonComponent
                text="PLACE ORDER"
                className="bg-dark-blue text-white text-[13px] px-[20px] py-[10px]
                 hover:bg-lime hover:text-white ease-in duration-200"
            />
          </div>
        </div>
      </div>
    </form>
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
