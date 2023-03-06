import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import {OverlayContext, UuidContext} from "../context/sidebarContext";
import AwesomeDebouncePromise from "awesome-debounce-promise";



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

  const { uuid, setUuid } = useContext(UuidContext);

  const [open, setOpen] = useState(false);

  const [showContactInfo, setShowContactInfo] = useState(false)

  const [cartItems, setCartItems] = useState({
    shopping_cart_products:[],
    shopping_cart_bundles:[]
  });

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    // cart?.forEach((item) => {
    //   item["contact_type"] = "Me";
    // });
    setCartItems(cart);
  }, [cart]);

  useEffect(() => {}, [cartItems]);

  const { setIsLoading } = useContext(OverlayContext);

  const changeContactType = (data, index,obj) => {

    cart[obj][index][0].contact_type = data;
    setCartItems({
      shopping_cart_products:cart.shopping_cart_products,
      shopping_cart_bundles:cart.shopping_cart_bundles
    });


    const orderIds = cart[obj][index].map((data) => data.id);

    asyncFunctionDebounced(index,orderIds,obj);


  };



  const updateOrder = async (index,orderIds,obj) => {
    const temp = cart[obj][index][0] || "";
    const body = {
      order_product:{
        contact_type: temp?.contact_type,
        contact_name: temp?.contact_name,
        contact_1: temp?.contact_1,
        contact_2: temp?.contact_2,
        contact_email: temp?.contact_email,
        customer_note: temp?.customer_note,
      },
      order_product_ids : orderIds,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
          `${process.env.BASE_URL_DEV}/order_products/update_products`,
          requestOptions
      );
      if (!response.ok) {
        switch (response.status) {
          case 422:
        }
      } else {
        const data = await response.json();
      }

    } catch (err) {

    }
  };


  const asyncFunctionDebounced = AwesomeDebouncePromise(
      updateOrder,
      500,
  );

  const changeInfo = (name: string, data: any, index: number,obj:string) => {
    cart[obj][index][0][name] = data;
    const orderIds = cart[obj][index].map((data) => data.id);

    asyncFunctionDebounced(index,orderIds,obj);
  };



  const deleteService = async (orderId, bundleId , productId,address) => {

    const body = {
      "order_id": orderId,
      "bundle_id": bundleId,
      "product_id": productId,
      "address":address
    }

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}/order_products/delete_products`,
        requestOptions
      );
      if (!response.ok) {
        switch (response.status) {
          case 422:
        }
      } else {
        const data = await response.json();
        getCart(uuid);
      }
    } catch (err) {}
  };



  const addAnotherService = (cartNo: number) => {

    const postCode = cartItems.shopping_cart_products[cartNo][0]?.property_postcode;
    const address = cartItems.shopping_cart_products[cartNo][0]?.property_address;
    const selectedServiceId = cartItems.shopping_cart_products[cartNo].map(
      (ele) => ele.service_id
    );
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
      <header className='flex justify-between items-center bg-dark-blue h-[45px] mb-[15px]'>
        <h3 className=" font-base font-semibold text-white px-[25px]">
          Property & Services
        </h3>
        <h3 className=" font-base font-semibold text-white px-[25px] ">
          Price
        </h3>

      </header>
      { cartItems?.shopping_cart_products?.map((cartItemData, cartNo, array) => {

        return (
          <div
            className="border-[#e5e7eb] rounded-sm my-2 py-3 shadow-md"
            key={cartNo}
          >
            <div className="w-full flex px-4 py-2 justify-between items-center">
              <div className='w-8/12'>
                <p className="text-[8px]  md:text-[15px] text-dark-blue ">
                  {cartItemData[0]?.property_address}
                </p>

              </div>
              {!router?.query?.aquote && !router?.query.bquote &&
                  (
                      <div className="px-3 border-lime" >
                        <ButtonComponent
                            text="Add an other service"
                            type="button"
                            className="flex flex-row-reverse justify-center items-center px-[1px] text-[6px] hover:text-white font-medium border-[1px] border-lime hover:border-lime
           hover:bg-lime  py-[10px] uppercase md:px-[20px] text-[18px] lg: px-[10px] text-[29px]"
                            onClick={() => addAnotherService(cartNo)}
                        >
                          <FontAwesomeIcon icon={faPlus} className="text-lime h-2 hover:text-white md: h-6 px-2 "/>
                        </ButtonComponent>
                      </div>
                  )

              }
            </div>

            <div className="w-full">
              <ul className="w-full px-4">
                {cartItemData?.map((e, index) => {

                  return (
                    <li
                      key={index}
                      className="py-1.5 flex justify-between items-center border-b border-[#e5e7eb]"
                    >
                      <div className="flex items-center justify-between mt-2.5">
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-[#ff0000] h-[17px] cursor-pointer"
                            onClick={() => deleteService( e.order_id,"",e.id,e.property_address)}
                        />
                        <p className="text-[13px] md:text-[14px] ml-4 text-dark-blue ">
                          {e?.name}
                        </p>
                      </div>
                      <p className="text-[13px] md:text-[14px] text-dark-blue font-semibold w-14 ">
                        &#163; {e.total_amount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <br className='text-slate-200'/>

            <div className="w-full px-4 my-4">
              <div  className='border-[1px] border-lime '>
                <div onClick={()=> setShowContactInfo(!showContactInfo)} className='flex justify-between item-center h-12 bg-lime'>
                  <div className='flex justify-between items-center'>
                    <FontAwesomeIcon className="ml-2 w-5 mr-3" icon={faInfoCircle} />
                    <p className="text-dark-blue text-[18px] text-center flex">
                      Contact for Access
                    </p>
                  </div>
                  <FontAwesomeIcon className="ml-2 w-5 mr-3" icon={showContactInfo ? faChevronUp:faChevronDown} />
              </div>
                {showContactInfo &&
                <div className='px-10 pb-4 mt-4' >
                  <div className="flex items-center justify-between">
                    {contactType.map((type, index) => {
                      return (
                          <RadioInput
                              key={index}
                              label={type.title}
                              name="contact_type1"
                              value={type.title}
                              activeVal={cartItemData[0].contact_type}
                              cart={cart}
                              index={cartNo}
                              changeContactType={changeContactType}
                              obj="shopping_cart_products"
                              className="text-sm text-dark-blue  mb-3"
                          />
                      );
                    })}
                  </div>

                  {cartItemData.length && cartItemData[0]?.contact_type !== "Me" && (
                      <>
                      <KeyHolderInfo
                          item={cartItemData[0]}
                          i={cartNo}
                          setItem={setCartItems}
                          cart={array}
                          changeInfo={changeInfo}
                          updateOrder={updateOrder}
                          obj="shopping_cart_products"

                      />

                    <div className="mt-1">
                    <label className="text-[15px] text-dark-blue font-semibold ">
                    Additional note
                    </label>
                    <textarea
                    cols={80}
                    placeholder="You can provide any special instructions/notes to help us deal with your order."
                    name="orderNotes"
                    defaultValue={cartItemData[0]?.customer_note}
                    className={`border w-full text-sm focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                    onChange={(e) => {
                    changeInfo("customer_note", e.target.value, cartNo,"shopping_cart_products");
                  }}
                    />
                    </div>
                      </>
                  )

                  }

                </div>
                }
              </div>

            </div>
          </div>
        );
      })}


      { cartItems?.shopping_cart_bundles?.map((cartItemData, cartNo, array) => {

        return (
            <div
                className="border border-[#e5e7eb] rounded-sm my-2 py-3"
                key={cartNo}
            >
              <div className="w-full flex px-4 py-1 justify-between">
                <div className="w-full flex ">
                  <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-[#ff0000] h-[15px] cursor-pointer"
                      onClick={() => deleteService( cartItemData[0].order_id,cartItemData[0].bundle_id,"",cartItemData[0]?.property_address)}
                  />
                  <p className="ml-4 text-[13px] md:text-[15px] text-dark-blue font-semibold">
                    {cartItemData[0]?.property_address}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <ul className="w-full px-4">
                  {cartItemData?.map((e, index) => {
                    return (
                        <li
                            key={index}
                            className="py-1.5 flex justify-between border-b border-[#e5e7eb]"
                        >
                          <div className="flex">
                            <p className="text-[13px] md:text-[14px] ml-4 text-dark-blue font-semibold">
                              <span style={{fontSize: 24}}>⤷</span> {e?.name}
                            </p>
                          </div>
                          <p className="text-[13px] md:text-[14px] text-dark-blue font-semibold">
                            &#163; {e.total_amount}
                          </p>
                        </li>
                    );
                  })}
                </ul>
              </div>
           {/*   {!router?.query?.aquote && !router?.query.bquote &&*/}
           {/*   (*/}
           {/*       <div className="px-3">*/}
           {/*         <ButtonComponent*/}
           {/*             text="Add an other service"*/}
           {/*             type="button"*/}
           {/*             className=" flex justify-center text-[14px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime*/}
           {/*hover:bg-lime px-[28px] py-[12px] uppercase rounded"*/}
           {/*             onClick={() => addAnotherService(cartNo)}*/}
           {/*         />*/}
           {/*       </div>*/}
           {/*   )*/}

           {/*   }*/}
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
                            activeVal={cartItemData[0]?.contact_type}
                            cart={cart}
                            index={cartNo}
                            changeContactType={changeContactType}
                            obj="shopping_cart_bundles"
                            className="text-lg text-dark-blue font-semibold mb-3"
                        />
                    );
                  })}
                </div>
                {cartItemData.length && cartItemData[0]?.contact_type !== "Me" && (
                    <KeyHolderInfo
                        item={cartItemData[0]}
                        i={cartNo}
                        setItem={setCartItems}
                        cart={array}
                        changeInfo={changeInfo}
                        updateOrder={updateOrder}
                        obj="shopping_cart_bundles"
                    />
                )}
                <div>
                <textarea
                    cols={80}
                    placeholder="You can provide any special instructions/notes to help us deal with your order."
                    name="orderNotes"
                    defaultValue={cartItemData[0]?.customer_note}
                    className={`border w-full outline-none border-grey-500 py-2.5 px-3`}
                    onChange={(e) => {
                      changeInfo("customer_note", e.target.value, cartNo,"shopping_cart_bundles");
                    }}
                />
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
  activeVal,
  changeContactType,
  index,
  cart,
  obj
}: any) => {
  return (
    <label className={`${className}`}>
      <div className="my-1.5">
        <input
          type="radio"
          value={value}
          defaultChecked={value === activeVal}
          className="mb-[2px] mr-[5px] h-[13px] w-[13px]"
          name={`${name}${index}`}
          onChange={() => changeContactType(value, index, obj)}
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
  obj
}: any) {
  return (
    <div className="relative border-t border-t-[#182333]">
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
                <div className="flex-col w-full sm:flex-row sm:items-center">
                  <label className="text-sm font-semibold text-dark-blue w-full">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Name`}
                    name={`name${i}`}
                    defaultValue={item.contact_name}
                    required={true}
                    className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                    onChange={(e) => {
                      changeInfo("contact_name", e.target.value, i, obj);
                    }}
                  />
                </div>
                <div className="flex-col w-full sm:flex-row sm:items-center">
                  <label className="text-sm font-semibold text-dark-blue">
                   Email
                  </label>
                  <input
                    type="email"
                    placeholder={`Enter ${item.contact_type} Email`}
                    name="name"
                    defaultValue={item.contact_email}
                    required={true}
                    className={`border w-full  focus:border-lime  outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                    onChange={(e) => {
                      changeInfo("contact_email", e.target.value, i, obj);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-col w-full sm:flex-row sm:items-center">
                  <label className="text-sm font-semibold text-dark-blue">
                   Contact 1
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Contact`}
                    name="contact"
                    defaultValue={item.contact_1}
                    required={true}
                    className={`border w-full focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                    onChange={(e) => {
                      changeInfo("contact_1", e.target.value, i, obj);
                    }}
                  />
                </div>

                <div className="flex-col w-full sm:flex-row sm:items-center">
                  <label className="text-sm font-semibold text-dark-blue">
                   Contact 2
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${item.contact_type} Contact2`}
                    name="contact2"
                    defaultValue={item.contact_2}
                    required={true}
                    className={`border w-full focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                    onChange={(e) => {
                      changeInfo("contact_2", e.target.value, i, obj);
                    }}
                  />
                </div>
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
