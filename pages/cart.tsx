import React from "react";
import Table from "../components/table.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Cart(props: any) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full flex flex-col justify-center items-center
       md:min-w-[735px] md:max-w-[735px] lg:min-w-[955px] lg:max-w-[955px]
        xl:min-w-[1155px] xl:max-w-[1155px]  pt-[35px] pb-[25px] px-2 sm:px-0"
      >
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
                <th
                  scope="col"
                  className="py-3 sm:px-6 font-semibold float-right"
                >
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
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-dark-blue h-[20px] ml-3 cursor-pointer"
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
                      3D Business Solutions (Accountancy Book Keeping IT
                      Business Mobiles & HR), Accountancy, Leicester,
                      Leicestershire, LE11AA
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
                  <p className="text-[15px] text-dark-blue font-bold">
                    SUBTOTAL
                  </p>
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
      </div>
    </div>
  );
}

export default Cart;
