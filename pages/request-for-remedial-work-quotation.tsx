import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMessage } from "@fortawesome/free-regular-svg-icons";
import ButtonComponent from "../components/button.component";

function RequestForRemedialWorkQuotation(props: any) {
  const { register, handleSubmit } = useForm();
  const timeInterval = [
    { title: "Please select an option", value: "" },
    { title: "As Soon as possible", value: "As Soon as possible" },
    { title: "Within a week", value: "Within a week" },
    { title: "Within 2 week", value: "Within 2 week" },
    { title: "Within 3 week", value: "Within 3 week" },
    { title: "Within 4 week", value: "Within 4 week" },
    { title: "Other", value: "Other" },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:max-w-[1140px]">
        <div className="max-w-[900px] mx-[120px] pt-[80px] pb-[70px]">
          <div className="border-l-[6px] border-lime mb-[26px] px-6 pt-[2px]">
            <h4 className="text-sm leading-6 mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
              REQUEST FOR
            </h4>
            <h2 className="text-[28px] text-[#1a1a1a] font-semibold ">
              Remedial Work Quotation
            </h2>
          </div>
          <div>
            <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] mt-[6px] font-normal leading-none">
              Dear Tom Test
            </h4>
            <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] font-normal leading-none">
              Ref: 7 Lansdown Road, London, E78NF
            </h4>
            <p className="text-[15px] text-[#1a1a1a] font-normal mb-[20px]">
              Many thanks for getting in touch to request a quotation for
              electrical remrequest-eicr-with-recommendationsedial work at the
              above property.
            </p>
            <p className="text-[15px] text-[#1a1a1a] font-normal mb-[16px]">
              Please complete short questionnaire below and press "Submit
              Quotation Request" button.
            </p>
            <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] font-normal leading-none">
              How soon are you looking to have the remedial work done?
            </h4>
            <div className="w-full mb-[20px]">
              <Select
                className="text-sm leading-8 text-dark-blue font-semibold"
                name="timeinterval"
                inputClass="border-[#DEDEDE] py-1.5"
                options={timeInterval}
                register={register}
              />
            </div>
            <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] font-normal leading-none">
              Additional Information
            </h4>
            <div className="mb-[35px]">
              <TextArea
                placeholder="Please use this box to provide any additional information related to your
               remedial work or quotation request."
                inputClass=" pt-1 pb-4 px-4"
                register={register}
                name="enquiry"
              />
            </div>
            <ButtonComponent
              text="Submit Quotation Request"
              className="bg-lime text-sm text-white font-normal uppercase px-[20px] py-[13px]
                 hover:bg-dark-blue ease-in duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Select = ({
  register,
  name,
  inputClass,
  className,
  options = [],
}: any) => {
  return (
    <div
      className={`border shadow-sm flex items-center relative ${inputClass}`}
    >
      <FontAwesomeIcon
        className="w-[16px] h-[16px] absolute left-2 inset-y-auto text-lime"
        icon={faClock}
      />
      <select
        {...register(name, { required: true })}
        name={name}
        className={`border-0 w-full outline-none focus:border-[#DEDEDE] px-8
         focus:ring-transparent text-[14px] leading-none text-[#555555]`}
      >
        {options.map(({ value, title }: any, index: number) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
function TextArea({
  lable = "",
  placeholder,
  name,
  handleChange,
  className = "",
  inputClass = "",
  register,
}: any) {
  return (
    <div
      className={`border shadow-sm flex items-center relative ${inputClass}`}
    >
      <FontAwesomeIcon
        className="w-[16px] h-[16px] absolute left-2 top-3 text-lime"
        icon={faMessage}
      />
      <textarea
        cols={80}
        placeholder={placeholder}
        name={name}
        className={`w-full border-0 outline-none focus:shadow-none focus:ring-transparent
        placeholder:text-[14px] ${inputClass}`}
        onChange={(e) => handleChange(e)}
        {...register(name)}
      ></textarea>
    </div>
  );
}
export default RequestForRemedialWorkQuotation;
