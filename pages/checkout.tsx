import React from "react";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";
import Table from "../components/table.component";
import CheckoutStepper from "../components/checkoutStepper.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import CardTable from "../components/cardTable.component";

function Checkout(props: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[70%] lg:w-[50%] xl:w-[43%]  ">
        <CheckoutStepper />
      </div>
      <div className="w-full flex flex-wrap justify-around ">
        <div className="w-full lg:w-[62%] flex flex-col justify-center items-center  pt-[35px] pb-[25px] px-2">
          <div className="w-full my-3">
            <CardTable />
          </div>
          <ButtonComponent
            text="Add an other service"
            className=" flex justify-center text-[13px] hover:text-white font-medium border-2 border-dark-blue hover:border-lime
           hover:bg-lime px-[28px] py-[12px] uppercase rounded"
          />
          <br />
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
          <div className=" flex w-full md:hidden">
            <OrderSummary />
          </div>
          <br />
          <BillingForm />
        </div>
        <div className="w-full lg:w-[32%] pt-[35px] pb-[25px] px-4 mt-[10px]">
          <div className=" bg-dark-blue flex rounded-sm py-[10px] pl-[45px] pr-[20px]">
            <FontAwesomeIcon className="text-lime w-4 mr-2" icon={faTag} />
            <p className="text-white text-[15px] font-semibold">
              Congratulations! £10 multi-service-order Discount has been
              applied.
            </p>
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
          <div className="hidden md:w-full md:flex">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-[#ececec] dark:bg-gray-800 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          Summary
        </h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-[#9badad] border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Subtotal
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              $56.00
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Discount
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              -$28.00 (50%)
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Shipping
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              $8.00
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
            $36.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
