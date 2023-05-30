import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@react-hook/media-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ButtonComponent from "./button.component";
import { OverlayContext, UuidContext } from "../context/sidebarContext";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import is from "@sindresorhus/is";
import boolean = is.boolean;

function CardTable({ cart, getCart }: any) {
  const attributeState: any = {
    property_type: "",
    property_age: "",
    property_price: "",
    bedrooms: "",
    other_rooms: 0,
    distribution_boards: 1,
    electrical_appliances: "",
    floors: "",
    gas_appliances: "",
    gas_fire: "",
    fire_back_boiler: "",
    post_code: "",
    property_area: "",
    supply_type: "",
    circuits: "",
  };
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const Component = isSmallScreen ? ContectAccessOption : RadioInput;

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

  const [bundlePrice, setBundlePrice] = useState(0);

  const [showContactInfo, setShowContactInfo] = useState(null);

  const [cartItems, setCartItems] = useState({
    shopping_cart_products: [],
    shopping_cart_bundles: [],
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

  const changeContactType = (data, index, obj) => {
    cart[obj][index][0].contact_type = data;
    setCartItems({
      shopping_cart_products: cart.shopping_cart_products,
      shopping_cart_bundles: cart.shopping_cart_bundles,
    });

    const orderIds = cart[obj][index].map((data) => data.id);

    asyncFunctionDebounced(index, orderIds, obj);
  };

  const updateOrder = async (index, orderIds, obj) => {
    const temp = cart[obj][index][0] || "";
    const body = {
      order_product: {
        contact_type: temp?.contact_type,
        contact_name: temp?.contact_name,
        contact_1: temp?.contact_1,
        contact_2: temp?.contact_2,
        contact_email: temp?.contact_email,
        customer_note: temp?.customer_note,
      },
      order_product_ids: orderIds,
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
    } catch (err) {}
  };

  const asyncFunctionDebounced = AwesomeDebouncePromise(updateOrder, 500);

  const changeInfo = (name: string, data: any, index: number, obj: string) => {
    cart[obj][index][0][name] = data;
    const orderIds = cart[obj][index].map((data) => data.id);

    asyncFunctionDebounced(index, orderIds, obj);
  };

  const deleteService = async (orderId, bundleId, productId, address) => {
    const body = {
      order_id: orderId,
      bundle_id: bundleId,
      product_id: productId,
      address: address,
    };

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

  const addAnotherService = (cartNo: number, isBundle: boolean = false) => {
    if (!isBundle) {
      const postCode =
        cartItems.shopping_cart_products[cartNo][0]?.property_postcode;
      const address =
        cartItems.shopping_cart_products[cartNo][0]?.property_address;
      const selectedServiceId = cartItems.shopping_cart_products[cartNo].map(
        (ele) => ele.service_id
      );
      cartItems.shopping_cart_products[cartNo]?.forEach((element: any) => {
        for (const key in attributeState) {
          // Check if the key exists in secondObject
          if (element.hasOwnProperty(key)) {
            // Update the value in firstObject with the value from secondObject
            if (element[key] !== null) {
              if (key === "bedrooms" && element["bedrooms"] === 0) {
                attributeState["bedrooms"] = "s";
              } else {
                attributeState[key] = element[key];
              }
            }
          }
        }
      });

      router?.push({
        pathname: "/order-now",
        query: {
          property: "residential_property",
          postCode,
          address,
          ser: selectedServiceId,
          checkout: true,
          keys: Object.keys(attributeState),
          value: Object.values(attributeState),
        },
      });
    } else {
      const postCode =
        cartItems.shopping_cart_bundles[cartNo][0]?.property_postcode;
      const address =
        cartItems.shopping_cart_bundles[cartNo][0]?.property_address;
      const selectedServiceId = cartItems.shopping_cart_bundles[cartNo]?.map(
        (ele) => {
          return ele.service_id;
        }
      );

      cartItems.shopping_cart_bundles[cartNo]?.forEach((element: any) => {
        for (const key in attributeState) {
          // Check if the key exists in secondObject
          if (element.hasOwnProperty(key)) {
            // Update the value in firstObject with the value from secondObject
            if (element[key] !== null) {
              if (key === "bedrooms" && element["bedrooms"] === 0) {
                attributeState["bedrooms"] = "s";
              } else {
                attributeState[key] = element[key];
              }
            }
          }
        }
      });

      router?.push({
        pathname: "/order-now",
        query: {
          property: "residential_property",
          postCode,
          address,
          checkout: true,
          ser: selectedServiceId,
          bundle: cartItems.shopping_cart_bundles[cartNo][0]?.bundle_id,
          keys: Object.keys(attributeState),
          value: Object.values(attributeState),
        },
      });
    }
  };

  let i = 1;
  return (
    <div>
      <header className="flex justify-between items-center bg-dark-blue h-[45px] mb-[15px]">
        <h3 className="font-base font-semibold text-white px-[18px] ">
          Property & Services
        </h3>
        <h3 className=" font-base font-semibold text-white px-[18px] ">
          Price
        </h3>
      </header>
      {cartItems?.shopping_cart_products?.map((cartItemData, cartNo, array) => {
        let section = i;
        i++;
        return (
          <div
            className="rounded-sm my-2 py-3 shadow-md border-lime border-t-[2px]"
            key={cartNo}
          >
            <div className="w-full flex px-4 md:px-0 py-2 justify-between items-center">
              <div className="min-w-[75%]  md:min-w-[60%] lg-min-w-[70%] md:pl-4">
                <p className="text-[14px] md:text-[17px] text-black text-left">
                  <strong className="mr-2"> Address:</strong>
                  {cartItemData[0]?.property_address}
                </p>
              </div>
              {!router?.query?.aquote && !router?.query.bquote && (
                <>
                  <div className="border-lime w-[100%] md:w-[32%] pr-4">
                    <ButtonComponent
                      text="Add an other service"
                      icon={faPlus}
                      type="button"
                      className="hidden add-service md:flex justify-center items-center px-[1px] text-[12px]
                            hover:text-dark-blue font-medium border-[1px] border-lime hover:border-lime
                            hover:bg-lime py-[10px] uppercase md:text-[14px] lg:px-1 lg:text-[10px] xxl:text-[14px]"
                      onClick={() => addAnotherService(cartNo)}
                    ></ButtonComponent>
                  </div>
                  <div
                    className="flex w-[40px] h-[40px] md:hidden flex-row-reverse justify-center items-center px-1.5 text-[12px]
                                text-white font-medium bg-lime uppercase md:text-[14px] cursor-pointer "
                    onClick={() => addAnotherService(cartNo)}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="h-5 hover:text-white md:h-4 px-2 lg: h-8"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="w-full">
              <ul className="w-full px-4">
                {cartItemData?.map((e, index) => {
                  let price = parseFloat(e?.total_amount);
                  return (
                    <li
                      key={index}
                      className="py-1.5 flex justify-between items-center border-b border-[#e5e7eb]"
                    >
                      <div className="flex items-center mt-2.5 w-[75%]">
                        <a>
                          {" "}
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-[#ff0000] h-[19px] w-[20px] cursor-pointer"
                            onClick={() =>
                              deleteService(
                                e.order_id,
                                "",
                                e.id,
                                e.property_address
                              )
                            }
                          />
                        </a>

                        <p className="text-[14px] md:text-[17px] ml-4 text-dark-blue ">
                          {e?.name}
                        </p>
                      </div>
                      <p className="text-[13px] w-[20%] md:text-[14px] text-dark-blue font-semibold w-14 text-right">
                        &#163; {price.toFixed(2)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <br className="text-slate-200" />

            <div className="w-full px-4 my-4">
              <div className="border-[1px] border-lime ">
                <div
                  onClick={() => {
                    showContactInfo === section
                      ? setShowContactInfo(null)
                      : setShowContactInfo(section);
                  }}
                  className="flex justify-between item-center h-12 bg-limea cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <FontAwesomeIcon
                      className="ml-2 w-5 mr-3"
                      icon={faInfoCircle}
                    />
                    <p className="text-dark-blue text-[18px] text-center flex">
                      Contact for Access
                    </p>
                  </div>
                  <FontAwesomeIcon
                    className="ml-2 w-5 mr-3"
                    icon={
                      showContactInfo === section ? faChevronUp : faChevronDown
                    }
                  />
                </div>
                {showContactInfo === section && (
                  <div className="px-5 pb-4 mt-4 md:px-10">
                    <div className="flex items-center justify-between flex-wrap">
                      {contactType.map((type, index) => {
                        return (
                          <div
                            key={index}
                            className={isSmallScreen && "w-[30%]"}
                          >
                            <Component
                              label={type.title}
                              name="contact_type1"
                              value={type.title}
                              activeVal={cartItemData[0].contact_type}
                              cart={cart}
                              index={cartNo}
                              changeContactType={changeContactType}
                              obj="shopping_cart_products"
                              className="text-[17px] text-dark-blue  mb-3"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {cartItemData.length &&
                      cartItemData[0]?.contact_type !== "Me" && (
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
                              className={`border w-full h-[75px] text-sm focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                              onChange={(e) => {
                                changeInfo(
                                  "customer_note",
                                  e.target.value,
                                  cartNo,
                                  "shopping_cart_products"
                                );
                              }}
                            />
                          </div>
                        </>
                      )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {cartItems?.shopping_cart_bundles?.map((cartItemData, cartNo, array) => {
        let section = i;
        i++;
        let total = 0;
        total = parseFloat(total);
        cartItemData.map((e, index) => {
          total = total + parseFloat(e.total_amount);
        });
        return (
          <div
            className="border-lime border-t-[2px] rounded-sm my-2 pt-3 pb-7 shadow-md"
            key={cartNo}
          >
            <div className="w-full  px-4 py-1  ">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  <a>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-[#ff0000] h-[20px] w-[21px] cursor-pointer"
                      onClick={() =>
                        deleteService(
                          cartItemData[0].order_id,
                          cartItemData[0].bundle_id,
                          "",
                          cartItemData[0]?.property_address
                        )
                      }
                    />
                  </a>
                  <p className="text-[14px] md:text-[17px] ml-4 text-dark-blue ">
                    <strong className="mr-2"> Address:</strong>
                    {cartItemData[0]?.property_address}
                  </p>
                </div>
                {!router?.query?.aquote && !router?.query.bquote && (
                  <>
                    <div className="border-lime w-[100%] md:w-[32%] pr-4">
                      <ButtonComponent
                        text="Add an other service"
                        icon={faPlus}
                        type="button"
                        className="hidden add-service md:flex justify-center items-center px-[1px] text-[12px]
                            hover:text-dark-blue font-medium border-[1px] border-lime hover:border-lime
                            hover:bg-lime py-[10px] uppercase md:text-[14px] lg:px-1 lg:text-[10px] xxl:text-[14px]"
                        onClick={() => addAnotherService(cartNo, true)}
                      ></ButtonComponent>
                    </div>
                    <div
                      className="flex w-[40px] h-[40px] md:hidden flex-row-reverse justify-center items-center px-1.5 text-[12px]
                                text-white font-medium bg-lime uppercase md:text-[14px] cursor-pointer "
                      onClick={() => addAnotherService(cartNo, true)}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="h-5 hover:text-white md:h-4 px-2 lg: h-8"
                      />
                    </div>
                  </>
                )}

                {/*<p className="text-[13px] text-right md:text-[14px] text-dark-blue font-semibold">*/}
                {/*  &#163; {total.toFixed(2)}*/}
                {/*</p>*/}
              </div>
              <div class="flex justify-between mt-3">
                <p className="text-[14px] md:text-[17px] ml-4 text-dark-blue ">
                  {(() => {
                    switch (cartItemData[0]?.bundle_id) {
                      case 1:
                        return <strong> Service Bundle 1 </strong>;
                      case 2:
                        return <strong> Service Bundle 2 </strong>;
                      case 3:
                        return <strong> Service Bundle 3 </strong>;
                      case 4:
                        return <strong> Service Bundle 4 </strong>;
                      default:
                        return null;
                    }
                  })()}
                </p>
                <p className="text-[13px] text-right md:text-[14px] text-dark-blue font-semibold">
                  &#163; {total.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="w-full">
              <ul className="w-full px-4">
                {cartItemData?.map((e, index) => {
                  let price = parseFloat(e.total_amount);
                  return (
                    <li
                      key={index}
                      className="py-1.5 flex justify-between items-center border-b border-[#e5e7eb]"
                    >
                      <div className="flex">
                        <p className="text-[14px] md:text-[17px] ml-4 text-dark-blue ">
                          <span style={{ fontSize: 24 }}>⤷</span> {e?.name}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <br />

            <div className="w-full px-4">
              <div className="border-[1px] border-lime ">
                <div
                  onClick={() => {
                    showContactInfo === section
                      ? setShowContactInfo(null)
                      : setShowContactInfo(section);
                  }}
                  className="flex justify-between item-center h-12 bg-limae cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <FontAwesomeIcon
                      className="ml-2 w-5 mr-3"
                      icon={faInfoCircle}
                    />
                    <p className="text-dark-blue text-[18px] text-center flex">
                      Contact for Access
                    </p>
                  </div>
                  <FontAwesomeIcon
                    className="ml-2 w-5 mr-3"
                    icon={
                      showContactInfo === section ? faChevronUp : faChevronDown
                    }
                  />
                </div>
                {showContactInfo === section && (
                  <div className="px-5 pb-4 mt-4 md:px-10">
                    <div className="flex items-center justify-between flex-wrap">
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
                            obj="shopping_cart_bundles"
                            className="text-[17px] text-dark-blue mb-3"
                          />
                        );
                      })}
                    </div>
                    {cartItemData.length &&
                      cartItemData[0]?.contact_type !== "Me" && (
                        <>
                          <KeyHolderInfo
                            item={cartItemData[0]}
                            i={cartNo}
                            setItem={setCartItems}
                            cart={array}
                            changeInfo={changeInfo}
                            updateOrder={updateOrder}
                            obj="shopping_cart_bundles"
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
                              className={`border h-[75px] w-full text-sm focus:border-lime outline-none focus:ring-transparent shadow-sm border-[#DEDEDE] py-2 px-3 rounded-md border`}
                              onChange={(e) => {
                                changeInfo(
                                  "customer_note",
                                  e.target.value,
                                  cartNo,
                                  "shopping_cart_bundles"
                                );
                              }}
                            />
                          </div>
                        </>
                      )}
                  </div>
                )}
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
  obj,
}: any) => {
  return (
    <label className={`${className}`}>
      <div className="my-1.5 mx-1.5 md:mx-0">
        <input
          type="radio"
          value={value}
          defaultChecked={value === activeVal}
          className="mb-[2px] mr-[5px] h-[16px] w-[16px]"
          name={`${name}${index}`}
          onChange={() => changeContactType(value, index, obj)}
        />
        {label}
      </div>
    </label>
  );
};

const ContectAccessOption = ({
  label,
  value,
  name,
  className = "",
  activeVal,
  changeContactType,
  index,
  cart,
  obj,
}: any) => {
  return (
    <label className={`${className}`}>
      <div
        className={`px-3 mx-2 mt-2 py-1 border-[1px] font-semibold text-[12px] font-opensans border-gray-500 w-full flex flex-row justify-center ${
          value === activeVal ? "bg-lime" : ""
        }`}
        onClick={() => changeContactType(value, index, obj)}
      >
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
  obj,
}: any) {
  return (
    <div className="relative border-t border-t-[#182333] mt-3">
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
