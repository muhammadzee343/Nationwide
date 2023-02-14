import React, {useContext, useEffect, useLayoutEffect, useMemo, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import {CartCountContext, OverlayContext, SidebarContext, UuidContext} from "../context/sidebarContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import {CardNumberElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js";

import CardFormComponent from "../components/cardForm.component";
import CardTable from "../components/cardTable.component";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";
import CheckoutStepper from "../components/checkoutStepper.component";
import RequestCallBack from "../components/requestCallBack.component";
import RadioInput from "../components/radioInput.component";
import {useForm} from "react-hook-form";
import TermsConditionComponent from "../components/terms&condition.component";
import Link from "next/link";
import GoogePayComponent from "../components/googePay.component";

const stripePromise = loadStripe("pk_test_96JJ6DEa2MKGHUR9ubWNXJDT00EC1yyjzn");

const stripObj = {
  strip:null,
  element:null
}

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
    shopping_cart_products:[],
    shopping_cart_bundles:[]
  });
  const [pricing, setPricing] = useState({ totalAmount: "0", discount: "0" });
  const [orderId, setOrderId] = useState(null);
  const { uuid , setUuid } = useContext(UuidContext);
  const [attribute, setAttributes] = useState<any>(attributeState);
  const [selectedServiceId, setSelectedServiceId] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState<string>("")

  const { isLoading, setIsLoading } = useContext<any>(OverlayContext);


  useLayoutEffect(() => {
    getCartValues();
  }, []);

  useLayoutEffect(() => {
    if (router?.query?.aquote){
      //@ts-ignore
      postQuoteApi(router?.query.aquote , true);
    }else if (router?.query?.bquote) {
      //@ts-ignore
      postQuoteApi(router?.query.bquote , false);
    }

  }, [router]);

  const postQuoteApi = async (quote : string, isAQuote = false) => {
    const body = {
      session_id:uuid,
    }
    const params: any = {
      method: "POST",
      headers: Object.assign({}, { }),
    };
    if (isAQuote){
      //@ts-ignore
      body.aquote = quote;
    }else{
      //@ts-ignore
      body.bquote = quote;
    }
    params.body = JSON.stringify(body)
    params.headers["Content-Type"] = "application/json"

    const response = await fetch(
        `${process.env.BASE_URL_DEV}orders/quote_checkout`,
        params
    );

      if (response.ok){
        getCartValues();
      }
  };

  useEffect(() => {}, [cart]);
  const { setCount } = useContext(CartCountContext);
  const getCartValues = async () => {

    setIsLoading(true)
    const response = await fetch(
      `${process.env.BASE_URL_DEV}shopping_carts?session_id=${uuid}`
    );
    const data = await response.json();

    if (data.shopping_cart_products){
      setCart({
        shopping_cart_products: data.shopping_cart_products,
        shopping_cart_bundles: data.shopping_cart_bundles,
      });
      setPricing({
        totalAmount: data.total_amount,
        discount: data.total_discount,
      });
      setCount(data.products_count);
      setOrderId(data.order_id)
    }else {
      setCart({
        shopping_cart_products: [],
        shopping_cart_bundles: [],
      });
      setPricing({
        totalAmount: "0",
        discount: "0",
      });
      setCount(0);
      setOrderId(null)
    }
    setIsLoading(false)
  };

  useEffect(() => {
    return () => {
      if (router?.query?.aquote || router?.query?.bquote){
        setCount(0);
        const Uuid = uuidv4();
        setUuid(Uuid);
      }
    };
  }, []);
  const {
    propertyType,
  } = useContext<any>(SidebarContext);

  const chargeCard = async (data,e) =>{

    if (paymentType === ""){
      alert("Please select a payment method.");
      return;
    }
    if (!data.acceptTerms){
      alert("Please accept terms and conditions.");
      return;
    }
    if (paymentType === "payByCard"){
      if (!stripObj?.stripe || !stripObj?.elements) {
        // Stripe.js has not yet loaded.
        // Make  sure to disable form submission until Stripe.js has loaded.
        alert("Please provide valid card details");
        return;
      }

      const card = stripObj?.elements.getElement(CardNumberElement);

      //@ts-ignore
      const result = await stripObj?.stripe.createToken(card);

      if (result.error) {
        alert(result.error.message ?? 'An unknown error occured')
      } else {
        placeOrder(data,result.token.id);
      }
    }

    if (paymentType != "payByCard"){
      placeOrder(data,"");
    }

  }


  const placeOrder = async (data,token) =>{
    setIsLoading(true)
    const body = {
      "payment_detail": {
        "billing_first_name": data.firstName,
        "billing_last_name": data.lastName,
        "billing_address": data.streetAddress,
        "billing_city": "data.city",
        "billing_state": "Punjab",
        "billing_postcode": data.postcode,
        "billing_phone": data.phone,
        "billing_phone_2": "data.phone2",
        "billing_email": data.email,
        "payment_method": "card"
      },
      "session_id": uuid
    }

    let url = `${process.env.BASE_URL_DEV}orders/charge_card`;
    if (paymentType === "payByCard"){
      //@ts-ignore
      body.token = token;
    }

    if (paymentType === "payOverPhone"){
       url = `${process.env.BASE_URL_DEV}orders/pay_over_phone`;
      body.payment_detail.payment_method = "pay_over_phone";
    }

    if (paymentType === "payByBank"){
      url = `${process.env.BASE_URL_DEV}orders/bank_transfer`;
      body.payment_detail.payment_method = "bank_transfer";
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
          url,
          requestOptions
      );
      const result =  await response.json();
      if (!response.ok) {

      } else {
        router?.push({
          pathname: "/order-received",
          query: {
            order_id:orderId
          },
        });
        setCount(0);
      }
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err, 'err')
    }


  }


  const GooglePayButton = useMemo(() => {
    return <GoogePayComponent pricing={pricing} uuid={uuid} orderId={orderId} />;
  }, [pricing,uuid,orderId]);


  // @ts-ignore
  return (
    <Elements stripe={stripePromise}>
      <div className="w-full flex flex-col justify-center items-center">
        <Head>
          <title>Checkout - Nationwide Surveyors</title>
        </Head>
        <div className="w-[70%] lg:w-[50%] xl:w-[43%]">
          <CheckoutStepper />
        </div>
        <div className="w-full flex flex-wrap justify-center items-start sm:gap-x-22">
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-center  pt-[35px] pb-[25px] px-2">
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
            <div className=" flex w-full md:hidden">
              <OrderSummary
                discount={pricing.discount}
                subTotal={pricing.totalAmount}
              />
            </div>
            <br />
            <div className="w-full">
              {pricing.totalAmount != "0"  ? GooglePayButton : null}
              <ButtonComponent
                text="Pay by debit/credit card"
                className={`flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded ${
             paymentType === "payByCard" && "text-white bg-lime rounded-b-none"
           }`}
                onClick={() => setPaymentType("payByCard")}
              />
              {paymentType === "payByCard" && (
                <div className="w-full">
                  <div className="bg-white space-y-6">
                    <div className="p-[14px] border-lime border-r-2 border-b-2 border-l-2 rounded-b">
                      <CardFormComponent stripObj={stripObj} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <br />
            <ButtonComponent
              text="Pay Over Phone"
              className={`flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
              hover:bg-lime px-[28px] py-[12px] uppercase rounded ${
                paymentType === "payOverPhone" &&
                "text-white bg-lime rounded-b-none"
              }`}
              onClick={() => setPaymentType("payOverPhone")}
            />
            <br />
            <ButtonComponent
              text="Pay By Bank Transfer"
              className={` flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded ${
             paymentType === "payByBank" && "text-white bg-lime rounded-b-none"
           }`}
              onClick={() => setPaymentType("payByBank")}
            />
            <br />
            {paymentType !== "" && <BillingForm chargeCard={chargeCard} />}
          </div>
          <div className="w-full lg:w-[25%] pt-[35px] pb-[25px] px-4 mt-[10px]">
            {
              (pricing.discount > 0) &&
                <div className=" bg-dark-blue flex rounded-sm py-[10px] pl-[45px] pr-[20px]">
                  <FontAwesomeIcon
                      className="text-lime w-8 xxl:w-4  mr-2"
                      icon={faTag}
                  />
                  <p className="text-white text-[15px] font-semibold">
                    Congratulations! £10 multi-service-order Discount has been
                    applied.
                  </p>
                </div>
            }
            <div className="hidden md:w-full md:flex">
              <OrderSummary
                  discount={pricing.discount}
                  subTotal={pricing.totalAmount}
              />
            </div>
            <CardComponent
                className="bg-lime shadow px-[20px] pt-[15px] pb-[20px] my-[25px]"
                hClass="text-xl mb-[15px] text-black font-bold text-center"
                pClass="font-semibold text-justify text-base"
                heading="WHAT’S NEXT AFTER ORDER PLACEMENT?"
                paragraph="Once an order is placed online, we aim to call you or your agent/tenants
           within 60 minutes of receiving your order (during our working hours) to organise suitable
            appointment(s). Depending on the availability of access to the property, our normal wait time is
             currently between 1 to 3 working days. If you need help placing new order or got a question,
              please don’t hesitate to call us free at 0800 048 7474."
            />
            <RequestCallBack
              attributes={attribute}
              services={selectedServiceId}
              propertyType={propertyType}
              setPaymentType={setPaymentType}
            />
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
  return (
    <div
      className={`flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0
     md:space-x-6 xl:space-x-8 ${discount > 0 && "mt-6"}`}
    >
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-white shadow-xl border border-slate-100 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          Summary
        </h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-[#9badad] border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Subtotal
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              &#163;{`${Number(subTotal) - Number(discount)}`}
            </p>
          </div>
          {discount > 0 &&
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Discount
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  -&#163;({discount})
                </p>
              </div>}
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
            &#163;{subTotal}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
