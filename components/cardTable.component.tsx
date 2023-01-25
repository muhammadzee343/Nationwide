import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";

function CardTable({ cart }: any) {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

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
      {cartItems?.map((ele, index, array) => {
        return (
          <div className="border border-[#e5e7eb] rounded-sm my-2" key={index}>
            <div className="w-full flex px-4 py-1 justify-between">
              <div className="w-[70%]">
                <p className="text-[18px] text-dark-blue font-semibold">
                  {ele?.order_address}
                  {/*3D Business Solutions (Accountancy Book Keeping IT Business*/}
                  {/*Mobiles & HR), Accountancy, Leicester, Leicestershire, LE11AA*/}
                </p>
              </div>
            </div>

            <div className="w-full">
              <ul className="w-full px-4">
                {ele?.products.map((e, index) => {
                  return (
                    <li
                      key={index}
                      className="py-3 flex border-b border-[#e5e7eb]"
                    >
                      <p className="text-[16px] text-dark-blue font-semibold">
                        &#8618; {e?.product_name}
                      </p>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="text-[#ff0000] h-[20px] cursor-pointer ml-2 mt-1"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-3">
              <ButtonComponent
                text="Add an other service"
                className=" flex justify-center text-[13px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
              />
            </div>
            <br />
            <TextArea />
            <div className="w-full px-4">
              <p className="text-dark-blue text-[18px] font-semibold flex">
                Keyholder Info (Contact for Access)
                <FontAwesomeIcon className="ml-2 w-5" icon={faInfoCircle} />
              </p>
              <KeyHolderInfo
                item={ele}
                i={index}
                setItem={setCartItems}
                cart={array}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function KeyHolderInfo({ item, setItem, i, cart }: any) {
  const hide = item.edit;
  return (
    <div className="relative bg-[#ececec]">
      <div className="px-3 py-1">
        <span
          className="absolute top-[-20px] rounded right-3 cursor-pointer text-sm text-dark-blue font-bold"
          onClick={() => {
            setItem((prevValue) => {
              const temp = {
                ...prevValue[i],
                edit: !prevValue[i].edit,
              };
              const newVal = prevValue.map((ele, index) => {
                return index == i ? ele : temp;
              });

              return newVal;
            });
          }}
        >
          Edit
        </span>

        <div className={hide ? "hidden" : ""}>
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

        <div className={hide ? "" : "hidden"}>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col sm:flex-row justify-evenly xxl:gap-x-28">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">
                  Name
                  <span className="text-[#ff0000] text-xl ml-1">*</span>
                </label>
                <p className="text-dark-blue text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">
                  Name:
                </p>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  required={true}
                  className={`border w-full h-[40px] ml-2  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">
                  Contact
                  <span className="text-[#ff0000] text-xl ml-1">*</span>
                </label>
                <p className="text-dark-blue text-[16px] mr-2 font-semibold break-all sm:break-normal  hidden sm:flex">
                  Contact:
                </p>
                <input
                  type="text"
                  placeholder="Enter your Contact"
                  name="contact"
                  required={true}
                  className={`border w-full h-[40px] ml-2  focus:border-lime  outline-none
                   focus:ring-transparent shadow-sm`}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  justify-evenly xxl:gap-x-28 ">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">
                  Email
                  <span className="text-[#ff0000] text-xl ml-1">*</span>
                </label>
                <p className="text-dark-blue mr-1 text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">
                  Email:
                </p>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="name"
                  required={true}
                  className={`border w-full h-[40px] ml-2  focus:border-lime  outline-none
                   focus:ring-transparent shadow-sm`}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">
                  Contact2
                  <span className="text-[#ff0000] text-xl ml-1">*</span>
                </label>
                <p className="text-dark-blue text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">
                  Contact2:
                </p>
                <input
                  type="text"
                  placeholder="Enter your Contact"
                  name="contact2"
                  required={true}
                  className={`border w-full h-[40px] ml-2  focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
