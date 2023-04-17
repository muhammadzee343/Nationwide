import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import {
  CartCountContext,
  OverlayContext,
  SidebarContext,
  UuidContext,
} from "../context/sidebarContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import CardTable from "../components/cardTable.component";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";
import RequestCallBack from "../components/requestCallBack.component";
import { useForm } from "react-hook-form";
import GoogePayComponent from "../components/googePay.component";

const stripePromise = loadStripe("pk_test_96JJ6DEa2MKGHUR9ubWNXJDT00EC1yyjzn");

const stripObj = {
  strip: null,
  element: null,
};

function Checkout(props: any) {
  const attributeState = {
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
    property_postcode: "",
    property_area: "",
    supply_type: "",
    circuits: "",
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {
      orderNotes: "",
      payment: "",
    },
  });

  const router = useRouter();
  const [cart, setCart] = useState<any>({
    shopping_cart_products: [],
    shopping_cart_bundles: [],
  });
  const [pricing, setPricing] = useState({ totalAmount: "0", discount: "0" });
  const [orderId, setOrderId] = useState(null);
  const { uuid, setUuid } = useContext(UuidContext);
  const [attribute, setAttributes] = useState<any>(attributeState);
  const [selectedServiceId, setSelectedServiceId] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState<string>("");
  const [cardError, setCardError] = useState("");
  const [billingDetails, setBillingDetails] = useState({});

  const { isLoading, setIsLoading } = useContext<any>(OverlayContext);

  const { setCount } = useContext(CartCountContext);

  useEffect(() => {
    if (!router?.query?.aquote && !router?.query?.bquote) {
      {
        getCartValues(uuid);
      }
    }
  }, [uuid]);

  useEffect(() => {
    if (router?.query?.aquote) {
      const Uuid = uuidv4();
      localStorage.setItem("session_id", Uuid);
      setUuid(Uuid);
      //@ts-ignore
      postQuoteApi(router?.query.aquote, true, Uuid);
    } else if (router?.query?.bquote) {
      const Uuid = uuidv4();
      localStorage.setItem("session_id", Uuid);
      setUuid(Uuid);
      //@ts-ignore
      postQuoteApi(router?.query.bquote, false, Uuid);
    }
  }, [router]);

  const postQuoteApi = async (
    quote: string,
    isAQuote = false,
    Uuid: string
  ) => {
    setCount(0);

    const body = {
      session_id: Uuid,
    };
    const params: any = {
      method: "POST",
      headers: Object.assign({}, {}),
    };
    if (isAQuote) {
      //@ts-ignore
      body.aquote = quote;
    } else {
      //@ts-ignore
      body.bquote = quote;
    }
    params.body = JSON.stringify(body);
    params.headers["Content-Type"] = "application/json";

    const response = await fetch(
      `${process.env.BASE_URL_DEV}orders/quote_checkout`,
      params
    );

    if (response.ok) {
      getCartValues(Uuid);
      getBillingDetailsCart(quote, isAQuote);
    }
  };

  useEffect(() => {}, [cart]);

  const getCartValues = async (uid) => {
    if (uid) {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.BASE_URL_DEV}shopping_carts?session_id=${uid}`
      );
      const data = await response.json();
      if (Object.keys(data).length === 0) {
        router?.push({
          pathname: "/",
        });
      }
      if (data.shopping_cart_products) {
        setCart({
          shopping_cart_products: data.shopping_cart_products,
          shopping_cart_bundles: data.shopping_cart_bundles,
        });
        setPricing({
          totalAmount: data.total_amount,
          discount: data.total_discount,
        });
        setCount(data.products_count);
        setOrderId(data.order_id);
      } else {
        setCart({
          shopping_cart_products: [],
          shopping_cart_bundles: [],
        });
        setPricing({
          totalAmount: "0",
          discount: "0",
        });
        setCount(0);
        setOrderId(null);
      }
      setIsLoading(false);
    }
  };

  const getBillingDetailsCart = async (token: string, quote: boolean) => {
    setIsLoading(true);

    let url = `${process.env.BASE_URL_DEV}orders/get_billing_detail`;

    if (quote) {
      url += `?aquote=${token}`;
    } else {
      url += `?bquote=${token}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    const billingDetails = {
      firstName: data.billing_details.billing_first_name,
      lastName: data.billing_details.billing_last_name,
      company: "",
      postcode: data.billing_details.billing_postcode,
      streetAddress: data.billing_details.billing_address,
      phone: data.billing_details.billing_phone,
      phone2: data.billing_details.billing_phone_2,
      email: data.billing_details.billing_email,
      postAddress: data.billing_details.billing_address,
    };

    setBillingDetails(billingDetails);
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      if (router?.query?.aquote || router?.query?.bquote) {
        setCount(0);
        const Uuid = uuidv4();
        localStorage.setItem("session_id", Uuid);
        setUuid(Uuid);
      }
    };
  }, []);

  const { propertyType } = useContext<any>(SidebarContext);

  const getIntent = async (data: any) => {
    const body = {
      payment_detail: {
        billing_first_name: data.firstName,
        billing_last_name: data.lastName,
        billing_address: data.streetAddress,
        billing_city: "data.city",
        billing_state: "Punjab",
        billing_postcode: data.postcode,
        billing_phone: data.phone,
        billing_phone_2: data.phone2,
        billing_email: data.email,
        payment_method: "stripe",
      },
      session_id: uuid,
    };
    let url = `${process.env.BASE_URL_DEV}orders/create_payment_intent`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();

      if (!response.ok) {
      } else {
        return result.client_secret;
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  const chargeCard = async (data, e) => {
    if (paymentType === "") {
      alert("Please select a payment method.");
      return;
    }

    if (!data.acceptTerms) {
      alert("Please accept terms and conditions.");
      return;
    }

    if (paymentType === "payByCard") {
      if (!stripObj?.stripe || !stripObj?.elements) {
        // Stripe.js has not yet loaded.
        // Make  sure to disable form submission until Stripe.js has loaded.
        alert("Please provide valid card details");
        return;
      }

      setIsLoading(true);
      const card = stripObj?.elements.getElement(CardElement);

      const clientSecret = await getIntent(data);

      const { error, paymentIntent } =
        await stripObj?.stripe!.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card!,
          },
        });

      //@ts-ignore
      // const result = await stripObj?.stripe.createToken(card);
      if (error) {
        setIsLoading(false);
        const element = document.getElementById("card");
        element?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        setCardError(error.message ?? "An unknown error occured");
      } else {
        setCount(0);
        setIsLoading(false);
        router?.push({
          pathname: "/order-received",
          query: {
            order_id: orderId,
          },
        });

        // placeOrder(data,result.token.id);
      }
    }

    if (paymentType != "payByCard") {
      placeOrder(data, "");
    }
  };

  const placeOrder = async (data, token) => {
    setIsLoading(true);

    const name = data.full_name.split(" ");

    const body = {
      payment_detail: {
        billing_first_name: name[0],
        billing_last_name: name[1] ? name[1] : "",
        billing_address: data.streetAddress,
        billing_city: "data.city",
        billing_state: "Punjab",
        billing_postcode: data.postcode,
        billing_phone: data.phone,
        billing_phone_2: data.phone2,
        billing_email: data.email,
        payment_method: "stripe",
      },
      session_id: uuid,
    };

    let url = `${process.env.BASE_URL_DEV}orders/charge_card`;
    if (paymentType === "payByCard") {
      //@ts-ignore
      body.token = token;
    }

    if (paymentType === "payOverPhone") {
      url = `${process.env.BASE_URL_DEV}orders/pay_over_phone`;
      body.payment_detail.payment_method = "cod";
    }

    if (paymentType === "payByBank") {
      url = `${process.env.BASE_URL_DEV}orders/bank_transfer`;
      body.payment_detail.payment_method = "bacs";
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      if (!response.ok) {
      } else {
        router?.push({
          pathname: "/order-received",
          query: {
            order_id: orderId,
          },
        });
        setCount(0);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err, "err");
    }
  };

  const GooglePayButton = useMemo(() => {
    return (
      <GoogePayComponent pricing={pricing} uuid={uuid} orderId={orderId} />
    );
  }, [pricing, uuid, orderId]);

  const requestACBRef = useRef(null);

  const requestACBSucess = () => {
    let postion = requestACBRef.current.offsetTop;
    postion = postion - 90;
    window.scrollTo({ top: postion, behavior: "smooth" });
  };
  // @ts-ignore
  return (
    <Elements stripe={stripePromise}>
      <div className="w-full flex flex-col justify-center items-center">
        <Head>
          <title>Checkout - Nationwide Surveyors</title>
        </Head>
        <div className="flex w-full  flex-col justify-center items-start  pt-[35px] px-2 lg:px-20">
          <div className="border-[1.5px] w-[65px] rounded-full mt-2 md:w-18 border-lime" />
          <h2 className="text-[24px] font-semibold md:text-[30px] ">
            Checkout
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center items-start sm:gap-x-22">
          <div className="w-full lg:w-[60%] flex flex-col justify-center items-center pt-[5px] pb-[25px] px-2">
            <div className="w-full my-3">
              {cart?.shopping_cart_products.length ||
              cart?.shopping_cart_bundles.length ? (
                <CardTable cart={cart} getCart={getCartValues} />
              ) : null}
            </div>
            {/*<ButtonComponent*/}
            {/*  text="Add an other service"*/}
            {/*  className=" flex justify-center text-[13px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime*/}
            {/* hover:bg-lime px-[28px] py-[12px] uppercase rounded"*/}
            {/*/>*/}
            {/*<br />*/}
            {/*<div className=" flex w-full md:hidden">*/}
            {/*    <OrderSummary*/}
            {/*        discount={pricing.discount}*/}
            {/*        subTotal={pricing.totalAmount}*/}
            {/*    />*/}
            {/*</div>*/}
            <br />
            <div className="w-full">
              <ButtonComponent
                text="Add an other property"
                className={`flex justify-center items-center border-lime border flex-row-reverse bg-white text-[13px] font-bold mb-5
                                            hover:bg-lime px-[22px] py-[12px] uppercase rounded `}
                onClick={() => router.push("order-now")}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-black h-4 mr-5 hover: md:h-5 lg:h-5"
                />
              </ButtonComponent>
              <div className="lg:hidden mt-8">
                <OrderSummary
                  discount={pricing.discount}
                  subTotal={pricing.totalAmount}
                />
              </div>
              {cart?.shopping_cart_products.length ||
              cart?.shopping_cart_bundles.length ? (
                <>
                  {/*<header className='flex justify-between items-center bg-dark-blue h-[45px] mb-[20px] mt-8'>
                      <h3 className="font-base font-semibold text-white px-[25px] ">
                        Payment options
                      </h3>
                    </header>*/}
                  <div className="mt-4">
                    {pricing.totalAmount != "0" ? GooglePayButton : null}
                  </div>
                  <div className="mt-4">
                    <ButtonComponent
                      text="Pay by debit/credit card"
                      className={`flex justify-center text-[13px] font-bold hover:text-dark-blue border-[1px] border-lime
           hover:bg-lime px-[22px] py-[12px] uppercase rounded ${
             paymentType === "payByCard" && "text-white bg-lime rounded-b-none"
           }`}
                      onClick={() => setPaymentType("payByCard")}
                    />
                    <br />
                    <ButtonComponent
                      text="Pay Over Phone"
                      className={`flex justify-center text-[13px] font-bold hover:text-dark-blue border-[1px] border-lime
              hover:bg-lime px-[28px] py-[12px] uppercase rounded ${
                paymentType === "payOverPhone" &&
                "text-white bg-lime rounded-b-none"
              }`}
                      onClick={() => setPaymentType("payOverPhone")}
                    />
                    <br />
                    <ButtonComponent
                      text="Pay By Bank Transfer"
                      className={`flex justify-center text-[13px] mb-2 font-bold hover:text-dark-blue border-[1px] border-lime
                     hover:bg-lime px-[28px] py-[12px] uppercase rounded ${
                       paymentType === "payByBank" && "text-white bg-lime "
                     }`}
                      onClick={() => setPaymentType("payByBank")}
                    />
                    {paymentType !== "" && (
                      <header className="flex justify-between items-center bg-dark-blue h-[45px] mb-[0] mt-8">
                        <h3 className="font-base font-semibold text-white px-[25px] ">
                          Billing Details
                        </h3>
                      </header>
                    )}
                    <div className="w-full">
                      {paymentType !== "" && (
                        <BillingForm
                          chargeCard={chargeCard}
                          billingDetails={billingDetails}
                          setPaymentType={setPaymentType}
                          stripeObj={stripObj}
                          paymentType={paymentType}
                          cardError={cardError}
                          setCardError={setCardError}
                        />
                      )}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="sticky top-20 w-full  lg:mt-[10px] lg:w-[30%] pt-[8px] pb-[25px] px-4 ">
            <div className="hidden sticky top-0 lg:w-full lg:flex">
              <OrderSummary
                discount={pricing.discount}
                subTotal={pricing.totalAmount}
              />
            </div>
            {Number(pricing?.discount) > 0 && (
              <div className=" bg-dark-blue flex rounded-lg py-[10px] mt-3 pl-[20px] pr-[10px]">
                <FontAwesomeIcon
                  className="text-lime w-9 md:w-6 mr-2"
                  icon={faTag}
                />
                <p className="text-white text-[11px] md:text-[15px] font-semibold">
                  <span className="text-[14px] font-bold">
                    Congratulations!
                  </span>
                  <br /> £{pricing?.discount} multi-service-order Discount has
                  been applied.
                </p>
              </div>
            )}
            <CardComponent
              className="bg-lime shadow px-[20px] pt-[15px] pb-[20px] lg:my-[25px] "
              hClass="text-xl mb-[15px] text-black font-bold text-center"
              pClass=" text-justify text-base"
              heading="WHAT’S NEXT AFTER ORDER PLACEMENT?"
              paragraph="Once an order is placed online, we aim to call you or your agent/tenants
           within 60 minutes of receiving your order (during our working hours) to organise suitable
            appointment(s). Depending on the availability of access to the property, our normal wait time is
             currently between 1 to 3 working days. If you need help placing new order or got a question,
              please don’t hesitate to call us free at 0800 048 7474."
            />
            <div ref={requestACBRef}>
              <RequestCallBack
                attributes={attribute}
                requestACBSucess={requestACBSucess}
                services={selectedServiceId}
                propertyType={propertyType}
                setPaymentType={setPaymentType}
                uuid={uuid}
                order_id={orderId}
              />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}

function Note({ content }: any) {
  return (
    <div className="relative bg-[#dfdcde]  px-8 py-3 rounded-sm my-3">
      <div className="text-gray-800 text-[13px] text-[#515151]">{content}</div>
      <div className="absolute top-0 left-[39px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-[#dfdcde]"></div>
    </div>
  );
}

function OrderSummary({ subTotal, discount }: any) {
  let floatSubTotal = parseFloat(subTotal);
  let floatDiscount = parseFloat(discount);
  let subtotal = floatSubTotal + floatDiscount;
  return (
    <div
      className={`flex justify-center flex-col w-full space-y-1  ${
        discount > 0 && "mt-6"
      }`}
    >
      <header className="flex justify-between items-center bg-dark-blue h-[46px] mb-[15px]">
        <h3 className=" font-base font-semibold text-white px-[25px] ">
          Payment summary
        </h3>
      </header>
      <div className="flex flex-col border-lime border-t-4 px-2 py-6 md:p-4 xl:p-4 w-full bg-white shadow-md space-y-6">
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-[#9badad] border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Subtotal
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              &#163;{`${subtotal.toFixed(2)}`}
            </p>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Discount
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                &#163;{floatDiscount.toFixed(2)}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
            &#163;{floatSubTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
