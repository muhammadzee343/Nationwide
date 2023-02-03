import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { CartCountContext, UuidContext } from "../context/sidebarContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CardFormComponent from "../components/cardForm.component";
import CardTable from "../components/cardTable.component";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";
import CheckoutStepper from "../components/checkoutStepper.component";




function Checkout(props: any) {
  const router = useRouter();
  const [cart, setCart] = useState<any>([]);
  const [pricing, setPricing] = useState({ totalAmount: "0", discount: "0" });
  const { uuid , setUuid } = useContext(UuidContext);


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
    const response = await fetch(
      `${process.env.BASE_URL_DEV}shopping_carts?session_id=${uuid}`
    );
    const data = await response.json();

    setCart(data.shopping_cart_orders);
    setPricing({
      totalAmount: data.total_amount,
      discount: data.total_discount,
    });
    setCount(data.orders_count);
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


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Head>
        <title>Checkout - Nationwide Surveyors</title>
      </Head>
      <div className="w-[70%] lg:w-[50%] xl:w-[43%]">
        <CheckoutStepper />
      </div>
      <div className="w-full flex flex-wrap justify-center sm:gap-x-22">
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center  pt-[35px] pb-[25px] px-2">
          <div className="w-full my-3">
            <CardTable cart={cart} getCart={getCartValues} />
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
          <br/>
          <ButtonComponent
            text="Pay by debit/credit card"
            className=" flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
          />

          <br />
          <ButtonComponent
            text="Pay Over Phone"
            className=" flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
          />
          <br />
          <ButtonComponent
            text="Pay By Bank Transfer"
            className=" flex justify-center text-[13px] font-bold hover:text-white border-2 border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
          />
          <br />
          <BillingForm />
        </div>
        <div className="w-full lg:w-[25%] pt-[35px] pb-[25px] px-4 mt-[10px]">
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
        </div>
      </div>
    </div>
  );
}

function OrderSummary({ subTotal, discount }: any) {
  return (
    <div
      className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0
     md:space-x-6 xl:space-x-8 mt-6"
    >
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-white shadow-xl space-y-6">
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
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Discount
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              -&#163;({discount})
            </p>
          </div>
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
