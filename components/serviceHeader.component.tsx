import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ServiceHeader(props: any) {
  return (
    <div className="bg-header_bg bg-blue-transparent bg-cover bg-no-repeat w-full">
      <div className="bg-blue-transparent w-full py-[32px]">
        <h1 className="text-[40px] font-bold text-white mb-[25px] text-center">
          Energy Performance Certificate
        </h1>
        <div className="w-full flex justify-around">
          <div className="w-full md:container flex justify-center">
            <div className="w-5/12 flex flex-col">
              <div className="flex gap-3 my-2">
                <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                  <FontAwesomeIcon
                    className="w-4"
                    icon={faCheck}
                  ></FontAwesomeIcon>
                </span>
                <p className="text-lg text-white font-semibold">
                  EICR certificate shared same day
                </p>
              </div>
              <div className="flex gap-3 my-2">
                <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                  <FontAwesomeIcon
                    className="w-4"
                    icon={faCheck}
                  ></FontAwesomeIcon>
                </span>
                <p className="text-lg text-white font-semibold">
                  Failings repaired on half hour rate
                </p>
              </div>
              <div className="flex gap-3 my-2">
                <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                  <FontAwesomeIcon
                    className="w-4"
                    icon={faCheck}
                  ></FontAwesomeIcon>
                </span>
                <p className="text-lg text-white font-semibold">
                  Knowledge & advice you can trust
                </p>
              </div>
              <div className="flex gap-3 my-2">
                <span className="w-6 h-6 bg-lime flex justify-center rounded-full">
                  <FontAwesomeIcon
                    className="w-4"
                    icon={faCheck}
                  ></FontAwesomeIcon>
                </span>
                <p className="text-lg text-white font-semibold">
                  Charged at £30.00 ex VAT per circuit
                </p>
              </div>
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
  );
}

export default ServiceHeader;
