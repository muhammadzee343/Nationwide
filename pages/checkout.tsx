import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import ButtonComponent from "../components/button.component";
import BillingForm from "../components/billingForm";
import CardComponent from "../components/card.component";

function Checkout(props: any) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full flex flex-col justify-center items-center
       md:min-w-[735px] md:max-w-[735px] lg:min-w-[955px] lg:max-w-[955px]
        xl:min-w-[1155px] xl:max-w-[1155px]  pt-[35px] pb-[25px] px-2 sm:px-0"
      >
        <div className="w-[70%] lg:w-[50%] xl:w-[52%]  ">
          <Stepper />
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

function Stepper() {
  return (
    <div
      className=" flex justify-between sm:container
       my-6 border-b-[4px] border-lime  mb-9"
    >
      <div className="bg-lime relative  mb-[-18px]  text-white  text-center  w-[35px] h-[35px] rounded-full">
        <FontAwesomeIcon className="mb-[-7px]" icon={faCheck} />
        <div className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px]  text-[12px] lg:text-base  sm:w-[160px] md:w-[180px] font-semibold text-dark-blue sm:border-b-[3px] border-lime">
          ORDER INFORMATION
        </div>
      </div>
      <div className="bg-lime relative mb-[-18px]   text-white  text-center  w-[35px] h-[35px] rounded-full">
        <FontAwesomeIcon className="mb-[-7px]" icon={faCheck} />
        <div className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px] text-[12px] lg:text-base  sm:w-[160px] md:w-[180px] font-semibold text-dark-blue sm:border-b-[3px] border-lime">
          ORDER SUMMARY
        </div>
      </div>
      <div className=" bg-white relative mb-[-18px]  text-white  text-center  w-[35px] h-[35px] rounded-full border-lime border-4">
        <FontAwesomeIcon className="mb-[-7px]" icon={faCheck} />
        <div className="absolute top-12  inset-x-0 sm:left-[-70px] pb-[6px] text-[12px] lg:text-base  sm:w-[160px] md:w-[180px] text-[#dedede] font-semibold">
          ORDER PAYMENT
        </div>
      </div>
    </div>
  );
}
function Table() {
  return (
    <div className=" w-full overflow-x-auto relative mt-[80px]">
      <h3 className="bg-dark-blue flex items-center font-base font-semibold text-white px-[25px] py-1 h-[45px] mb-[15px]">
        ORDER SUMMARY
      </h3>
      <table className="w-full text-sm text-left text-gray-500 text-gray-400">
        <thead className="text-sm text-dark-blue">
          <tr className=" border-b border-[#e5e7eb]">
            <th scope="col" className="py-3 sm:px-6 "></th>
            <th scope="col" className="py-3 sm:px-6 font-semibold">
              SERVICES
            </th>
            <th scope="col" className="py-3 sm:px-6 font-semibold float-right">
              SUBTOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b bg-gray-800 border-[#e5e7eb]">
            <td className="py-4 pl-3 sm:w-[10%] font-medium text-gray-900 whitespace-nowrap text-white">
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-[#ff0000] h-[20px] cursor-pointer"
              />
            </td>
            <td className="py-4 sm:pl-6 pr-18 sm:w-[60%]">
              <div className="flex flex-col">
                <p className="text-[15px] text-dark-blue font-semibold">
                  Boiler Service
                </p>
                <p className="text-[15px] text-dark-blue font-semibold">
                  <span className="text-[15px] text-dark-blue font-bold">
                    Address:
                  </span>
                  3D Business Solutions (Accountancy Book Keeping IT Business
                  Mobiles & HR), Accountancy, Leicester, Leicestershire, LE11AA
                </p>
              </div>
            </td>

            <td className="py-4 sm:px-6 float-right">
              <p className="text-[15px] text-dark-blue font-semibold">
                &#163;89.00
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-white border-b bg-gray-800 border-[#e5e7eb]">
            <th
              scope="row"
              className="py-4 sm:px-6 font-medium text-gray-900 whitespace-nowrap text-white"
            >
              <p className="text-[15px] text-dark-blue font-bold">SUBTOTAL</p>
            </th>
            <td className="py-4 pl-6 pr-18 sm:w-[60%]">
              <div className="flex flex-col"></div>
            </td>

            <td className="py-4 sm:px-6 float-right">
              <p className="text-[15px] text-dark-blue font-semibold">
                &#163;89.00
              </p>
            </td>
          </tr>
          <tr className="bg-white border-b bg-gray-800 border-[#e5e7eb]">
            <th
              scope="row"
              className="py-4 sm:px-6 font-medium text-gray-900 whitespace-nowrap text-white"
            >
              <p className="text-sm text-dark-blue font-bold">TOTAL</p>
            </th>
            <td className="py-4 sm:pl-6 pr-18 w-[60%]">
              <div className="flex flex-col"></div>
            </td>

            <td className="py-4 sm:px-6 float-right">
              <p className="text-sm text-dark-blue font-semibold">
                &#163;89.00
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Checkout;
