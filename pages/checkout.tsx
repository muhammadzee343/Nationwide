import React from "react";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";
import Table from "../components/table.component";
import CheckoutStepper from "../components/checkoutStepper.component";
import { useForm } from "react-hook-form";

function Checkout(props: any) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full flex flex-col justify-center items-center
       md:min-w-[735px] md:max-w-[735px] lg:min-w-[955px] lg:max-w-[955px]
        xl:min-w-[1155px] xl:max-w-[1155px]  pt-[35px] pb-[25px] px-2 sm:px-0"
      >
        <div className="w-[70%] lg:w-[50%] xl:w-[52%]  ">
          <CheckoutStepper />
        </div>
        <div className="w-full">
          <Table />
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
        <BillingForm />
        <CardComponent
          className="bg-lime shadow px-[20px] pt-[15px] pb-[20px] my-[25px]"
          heading="WHAT’S NEXT AFTER ORDER PLACEMENT?"
          paragraph="Once an order is placed online, we aim to call you or your agent/tenants
           within 60 minutes of receiving your order (during our working hours) to organise suitable
            appointment(s). Depending on the availability of access to the property, our normal wait time is
             currently between 1 to 3 working days. If you need help placing new order or got a question,
              please don’t hesitate to call us free at 0800 048 7474."
        />
      </div>
    </div>
  );
}

export default Checkout;
