import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import AlertBox from "./alertBox.component";
import TextField from "./TextFied.component";
import TextArea from "./TextArea.component";
import ButtonComponent from "./Button.component";

function RequestCallBack(props: any) {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="bg-white shadow-md relative">
      {!collapse && (
        <span
          className=" absolute top-[22px] right-[12px] bg-white rounded-full
       w-6 h-6 flex justify-center items-center cursor-pointer"
          onClick={() => setCollapse(!collapse)}
        >
          <FontAwesomeIcon className="text-dark-blue w-3" icon={faXmark} />
        </span>
      )}
      <div>
        <h4
          className={` px-[25px] pt-[15px] pb-[15px] ${
            !collapse
              ? "bg-dark-blue text-white text-[26px] font-semibold"
              : "bg-lime hover:bg-dark-blue hover:text-white ease-in duration-200" +
                " text-dark-blue text-[17px] font-bold"
          } flex justify-center gap-2 cursor-pointer`}
          onClick={() => setCollapse(!collapse)}
        >
          REQUEST A CALLBACK
          {collapse && (
            <FontAwesomeIcon className=" w-3" icon={faChevronRight} />
          )}
        </h4>
      </div>
      {/*Content*/}
      {!collapse && (
        <div className={`px-[20px] py-[25px] flex flex-col`}>
          <AlertBox
            text="If you would like to discuss above quotation, check availability or got any other questions,
         please fill and submit call back request. We aim to respond within 60 minutes of receiving callback
          requests during our working hours."
            className="text-[14px]"
          />
          <div className="flex flex-col my-[25px]">
            <div className="flex justify-around flex-wrap">
              <div className=" w-full sm:w-[45%]">
                <TextField
                  handleChange={() => {}}
                  lable="First Name"
                  name="firstname"
                  placeholder="Enter first name here"
                />
              </div>
              <div className="w-full sm:w-[45%]">
                <TextField
                  handleChange={() => {}}
                  lable="Last Name"
                  name="lastname"
                  placeholder="Enter last name here"
                />
              </div>
            </div>
            <hr className="h-[2px] bg-[#ececec] my-[25px]" />
            <div className="flex justify-around flex-wrap">
              <div className="w-full sm:w-[45%]">
                <TextField
                  handleChange={() => {}}
                  lable="Phone"
                  name="phone"
                  placeholder="Enter a callback number"
                />
              </div>
              <div className="w-full sm:w-[45%]">
                <TextField
                  handleChange={() => {}}
                  lable="Email"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            <hr className="h-[2px] bg-[#ececec] my-[25px]" />
            <TextArea
              lable="Additional Notes"
              placeholder="Any additional information"
            />
            <hr className="h-[2px] bg-[#ececec] my-[25px]" />
            <ButtonComponent
              text="Submit"
              className="flex font-bold uppercase justify-center items-center text-sm bg-lime
            border border-lime hover:bg-dark-blue hover:text-white px-[28px] py-[12px] ease-in duration-200"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestCallBack;
