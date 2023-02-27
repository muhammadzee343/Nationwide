import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ServiceHeader(props: any) {
  const epcPoints = [
    "EICR certificate shared same day",
    "Failings repaired on half hour rate",
    "Knowledge & advice you can trust",
    "Charged at £30.00 ex VAT per circuit",
  ];
  return (
    <>
      <div className="bg-header_bg bg-blue-transparent bg-cover bg-no-repeat relative  h-[230px] sm:h-[300px] md:h-fit  w-full">
        <div className="md:bg-blue-transparent hidden md:block w-full py-[32px]">
          <h1 className="text-[34px] md:text-[40px] bg-blue-transparent md:bg-transparent font-bold text-white mb-[25px] text-center">
            Energy Performance Certificate
          </h1>
          <div className="w-full flex justify-around">
            <div className="w-full md:container flex flex-col md:flex-row justify-center items-center md:px-6">
              <div className="w-5/12 flex flex-col">
                {props?.servicesDec.map((ele: any, index) => {
                  return (
                    <div key={index} className="flex gap-3 my-2">
                      <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                        <FontAwesomeIcon
                          className="w-4"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </span>
                      <p className="text-lg text-dark-blue md:text-white font-semibold">
                        {ele}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-5/12 flex flex-col text-center">
                <p className="text-lg text-white font-semibold">
                  Our team can help with all of your EICR questions
                </p>
                <div className="my-[30px]">
                  <Link
                    href="/"
                    className=" bg-lime hover:bg-dark-blue rounded-full py-[12px] px-[35px] text-dark-blue hover:text-white text-lg font-bold ease-in duration-200"
                  >
                    Request a callback
                  </Link>
                </div>
                <p className="text-lg text-white font-semibold">
                  or call for help, advice or to book
                </p>
                <p className="text-lg text-lime font-semibold py-4">
                  0800 048 7474
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-blue-transparent md:hidden block w-full py-[32px] relative">
        <h1 className=" text-[20px] md:text-[34px] md:text-[40px] bg-blue-transparent md:bg-transparent font-bold text-white mb-[25px] text-center absolute py-[3px] top-[-35px] md:top-[-51px] w-full">
          Energy Performance Certificate
        </h1>
        <div className="w-full flex justify-around">
          <div className="w-full md:container flex flex-col md:flex-row justify-center md:items-center px-6">
            <div className=" w-full md:w-5/12 flex flex-col">
              {props?.servicesDec.map((ele: any, index) => {
                return (
                  <div key={index} className="flex gap-3 my-2">
                    <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                      <FontAwesomeIcon
                        className="w-4"
                        icon={faCheck}
                      ></FontAwesomeIcon>
                    </span>
                    <p className="text-lg text-dark-blue md:text-white font-semibold">
                      {ele}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <h2 className="text-[30px] font-semibold text-dark-blue">
                Request a callback
              </h2>
            </div>
            <div className=" w-full md:w-5/12 flex flex-col text-center">
              <p className="text-lg  text-dark-blue md:text-white font-semibold">
                Our team can help with all of your EICR questions
              </p>
              <div className="my-[30px]">
                <Link
                  href="/"
                  className=" bg-lime hover:bg-dark-blue rounded-full py-[12px] px-[35px] text-dark-blue hover:text-white text-lg font-bold ease-in duration-200"
                >
                  Request a callback
                </Link>
              </div>
              <p className="text-lg text-dark-blue md:text-white font-semibold">
                or call for help, advice or to book
              </p>
              <p className="text-lg text-lime font-semibold py-4">
                0800 048 7474
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeader;
