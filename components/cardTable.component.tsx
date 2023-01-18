import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";

function CardTable(props) {
  const [open, setOpen] = useState(false);
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <header>
        <h3 className="bg-dark-blue flex items-center font-base font-semibold text-white px-[25px] py-1 h-[45px] mb-[15px]">
          ORDER SUMMARY
        </h3>
        <div className="w-full flex justify-between ">
          <p className="text-dark-blue text-sm font-semibold">
            Property & Services
          </p>
          <p className="text-dark-blue text-sm font-semibold">Price</p>
        </div>
      </header>
      <div className="border border-[#e5e7eb] rounded-sm my-2">
        <div className="w-full flex px-4 py-1 justify-between">
          <div className="w-[70%]">
            <p className="text-[18px] text-dark-blue font-semibold">
              3D Business Solutions (Accountancy Book Keeping IT Business
              Mobiles & HR), Accountancy, Leicester, Leicestershire, LE11AA
            </p>
          </div>
        </div>

        <div className="w-full">
          <ul className="w-full px-4">
            <li className="py-3 flex border-b border-[#e5e7eb]">
              <p className="text-[16px] text-dark-blue font-semibold">
                &#8618; Electrical Portable Appliance Test (PAT)
              </p>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
              />
            </li>
            <li className="py-3 flex border-b border-[#e5e7eb]">
              <p className="text-[16px] text-dark-blue font-semibold">
                &#8618; Electrical Portable Appliance Test (PAT)
              </p>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
              />
            </li>
          </ul>
        </div>
        <ButtonComponent
          text="Add an other service"
          className=" flex justify-center text-[13px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
        />
        <br />
        <TextArea />
        <div className="w-full px-4">
          <p className="text-dark-blue text-[18px] font-semibold ">
            Keyholder Info (Contact for Access)
            <FontAwesomeIcon className="ml-2" icon={faInfoCircle} />
          </p>
          <KeyHolderInfo />
        </div>
      </div>
      <div className="border border-[#e5e7eb] rounded-sm my-2">
        <div className="w-full flex px-4 py-1 justify-between">
          <div className="w-[70%]">
            <p className="text-[18px] text-dark-blue font-semibold">
              3D Business Solutions (Accountancy Book Keeping IT Business
              Mobiles & HR), Accountancy, Leicester, Leicestershire, LE11AA
            </p>
          </div>
        </div>

        <div className="w-full">
          <ul className="w-full px-4">
            <li className="py-3 flex border-b border-[#e5e7eb]">
              <p className="text-[16px] text-dark-blue font-semibold">
                &#8618; Electrical Portable Appliance Test (PAT)
              </p>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
              />
            </li>
            <li className="py-3 flex border-b border-[#e5e7eb]">
              <p className="text-[16px] text-dark-blue font-semibold">
                &#8618; Electrical Portable Appliance Test (PAT)
              </p>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
              />
            </li>
            <li className="py-3 flex border-b border-[#e5e7eb]">
              <p className="text-[16px] text-dark-blue font-semibold">
                &#8618; Electrical Portable Appliance Test (PAT)
              </p>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
              />
            </li>
          </ul>
        </div>
        <div className="w-full px-4">
          <ButtonComponent
            text="Add an other service"
            className=" flex justify-center text-[13px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
          />
          <br />
          <TextArea />
          <p className="text-dark-blue text-[18px] font-semibold ">
            Keyholder Info (Contact for Access)
            <FontAwesomeIcon className="ml-2" icon={faInfoCircle} />
          </p>
          <KeyHolderInfo hide={false} />
        </div>
      </div>
    </div>
  );
}

function KeyHolderInfo({ hide = true }: any) {
  return (
    <div className="relative bg-[#ececec]">
      <div className="px-3 py-1">
        <span
          className="absolute top-1 right-3 cursor-pointer text-sm text-dark-blue"
          onClick={() => (hide = !hide)}
        >
          Edit
        </span>
        <div className="flex flex-col sm:flex-row my-2 sm:space-x-44">
          <p className="text-dark-blue text-[16px] font-semibold break-all">
            Name: Rosmery Ballard
          </p>
          <p className="text-dark-blue text-[16px] font-semibold break-all">
            Email: romeryballlr@gmail.com
          </p>
        </div>
        <div className="flex flex-col sm:flex-row my-2 md:space-x-44">
          <p className="text-dark-blue text-[16px] font-semibold break-all">
            Contact 1: 07942423523
          </p>
          <p className="text-dark-blue text-[16px] font-semibold break-all">
            Contact 2: 07942423523
          </p>
        </div>
      </div>
      {!hide && (
        <div className=" w-[60%] sm:w-[45%] absolute bg-[#ececec] px-3 top-5 right-1 ">
          <div className="w-full">
            <label className="text-sm font-semibold text-dark-blue">
              Name
              <span className="text-[#ff0000] text-xl ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              required={true}
              className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
              onChange={() => {}}
            />
          </div>

          <div className="w-full">
            <label className="text-sm font-semibold text-dark-blue">
              Email
              <span className="text-[#ff0000] text-xl ml-1">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="name"
              required={true}
              className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
              onChange={() => {}}
            />
          </div>

          <div className="w-full">
            <label className="text-sm font-semibold text-dark-blue">
              Contact 1<span className="text-[#ff0000] text-xl ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Phone No"
              name="name"
              required={true}
              className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
              onChange={() => {}}
            />
          </div>

          <div className="w-full">
            <label className="text-sm font-semibold text-dark-blue">
              Contact 2<span className="text-[#ff0000] text-xl ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Phone No"
              name="name"
              required={true}
              className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
              onChange={() => {}}
            />
          </div>

          <div className="w-[80%] mx-auto my-2">
            <ButtonComponent
              text="SAVE"
              className="bg-dark-blue text-white text-[13px] px-[20px] py-[10px]
                 hover:bg-lime hover:text-white ease-in duration-200"
            />
            <ButtonComponent />
          </div>
        </div>
      )}
    </div>
  );
}

function TextArea() {
  return (
    <div className="w-full px-4">
      <label className="text-[15px] text-dark-blue font-semibold ">
        Order Notes (optional)
      </label>
      <textarea
        cols={80}
        placeholder="You can provide any special instructions/notes to help us deal with your order."
        name="orderNotes"
        className={`border w-full outline-none border-grey-500 py-2.5 px-3`}
        onChange={() => {}}
      ></textarea>
    </div>
  );
}
export default CardTable;
