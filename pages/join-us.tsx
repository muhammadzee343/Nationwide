import React, { useState } from "react";
import TextField from "../components/textFied.component";
import { useForm } from "react-hook-form";
import RadioInput from "../components/radioInput.component";
import TextArea from "../components/textArea.component";
import ButtonComponent from "../components/button.component";
import Head from "next/head";

const JoinUs = (props: any) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({});

  const [submitted, setSubmitted] = useState(false);

  const ageGroup = [
    { title: "18-20", value: "18-20" },
    { title: "21-25", value: "21-25" },
    { title: "26-30", value: "26-30" },
    { title: "31-35", value: "31-35" },
    { title: "36-40", value: "36-40" },
    { title: "40+", value: "40+" },
  ];
  const gender = [
    { title: "Please Select", value: "" },
    { title: "Male", value: "male" },
    { title: "Female", value: "female" },
    { title: "Other", value: "other" },
  ];
  const positions = [
    { title: "Please select relevant role", value: "" },
    { title: "EICR Testing Inspector", value: "eicr_testing_inspector" },
    {
      title: "Electrician - Remedial Work",
      value: "electrician_remedial_work",
    },
    {
      title: "Electrician - Remedial and EICRs",
      value: "electrician_remedial_and_eicrs",
    },
    { title: "Energy Assessor - Domestic", value: "energy_assessor_domestic" },
    {
      title: "Energy Assessor - Commercial",
      value: "energy_assessor_commercial",
    },
    { title: "Gas Engineer", value: "gas_engineer" },
    { title: "Chartered Surveyor", value: "chartered_surveyor" },
    { title: "Retrofit Assessor", value: "retrofit_assessor" },
    { title: "Other", value: "other" },
  ];

  const onSubmit = async (data) => {
    let ref: any = {};
    let ref1: any = {};
    let ref2: any = {};

    Object.keys(data).forEach((key) => {
      if (key.includes("1")) {
        let x = key.replace("1", "");
        ref1[x] = data[key];
      } else if (key.includes("2")) {
        let x = key.replace("2", "");
        ref2[x] = data[key];
      } else {
        ref[key] = data[key];
      }
    });

    const body = {
      join_us_form: { ...ref },
      references: [ref1, ref2],
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch(
      `${process.env.BASE_URL_DEV}join_us_forms`,
      requestOptions
    );
    if (response.ok) {
      const res = await response.json();
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>Join Us - Nationwide Surveyors</title>
      </Head>
      <div
        className="w-full flex flex-col justify-center items-center
       md:min-w-[750px] md:max-w-[750px] lg:min-w-[970px] lg:max-w-[970px]
        xl:min-w-[1155px] xl:max-w-[1170px] pt-[35px] pb-[25px] px-2 sm:px-0"
      >
        <Header />
        {!submitted && (
          <>
            <FormContainer heading="Your Information">
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Full Name:"
                    name="full_name"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Address:"
                    name="address"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Postcode:"
                    name="postcode"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>

              </div>

              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Telephone"
                    name="telephone"
                    required={false}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Mobile:"
                    name="mobile"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>

                <div className="w-full md:w-[31.5%] mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="E-mail:"
                    name="email"
                    errors={errors}
                    pattern={/^\S+@\S+$/i}
                    required={true}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full md:w-[31.5%]">
                  <Select
                    label="Age Group:"
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    name="age_group"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                    required={true}
                    options={ageGroup}
                  />
                </div>
                <div className="w-full md:w-[31.5%]">
                  <Select
                      label="Gender:"
                      className="text-sm leading-8 text-dark-blue font-semibold"
                      name="gender"
                      errors={errors}
                      register={register}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      inputClass="border-lime py-2 px-3"
                      required={true}
                      options={gender}
                  />
                </div>
                <div className="w-full md:w-[31.5%]">
                  <Select
                    label="Position looking for ?"
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    name="position"
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                    required={true}
                    options={positions}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full p-0 md:w-[31.5%]">
                  <p className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a] ">
                    Do you have hands on field experience of your trade?
                  </p>
                  <div className="flex gap-3">
                    <RadioInput
                      label="Yes"
                      required={true}
                      register={register}
                      name="experience"
                      value={true}
                      errors={errors}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                    <RadioInput
                      label="No"
                      required={true}
                      errors={errors}
                      register={register}
                      name="experience"
                      value={false}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                  </div>
                  <div className="w-full">
                  <TextArea
                    lable="If YES, please provide brief details of your
                    past experience."
                    className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a]"
                    inputClass="border-lime py-7 px-3 mt-3 "
                    register={register}
                    name="experience_detail"
                  />
                </div>
                </div>
                <div className="w-full p-0 md:w-[31.5%]">
                  <p className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a] ">
                    Do you hold relevant qualification(s) related to the role
                    you are applying for?
                  </p>
                  <div className="flex gap-3">
                    <RadioInput
                      label="Yes"
                      required={true}
                      register={register}
                      errors={errors}
                      name="qualification"
                      value={true}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                    <RadioInput
                      label="No"
                      required={true}
                      errors={errors}
                      register={register}
                      name="qualification"
                      value={false}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                  </div>
                  <div className="w-full ">
                  <TextArea
                    lable="If YES, please provide details of all relevant qualification you hold."
                    className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a]"
                    inputClass="border-lime py-7 px-3 mt-3"
                    register={register}
                    name="qualification_detail"
                  />
                </div>
                </div>
                <div className="w-full md:w-[31.5%]">
                  <p className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a] ">
                    Do you hold membership(s) of the relevant schemes/trade
                    bodies?
                  </p>
                  <div className="flex gap-3">
                    <RadioInput
                      label="Yes"
                      required={true}
                      register={register}
                      errors={errors}
                      name="membership_holder"
                      value={true}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                    <RadioInput
                      label="No"
                      required={true}
                      register={register}
                      errors={errors}
                      name="membership_holder"
                      value={false}
                      errorClass="text-[#ff0000] text-sm font-semibold float-right"
                      className="text-sm text-dark-blue font-semibold mb-3"
                    />
                  </div>
                  <div className="w-full ">
                  <TextArea
                    lable="If YES, please provide the details of your membership(s)."
                    className="mt-[15px] mb-[10px] text-sm  text-[#1a1a1a]"
                    inputClass="border-lime py-7 px-3 mt-3"
                    register={register}
                    name="membership_detail"
                  />
                </div>
                </div>
              </div>
            </FormContainer>
            <div className="w-full flex flex-col md:flex md:flex-row gap-x-5">
              <div className="w-full md:w-[50%]">
            <FormContainer heading="First Reference">
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Title"
                    name="title1"
                    required={true}
                    errors={errors}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable=" Full Name"
                    name="full_name1"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Address 1:"
                    name="address1"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Postcode:"
                    name="postcode1"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Telephone:"
                    name="telephone1"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Mobile:"
                    name="mobile1"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="E-mail"
                    name="email1"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Relation:"
                    name="relation1"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="How long have you known this person?"
                    name="acquaintance_period1"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
            </FormContainer>
            </div>
              <div className="w-full md:w-[50%]">
            <FormContainer heading="Second Reference">
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Title"
                    name="title2"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable=" Full Name"
                    name="full_name2"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Address 1:"
                    name="address2"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Postcode:"
                    name="postcode2"
                    required={false}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Telephone:"
                    name="telephone2"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Mobile:"
                    name="mobile2"
                    required={true}
                    errors={errors}
                    register={register}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between justify-center">
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="E-mail"
                    name="email2"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="Relation:"
                    name="relation2"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
                <div className="w-full mb-1">
                  <TextField
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    lable="How long have you known this person?"
                    name="acquaintance_period2"
                    required={false}
                    register={register}
                    inputClass="border-lime py-2 px-3"
                  />
                </div>
              </div>
            </FormContainer>
              </div>
            </div>
            <FormContainer heading="">
              <div className="w-full">
                <TextArea
                  lable="Why you want to join Nationwide Services-UK?"
                  className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a]"
                  inputClass="border-lime py-7 px-3 mt-1"
                  errors={errors}
                  register={register}
                  errorClass="text-[#ff0000] text-sm font-semibold mb-2"
                  required={true}
                  name="inspiration_detail"
                />
              </div>
              <div className="mt-4">
                <ButtonComponent
                  onClick={handleSubmit(onSubmit)}
                  text="SUBMIT APPLICATION"
                  className="bg-lime text-white font-semibold text-sm uppercase px-[20px] py-[13px] ease-in duration-200 hover:bg-dark-blue"
                />
              </div>
            </FormContainer>
          </>
        )}
        {submitted && (
          <div>
            <p className="text-dark-blue text-[20px] leading-8 font-semibold mb-3">
              Thank you for applying to work with us. We have successfully
              received your application and our on-boarding team is currently
              reviewing all applications and we aim to update all applicants
              within 5 working days. You will receive a call/email from our
              on-boarding team to schedule an initial phone interview. In any
              case, we will keep you posted on the status of your application.
            </p>
            <p className="text-dark-blue text-[20px] leading-8 font-semibold">
              Thank you again, for your interest in becoming part of Nationwide
              Services.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b-4 border-lime w-[65px] mb-3"></div>
      <h1 className="font-semibold text-4xl mb-3 text-dark-blue">
        Join Us
      </h1>

      <br />
      <p className="md:w-5/6 sm:w-4/6 text-[15px] leading-7 sm:px-16 md:px-0">
        We are always looking to partner with reliable and committed
        professionals. If you have a passion for customer service then complete
        application below and we will get in touch with you soon.
      </p>
      <br />
    </div>
  );
};
const FormContainer = ({ children, heading }: any) => {
  return (
    <div className="w-full pb-[30px] mt-5 shadow-lg">
      {heading && (
        <h4 className="w-full text-center uppercase bg-dark-blue text-white text-[23px] md:text-[27px]  inline-block px-[25px] py-[17px] mb-[25px]">
          {heading}
        </h4>
      )}
      <div className="px-[40px]">{children}</div>
    </div>
  );
};
const Select = ({
  label,
  register,
  name,
  required,
  inputClass,
  className,
  errors = {},
  errorClass = "",
  options = [],
}: any) => {
  return (
    <>
      <label className={`${className}`}>
        {label}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <select
        {...register(name, {
          required: { value: true, message: "Field is Required" },
        })}
        name={name}
        className={`border w-full outline-none focus:border-lime focus:ring-transparent shadow-sm text-[15px] text-[#555555] ${inputClass}`}
      >
        {options.map(({ value, title }: any, index: number) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <p className={`${errorClass}`}>{errors[name].message}</p>
      )}
    </>
  );
};

export default JoinUs;
