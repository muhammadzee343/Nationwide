import React from "react";
import TextField from "../components/TextFied.component";
import { useForm } from "react-hook-form";
import { register } from "tsconfig-paths";
import RadioInput from "../components/RadioInput.component";
import TextArea from "../components/TextArea.component";
import ButtonComponent from "../components/button.component";

const JoinUs = (props: any) => {
  const { register, handleSubmit } = useForm();
  const ageGroup = [
    { title: "18-20", value: "" },
    { title: "21-25", value: "" },
    { title: "26-30", value: "" },
    { title: "31-35", value: "" },
    { title: "36-40", value: "" },
    { title: "40+", value: "" },
  ];
  const gender = [
    { title: "Please Select", value: "" },
    { title: "Male", value: "" },
    { title: "Female", value: "" },
    { title: "Other", value: "" },
  ];
  const positions = [
    { title: "Please select relevant role", value: "" },
    { title: "EICR Testing Inspector", value: "" },
    { title: "Electrician - Remedial and EICRs", value: "" },
    { title: "Energy Assessor - Domestic", value: "" },
    { title: "Energy Assessor - Commercial", value: "" },
    { title: "Gas Engineer", value: "" },
    { title: "Chartered Surveyor", value: "" },
    { title: "Retrofit Assessor", value: "" },
    { title: "Other", value: "" },
  ];
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full flex flex-col justify-center items-center
       md:min-w-[750px] md:max-w-[750px] lg:min-w-[970px] lg:max-w-[970px]
        xl:min-w-[1155px] xl:max-w-[1155px]  pt-[35px] pb-[25px] px-2 sm:px-0"
      >
        <Header />
        <form>
          <FormContainer heading="JOIN US">
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Full Name:"
                  name="fullName"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Address:"
                  name="address"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Postcode:"
                  name="postcode"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Telephone"
                  name="telephone"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Mobile:"
                  name="mobile"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="E-mail:"
                  name="email:"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%]">
                <Select
                  label="Age Group:"
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  name="age"
                  inputClass="border-[#DEDEDE] py-2 px-3"
                  required={true}
                  options={ageGroup}
                />
              </div>
              <div className="w-full md:w-[31.5%]">
                <Select
                  label="Gender:"
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  name="gender"
                  inputClass="border-[#DEDEDE] py-2 px-3"
                  required={true}
                  options={gender}
                />
              </div>
              <div className="w-full md:w-[31.5%]">
                <Select
                  label="Position looking for ?"
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  name="position"
                  inputClass="border-[#DEDEDE] py-2 px-3"
                  required={true}
                  options={positions}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%]">
                <p className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a] ">
                  Do you have hands on field experience of your trade?
                </p>
                <div className="flex gap-3">
                  <RadioInput
                    label="Yes"
                    register={register}
                    name="payment"
                    value="Yes"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                  <RadioInput
                    label="No"
                    register={register}
                    name="payment"
                    value="No"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                </div>
              </div>
              <div className="w-full md:w-[31.5%]">
                <p className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a] ">
                  Do you hold relevant qualification(s) related to the role you
                  are applying for?
                </p>
                <div className="flex gap-3">
                  <RadioInput
                    label="Yes"
                    register={register}
                    name="payment"
                    value="Yes"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                  <RadioInput
                    label="No"
                    register={register}
                    name="payment"
                    value="No"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                </div>
              </div>
              <div className="w-full md:w-[31.5%]">
                <p className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a] ">
                  Do you hold membership(s) of the relevant schemes/trade
                  bodies?
                </p>
                <div className="flex gap-3">
                  <RadioInput
                    label="Yes"
                    register={register}
                    name="payment"
                    value="Yes"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                  <RadioInput
                    label="No"
                    register={register}
                    name="payment"
                    value="No"
                    className="text-sm text-dark-blue font-semibold mb-3"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%]">
                <TextArea
                  lable="If YES, please provide brief details of your
past experience."
                  className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a]"
                  inputClass="border-[#DEDEDE] py-7 px-3 mt-3"
                  register={register}
                  name="enquiry"
                />
              </div>
              <div className="w-full md:w-[31.5%]">
                <TextArea
                  lable="If YES, please provide details of all relevant qualification you hold."
                  className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a]"
                  inputClass="border-[#DEDEDE] py-7 px-3 mt-3"
                  register={register}
                  name="enquiry"
                />
              </div>
              <div className="w-full md:w-[31.5%]">
                <TextArea
                  lable="If YES, please provide the details of your membership(s)."
                  className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a]"
                  inputClass="border-[#DEDEDE] py-7 px-3 mt-3"
                  register={register}
                  name="enquiry"
                />
              </div>
            </div>
          </FormContainer>
          <FormContainer heading="First Reference">
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Title"
                  name="title"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable=" Full Name"
                  name="ref1fullName"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Address 1:"
                  name="ref1Address1"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Postcode:"
                  name="ref1Postcode:"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Telephone:"
                  name="ref1telephone"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Mobile:"
                  name="ref1Mobile"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="E-mail"
                  name="ref1email"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Relation:"
                  name="ref1relation"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="How long have you known this person?"
                  name="ref1howlong"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
          </FormContainer>
          <FormContainer heading="Second Reference">
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Title"
                  name="title"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable=" Full Name"
                  name="ref2fullName"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Address 1:"
                  name="ref2Address1"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Postcode:"
                  name="ref2Postcode:"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Telephone:"
                  name="ref2telephone"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Mobile:"
                  name="ref2Mobile"
                  required={true}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between justify-center">
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="E-mail"
                  name="ref2email"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="Relation:"
                  name="ref2relation"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
              <div className="w-full md:w-[31.5%] mb-1">
                <TextField
                  handleChange={() => {}}
                  className="text-sm leading-8 text-dark-blue font-semibold"
                  lable="How long have you known this person?"
                  name="ref2howlong"
                  required={false}
                  register={register}
                  inputClass="border-[#DEDEDE] py-2 px-3"
                />
              </div>
            </div>
          </FormContainer>
          <FormContainer heading="">
            <div className="w-full">
              <TextArea
                lable="Why you want to join Nationwide Services-UK? *"
                className="mt-[15px] mb-[10px] text-sm font-semibold text-[#1a1a1a]"
                inputClass="border-[#DEDEDE] py-7 px-3 mt-1"
                register={register}
                name="enquiry"
              />
            </div>
            <div>
              <ButtonComponent
                text="SUBMIT APPLICATION"
                className="bg-lime text-white font-semibold  text-sm uppercase px-[20px] py-[13px] ease-in duration-200"
              />
            </div>
          </FormContainer>
        </form>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="font-semibold text-4xl text-center mb-3 text-dark-blue">
        Join Us
      </h1>
      <div className="h-1.5 w-20 bg-lime" />
      <br />
      <p className=" w-5/6 sm:w-4/6 text-center text-[15px] leading-7 sm:px-16">
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
    <div className="w-full bg-[#dddddd] py-[30px] mt-5 shadow">
      {heading && (
        <h4 className="bg-dark-blue text-white text-[17px] font-semibold inline-block px-[35px] py-[8px] mb-[25px]">
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
  options = [],
}: any) => {
  return (
    <>
      <label className={`${className}`}>
        {label}
        {required && <span className="text-[#ff0000] text-xl ml-1">*</span>}
      </label>
      <select
        ref={register}
        name={name}
        className={`border w-full outline-none focus:border-[#DEDEDE] focus:ring-transparent shadow-sm text-[15px] text-[#555555] ${inputClass}`}
      >
        {options.map(({ value, title }: any, index: number) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default JoinUs;
