import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMessage } from "@fortawesome/free-regular-svg-icons";
import ButtonComponent from "../components/button.component";

function RequestEicrWithRecommendations(props: any) {
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:max-w-[1140px]">
        <div className="max-w-[900px] mx-[120px] pt-[80px] pb-[70px]">
          <div className="border-l-[6px] border-lime mb-[26px] px-6 pt-[2px]">
            <h4 className="text-sm leading-6 mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
              REQUEST FOR
            </h4>
            <h2 className="text-[28px] text-[#1a1a1a] font-semibold ">
              EICR with Recommendation(s)
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
              Many thanks for getting in touch to request EICR with
              recommendation(s) for the above property.
            </p>
            <p className="text-[15px] text-[#1a1a1a] font-normal mb-[16px]">
              Please use the box below if you wish to provide any additional
              information or instructions and press "SUBMIT EICR REQUEST"
              button.
            </p>

            <h4 className="text-[28px] text-[#1a1a1a] mb-[20px] font-normal leading-none">
              Additional Information
            </h4>
            <div className="mb-[35px]">
              <TextArea
                placeholder="Please use this box to provide any additional information related to your
               remedial work or quotation request."
                inputClass=" pt-1 pb-6 px-4"
                register={register}
                name="enquiry"
              />
            </div>
            <ButtonComponent
              text="Submit Request"
              className="bg-lime text-sm text-white font-normal uppercase px-[20px] py-[13px]
                 hover:bg-dark-blue ease-in duration-200"
            />
            <div className="text-center p-[10px]">
              <p className="text-black text-sm font-bold">OR</p>
            </div>

            <ButtonComponent
              text="CLICK HERE to Request an All-Inclusive Quotation"
              className="bg-lime text-sm text-white font-semibold uppercase px-[20px] py-[13px]
                 hover:bg-dark-blue ease-in duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
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
export default RequestEicrWithRecommendations;
