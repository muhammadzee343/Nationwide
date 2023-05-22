import React, { useEffect, useMemo, useState } from "react";
import TextField from "../components/textFied.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import ButtonComponent from "../components/button.component";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image';
import formImage from '../public/Rectangle394.png'
import CreatableSelect from 'react-select/creatable';
import {VALIDATION_CONFIG} from "../config/validation.config";
import Swal from "sweetalert2";


function ContactUsNew({ Services }: any) {

  const router = useRouter();
  const { enquiryOrder } = router.query;

  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [selectedServiceId, setSelectedServiceId] = useState([]);

  const [postCodes, setPostCodes] = useState([])

  const getPostCodes = async () =>{
    const res = await fetch(`${process.env.BASE_URL_DEV}/postcodes`);
    const data = await res.json();
    let newData = data.postcodes.map((item:any)=>{
      return { value: item, label: item.toUpperCase() }
    })
    setPostCodes(newData)
  }

  useEffect(() => {
    getPostCodes()
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setError,
    clearErrors
  } = useForm({mode: "onChange"});

  const join = async (data: any) => {
    if (!selectedService.length) {
      return;
    }
    let postCodes = ""
      data.postCodes.forEach((item: any, index: any) => {
          postCodes += item.value;
          if (index !== data.postCodes.length - 1) {
              postCodes += ", ";
          }
      });
    const body = {
      join_us_form:{
        full_name: data.full_name,
        postcode: postCodes,
        mobile: data.phone,
        email: data.email
      },
      services: [...selectedServiceId],
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      `${process.env.BASE_URL_DEV}join_us_forms/join_as_service_provider`,
      requestOptions
    );

    if (response.ok) {
      Swal.fire({
        title: 'Thanks!',
        text: 'We will get back to you soon',
        icon: 'success',
        confirmButtonText: 'Close',
        confirmButtonColor:'#c2cf10'
      })
      reset({
        full_name: "",
        phone: "",
        email:"",
        postCodes: [],
      })
    } else {
      alert("Something Went wrong");
    }
  };

  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    const services = Services.filter(
        (data) => data.in_stock === true
    ).filter(
        (data) => data.category === "residential_property"
    );

    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      if(!service.name.includes('Commercial') && !service.name.includes('EICR-Remedial') && !service.name.includes('Additional Charges')){
        elements.push(
          <div
            key={i}
            className="w-full "
            onClick={() => selectService(service)}
          >
            <ServiceSelectionCard
              title={service.name}
              className={`${selectedServiceId.includes(service.id) ? "bg-lime self-end " : ""
              } text-[15px] py-[11px] border-lime border-[1px]`}
            />
          </div>
        );
      }
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
              <form onSubmit={handleSubmit(join)}>
                  <div className="w-full md:px-8  xl:max-w-[1114px] flex flex-col items-center">
                      <div className="self-start mb-[20px] px-4 md:px-0">
                          <div className="border-b-4 rounded-full border-lime w-[85px] mb-3"></div>
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
                            <h2 className="text-[21px] font-bold">Your Contact Details</h2>
                            <p className="text-[12px] text-gray-600">This is to check the availability</p>
                          </div>
                          <div className="px-4 md:px-8 pt-4">
                              <div className="w-full gap-y-6 " >
                                  <div className="pb-8">
                                      <div className="w-full flex flex-col md:flex-row flex-wrap gap-y-6 mt-5 justify-between">
                                          <div className="w-full ">
                                              <TextField
                                                  lable="Full Name"
                                                  name="full_name"
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
                                              <SelectPostCode
                                                  label="Postcodes you cover"
                                                  className="text-lg leading-8 text-dark-blue"
                                                  name="postCodes"
                                                  errors={errors}
                                                  register={register}
                                                  options={postCodes}
                                                  setError={setError}
                                                  clearErrors={clearErrors}
                                                  errorClass="text-[#ff0000] text-sm font-semibold float-right"
                                                  inputClass="border-lime py-2.5 px-3"
                                                  required={true}
                                                  control={control}
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                          <div className="w-full md:w-[50%] bg-white rounded-lg md:drop-shadow-lg mb-6 md:mb-0 md:pt-8">
                              <div className="">
                                  <p className="text-[24px] capitalize font-bold px-4 md:px-8 text-dark-blue mr-3 ">
                                       Choose services you offer
                                  </p>
                              </div>
                              <div className="w-full flex flex-col gap-y-3 justify-between items-center p-4">
                                {services}
                              </div>
                          </div>
                      </div>
                      <div className="flex w-full md:w-[50%] mb-14 px-8 md:px-0 gap-x-4 mt-4">
                          <ButtonComponent
                              text="Submit"
                              className="bg-lime  text-dark-blue uppercase text-lg font-semibold  hover:bg-dark-blue hover:text-white ease-in duration-200"
                          />
                        <ButtonComponent
                          text="Cancel"
                          className="border-[2px] border-dark-blue text-dark-blue uppercase text-lg font-semibold py-[9px] md:py-[12px] hover:bg-dark-blue hover:text-white ease-in duration-200"
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

const SelectPostCode = ({
                  label,
                  name,
                  required,
                  className,
                  options,
                  setError,
                  clearErrors,
                  errors = {},
                  control,
                  errorClass = "",
                }: any) => {

  const customStyles = {
    control: (provided:any) => ({
      ...provided,
      border: '1px solid #C2CF10',
      boxShadow: 'none',
      borderRadius:'none',
      minHeight:'unset'
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F0F0F0' : 'white',
      color: '#374151',
    }),
      indicatorsContainer: (provided) => ({
          ...provided,
          display: 'none',
      }),
      dropdownIndicator: (provided) => ({
          ...provided,
          display: 'none',
      }),
      menu: (provided) => ({
          ...provided,
          display: 'none',
      }),
  };
  const validateOptions = (options:any) => {
    const errors = []
    if(options.length> 0){
         options.map((data:any, index:any)=>{
           const res = VALIDATION_CONFIG.postCode(data.value.toLowerCase())
           if(res !== true){
             console.log('here',data.value)
             setError('postCodes', {type:'pattern', message:'Please enter valid post codes'})
             errors[index] = "Please enter valid post code"
           }else{
             clearErrors('postCodes')
           }
         })
       }
    return errors.length>0 ? 'Please enter valid post code' : null;
  }

  return (
    <>
      <label className={`${className}`}>
        {label}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={{required:'Field is required'}}
        render={({field ,fieldState: { error,}}) =>{
          return(
            <>
              <CreatableSelect
                {...field}
                isSearchable={true}
                isMulti
                placeholder="Please select post code"
                styles={customStyles}
                name={name}/>
              {error && (
                <div
                  className={
                    `flex  text-sm text-red-800 rounded-lg mt-2 dark:bg-gray-800 dark:text-red-400 ${errorClass}`
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
                  <div>{error.message}</div>
                </div>
              )}
            </>
          )
        }
      }
      />
    </>
  );
};

export default ContactUsNew;
