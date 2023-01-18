import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { enquiries } from "../utility/contactUsConstants";

function ContactUs(props: any) {
  return (
    <div className="w-full flex justify-center px-[31px] mb-10">
      <div className=" w-full xl:container xxl:px-[100px]">
        <div className="w-full flex flex-col md:flex-row  pt-[82px]">
          <div className=" w-full md:w-6/12 flex flex-col px-2">
            <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
                GET IN TOUCH
              </h4>
              <h2 className="text-[36px]  font-medium text-dark-blue font-semibold">
                For All Enquiries
              </h2>
            </div>
            <p className="text-[15px] mb-[30px] text-[#1a1a1a] leading-6 ">
              Depending on the type and nature of your enquiry. Please select
              one of the relevant option below.
            </p>
            {enquiries.map(({ text, link, query }, index) => {
              return (
                <div key={index}>
                  <Enquiry text={text} link={link} query={query} />
                </div>
              );
            })}
          </div>

          <div className=" w-full md:w-6/12 flex flex-col ">
            <ContactUsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

function Enquiry({ text, link, query }: any) {
  return (
    <div className=" w-[95%] md:w-11/12 bg-lime hover:bg-dark-blue  text-white ease-in mb-[21px]  duration-200">
      <Link
        href={{ pathname: link, query: query }}
        className="text-sm block text-white font-semibold px-[30px] py-[13px]"
      >
        {text}
      </Link>
    </div>
  );
}

function ContactUsCard(props: any) {
  return (
    <div className=" w-full sm:w-11/12 h-[95%] bg-white rounded-[10px] drop-shadow-lg sm:px-3 border-t-[6px] border-lime items-end">
      <div className="my-[42px] mx-[10px]">
        <div className="px-2">
          <h4 className="font-semibold text-[25px] leading-7 text-dark-blue text-left mb-[15px]">
            Contact Us
          </h4>
          <div className="mt-9">
            <div className="flex my-[16px] gap-3 ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faLocationDot}
              />
              <div className="text-sm leading-6">
                Head Office:
                <br />
                Kemp House, 160 City Road
                <br />
                London, EC1V 2NX
              </div>
            </div>
            <div className="flex my-[16px] gap-3 ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faLocationDot}
              />
              <div className="text-sm leading-6">
                Regional Office:
                <br />
                Suite 73, Milton Keynes Business Centre
                <br />
                Foxhunter Drive, Milton Keynes
                <br />
                MK14 6GD
              </div>
            </div>
          </div>
          <ul>
            <li className="flex gap-3 text-sm py-[16px] border-t border-t-[#eaeaea]">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faMobileScreenButton}
              />
              0800 048 7474
            </li>
            <li className="flex gap-3 text-sm py-[16px] border-t border-t-[#eaeaea]">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faMessage}
              />
              <Link
                href="mailto:info@nationwidesurveyors.org.uk"
                className="text-sm leading-7 hover:text-lime ease-in duration-200 break-all"
              >
                info@nationwidesurveyors.org.uk
              </Link>
            </li>
            <li className="flex gap-3 text-sm py-[16px] border-t border-t-[#eaeaea] ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faGlobe}
              />
              <a
                href="https://nationwide-surveyors.org.uk/"
                className="text-sm leading-7 hover:text-lime ease-in duration-200 break-all"
              >
                www.nationwidesurveyors.org.uk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
