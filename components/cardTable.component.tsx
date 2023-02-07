import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import { OverlayContext } from "../context/sidebarContext";

function CardTable({ cart, getCart }: any) {
  const contactType = [
    { title: "Me" },
    { title: "Seller" },
    { title: "Tenant" },
    { title: "Landlord" },
    { title: "Agent" },
    { title: "Other" },
  ];
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    cart?.forEach((item) => {
      item["contact_type"] = "Me";
    });
    setCartItems(cart);
  }, [cart]);

  useEffect(() => {}, [cartItems]);

  const { setIsLoading } = useContext(OverlayContext);

  const changeContactType = (data, index) => {
    cart[index].contact_type = data;

    setCartItems([...cart]);
  };

  const changeInfo = (name: string, data: any, index: number) => {
    console.log(name, data, index);
    cart[index][name] = data;
    console.log(cart);
  };

  const deleteService = async (id, cartNo: number) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}/order_products/${id}`,
        requestOptions
      );
      if (!response.ok) {
        switch (response.status) {
          case 422:
        }
      } else {
        const data = await response.json();
        getCart();
      }
    } catch (err) {}
  };

  const updateOrder = async (e, orderId) => {
    e.preventDefault();
    setIsLoading(true);
    const temp =
      cartItems.find((order) => {
        return order.order_id == orderId;
      }) || "";
    const body = {
      order_address: temp?.order_address,
      contact_name: temp?.contact_name,
      contact_1: temp?.contact_1,
      contact_2: temp?.contact_2,
      contact_email: temp?.contact_email,
      customer_note: temp?.customer_note,
      contact_type: temp?.contact_type,
    };
    console.log(cartItems);
    console.log(temp);
    console.log(body);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}/orders/${orderId}`,
        requestOptions
      );
      if (!response.ok) {
        switch (response.status) {
          case 422:
        }
      } else {
        const data = await response.json();
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const addAnotherService = (cartNo: number) => {
    const postCode = cartItems[cartNo]?.order_postcode;
    const address = cartItems[cartNo]?.order_address;
    const selectedServiceId = cartItems[cartNo]["products"].map(
      (ele) => ele.service_id
    );
    const property = cartItems[cartNo];
    router?.push({
      pathname: "/order-now",
      query: {
        property: "residential_property",
        postCode,
        address,
        ser: selectedServiceId,
      },
    });
  };
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
          <p className="text-dark-blue text-sm px-4 font-semibold">Price</p>
        </div>
      </header>
      {cartItems?.map((cartItems, cartNo, array) => {
        return (
          <div
            className="border border-[#e5e7eb] rounded-sm my-2 py-3"
            key={cartNo}
          >
            <div className="w-full flex px-4 py-1 justify-between">
              <div className="w-full">
                <p className="text-[15px] text-dark-blue font-semibold">
                  {cartItems?.order_address}
                </p>
              </div>
            </div>

            <div className="w-full">
              <ul className="w-full px-4">
                {cartItems?.products.map((e, index) => {
                  return (
                    <li
                      key={index}
                      className="py-1.5 flex justify-between border-b border-[#e5e7eb]"
                    >
                      <div className="flex">
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-[#ff0000] h-[15px] cursor-pointer"
                            onClick={() => deleteService(e.product_id, cartNo)}
                        />
                        <p className="text-[10px] md:text-xs ml-4 text-dark-blue font-semibold">
                          &#8618; {e?.product_name}
                        </p>
                      </div>
                      <p className="text-[10px] md:text-xs text-dark-blue font-semibold">
                        &#163; {e.total_amount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {!router?.query?.aquote && !router?.query.bquote &&
            (
                <div className="px-3">
                  <ButtonComponent
                      text="Add an other service"
                      type="button"
                      className=" flex justify-center text-[14px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
                      onClick={() => addAnotherService(cartNo)}
                  />
                </div>
            )

            }
            <br />

            <div className="w-full px-4">
              <p className="text-dark-blue text-[18px] font-semibold flex">
                (Contact for Access)
                <FontAwesomeIcon className="ml-2 w-5" icon={faInfoCircle} />
              </p>
              <div className="flex flex-wrap gap-x-6 xxl:gap-x-12">
                {contactType.map((type, index) => {
                  return (
                    <RadioInput
                      key={index}
                      label={type.title}
                      name="contact_type"
                      value={type.title}
                      cartItem={cartItems}
                      cart={cart}
                      index={cartNo}
                      changeContactType={changeContactType}
                      className="text-lg text-dark-blue font-semibold mb-3"
                    />
                  );
                })}
              </div>
              {cartItems.contact_type !== "Me" && (
                <KeyHolderInfo
                  item={cartItems}
                  i={cartNo}
                  setItem={setCartItems}
                  cart={array}
                  changeInfo={changeInfo}
                  updateOrder={updateOrder}
                />
              )}
              <div>
                <textarea
                    cols={80}
                    placeholder="You can provide any special instructions/notes to help us deal with your order."
                    name="orderNotes"
                    defaultValue={cartItems.contact_2}
                    className={`border w-full outline-none border-grey-500 py-2.5 px-3`}
                    onChange={(e) => {
                      changeInfo("customer_note", e.target.value, cartNo);
                    }}
                ></textarea>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const RadioInput = ({
  label,
  value,
  name,
  className = "",
  cartItem,
  changeContactType,
  index,
  cart,
}: any) => {
  return (
    <label className={`${className}`}>
      <div className="my-1.5">
        <input
          type="radio"
          value={value}
          defaultChecked={value === cartItem.contact_type}
          className="mb-[2px] mr-[5px] h-[13px] w-[13px]"
          name={`${name}${index}`}
          onChange={() => changeContactType(value, index)}
        />
        {label}
      </div>
    </label>
  );
};

function KeyHolderInfo({
  item,
  setItem,
  i,
  cart,
  changeInfo,
  updateOrder,
}: any) {
  return (
    <div className="relative border-t border-t-[#e5e7eb]">
      <div className="py-1">
        {/*<span*/}
        {/*  className="absolute top-[-20px] rounded right-3 cursor-pointer text-sm text-dark-blue font-bold"*/}
        {/*  onClick={() => {*/}
        {/*    setItem((prevValue) => {*/}
        {/*      const temp = {*/}
        {/*        ...prevValue[i],*/}
        {/*        edit: !prevValue[i].edit,*/}
        {/*      };*/}
        {/*      const newVal = prevValue.map((ele, index) => {*/}
        {/*        return index == i ? ele : temp;*/}
        {/*      });*/}

        {/*      return newVal;*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Edit*/}
        {/*</span>*/}

        {/*/!*<div className={hide ? "hidden" : ""}>*!/*/}
        {/*/!*  <div className="flex flex-col sm:flex-row my-2 sm:space-x-44">*!/*/}
        {/*//     <p className="text-dark-blue text-[16px] font-semibold break-all">*/}
        {/*//       Name: Rosmery Ballard*/}
        {/*//     </p>*/}
        {/*//     <p className="text-dark-blue text-[16px] font-semibold break-all">*/}
        {/*//       Email: romeryballlr@gmail.com*/}
        {/*//     </p>*/}
        {/*/!*  </div>*!/*/}
        {/*//   <div className="flex flex-col sm:flex-row my-2 md:space-x-44">*/}
        {/*//     <p className="text-dark-blue text-[16px] font-semibold break-all">*/}
        {/*//       Contact 1: 07942423523*/}
        {/*/!*    </p>*!/*/}
        {/*/!*    <p className="text-dark-blue text-[16px] font-semibold break-all">*!/*/}
        {/*/!*      Contact 2: 07942423523*!/*/}
        {/*/!*    </p>*!/*/}
        {/*/!*  </div>*!/*/}
        {/*/!*</div>*!/*/}

        <div>
          <form
            onSubmit={(e) => {
              updateOrder(e, item.order_id);
            }}
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-row sm:items-center">
                  {/*<label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">*/}
                  {/*  Name*/}
                  {/*  <span className="text-[#ff0000] text-xl ml-1">*</span>*/}
                  {/*</label>*/}
                  {/*<p className="text-dark-blue text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">*/}
                  {/*  Name:*/}
                  {/*</p>*/}
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Name`}
                    name={`name${i}`}
                    defaultValue={item.contact_name}
                    required={true}
                    className={`w-full px-0 border-0 border-b border-b-grey-500 h-[40px] focus:border-b-lime  outline-none
                   focus:ring-transparent shadow-sm`}
                    onChange={(e) => {
                      changeInfo("contact_name", e.target.value, i);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full sm:flex-row sm:items-center">
                  {/*<label className="text-sm font-semibold text-dark-blue  sm:hidden">*/}
                  {/*  Email*/}
                  {/*  <span className="text-[#ff0000] text-xl ml-1">*</span>*/}
                  {/*</label>*/}
                  {/*<p className="text-dark-blue mr-1 text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">*/}
                  {/*  Email:*/}
                  {/*</p>*/}
                  <input
                    type="email"
                    placeholder={`Enter ${item.contact_type} Email`}
                    name="name"
                    defaultValue={item.contact_email}
                    required={true}
                    className={`border-0 px-0 border-b border-b-grey-500 w-full h-[40px]  focus:border-lime  outline-none
                   focus:ring-transparent shadow-sm`}
                    onChange={(e) => {
                      changeInfo("contact_email", e.target.value, i);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full sm:flex-row sm:items-center">
                  {/*<label className="text-sm font-semibold text-dark-blue  sm:hidden">*/}
                  {/*  Contact*/}
                  {/*  <span className="text-[#ff0000] text-xl ml-1">*</span>*/}
                  {/*</label>*/}
                  {/*<p className="text-dark-blue text-[16px] mr-2 font-semibold break-all sm:break-normal  hidden sm:flex">*/}
                  {/*  Contact:*/}
                  {/*</p>*/}
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Contact`}
                    name="contact"
                    defaultValue={item.contact_1}
                    required={true}
                    className={`border-0 px-0 border-b border-b-grey-500 w-full h-[40px] focus:border-lime  outline-none
                   focus:ring-transparent shadow-sm`}
                    onChange={(e) => {
                      changeInfo("contact_1", e.target.value, i);
                    }}
                  />
                </div>

                <div className="flex flex-col w-full sm:flex-row sm:items-center">
                  {/*<label className="text-sm font-semibold text-dark-blue ml-2 sm:hidden">*/}
                  {/*  Contact2*/}
                  {/*  <span className="text-[#ff0000] text-xl ml-1">*</span>*/}
                  {/*</label>*/}
                  {/*<p className="text-dark-blue text-[16px] font-semibold break-all sm:break-normal  hidden sm:flex">*/}
                  {/*  Contact2:*/}
                  {/*</p>*/}
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Contact2`}
                    name="contact2"
                    defaultValue={item.contact_2}
                    required={true}
                    className={`border-0 px-0 border-b border-b-grey-500 w-full h-[40px] focus:border-lime  outline-none focus:ring-transparent shadow-sm`}
                    onChange={(e) => {
                      changeInfo("contact_2", e.target.value, i);
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center">
                <ButtonComponent
                  text="Save"
                  className="bg-[#252525] text-white w-[100px] text-[11px] sm:text-[12px] font-semibold px-[2px]
                             sm:px-[20px] py-[13px] hover:bg-lime hover:text-white ease-in duration-200"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function TextArea({ item, setItem, i, cart, changeInfo }: any) {
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
        onChange={(e) => {
          changeInfo("customer_note", e.target.value, i);
        }}
      ></textarea>
    </div>
  );
}

export default CardTable;
