import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMessage } from "@fortawesome/free-regular-svg-icons";
import ButtonComponent from "../components/button.component";
import { useRouter } from "next/router";
import Head from "next/head";

function RequestForRemedialWorkQuotation(props: any) {
  const router = useRouter();
  const [details, setDetails] = useState<any>({
    customer_address: "",
    customer_display_name: "",
    appointment_id: "",
    order_id: "",
    customer_first_name: "",
    customer_last_name: "",
    is_quote_requested: "",
    app_id: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { app_id } = router.query;
  useEffect(() => {
    const data = props.props.data;
    if (data.is_quote_requested) {
      setIsSubmitted(true);
    }
    setDetails({ ...data });
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const timeInterval = [
    { title: "Please select an option", value: "" },
    { title: "As Soon as possible", value: "As Soon as possible" },
    { title: "Within a week", value: "Within a week" },
    { title: "Within 2 week", value: "Within 2 week" },
    { title: "Within 3 week", value: "Within 3 week" },
    { title: "Within 4 week", value: "Within 4 week" },
    { title: "Other", value: "Other" },
  ];

  const onSubmit = async (data) => {
    if (data) {
      const body = { app_id, ...data };
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(
          `${process.env.BASE_URL_DEV}orders/update_remedial_quote_request`,
          requestOptions
        );
        if (!response.ok) {
          switch (response.status) {
          }
        } else {
          const data = await response.json();
          setIsSubmitted(true);
        }
      } catch (err) {}
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>
          Request for Remedial Work Quotation - Nationwide Surveyors
        </title>
      </Head>
      <div className="w-full xl:max-w-[1140px]">
        <div className="mx-[25px] sm:max-w-[900px] sm:mx-[120px] pt-[80px] pb-[70px]">
          <div className="border-l-[6px] border-lime mb-[26px] px-6 pt-[2px]">
            <h4 className="text-sm leading-6 mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
              REQUEST FOR
            </h4>
            <h2 className="text-[28px] text-[#1a1a1a] font-semibold ">
              Remedial Work Quotation
            </h2>
          </div>
          {isSubmitted && (
            <div>
              <h4 className="text-[28px] leading-8 font-medium text-dark-blue">
                Many Thanks {details.customer_first_name}
                {details.customer_last_name}
              </h4>
              <h5 className="text-[20px] leading-8 font-semibold text-dark-blue mt-5">
                We have successfully received your quotation request and aim to
                provide quotation within 24 hours.
              </h5>
            </div>
          )}
          {!isSubmitted && (
            <div>
              <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] mt-[6px] font-normal leading-none">
                Dear {details?.customer_display_name}
              </h4>
              <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] font-normal leading-none">
                Ref: {details.customer_address}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mb-[20px]">
                  <Select
                    className="text-sm leading-8 text-dark-blue font-semibold"
                    name="how_soon_needed"
                    inputClass="border-[#DEDEDE] py-1.5"
                    options={timeInterval}
                    register={register}
                    errors={errors}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
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
                    name="additional_information"
                    errors={errors}
                    required={true}
                    errorClass="text-[#ff0000] text-sm font-semibold float-right"
                  />
                </div>
                <ButtonComponent
                  text="Submit Quotation Request"
                  className="bg-lime text-sm text-white font-normal uppercase px-[20px] py-[13px]
                 hover:bg-dark-blue ease-in duration-200"
                />
              </form>
            </div>
          )}
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
  required = true,
  errors = {},
  errorClass = "",
}: any) => {
  return (
    <>
      <div
        className={`border shadow-sm flex items-center relative ${inputClass}`}
      >
        <FontAwesomeIcon
          className="w-[16px] h-[16px] absolute left-2 inset-y-auto text-lime"
          icon={faClock}
        />
        <select
          {...register(name, {
            required: { value: required, message: "Field is Required" },
          })}
          name={name}
          required={required}
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
    </>
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
  required = true,
  errors = {},
  errorClass = "",
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
        {...register(name)}
      ></textarea>
      {errors[name] && (
        <p className={`${errorClass}`}>{errors[name].message}</p>
      )}
    </div>
  );
}
RequestForRemedialWorkQuotation.getInitialProps = async (props) => {
  const { app_id } = props.query;
  const response = await fetch(
    `${process.env.BASE_URL_DEV}orders/get_remedial_quote_request?app_id=${app_id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};

export default RequestForRemedialWorkQuotation;
