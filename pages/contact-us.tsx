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
import Head from "next/head";
import SelectProperty from "../components/selectProperty.component";
function ContactUs(props: any) {
  return (
    <>
      <div className="bg-home_bg_image bg-cover w-full">
        <div className="flex w-full bg-[#182333]/40 backdrop-brightness-75 pt-[45px] pb-[30px] lg:h-[400px] flex flex-row flex-wrap justify-start lg:px-32">
          <div className="w-full mb-3 px-4 lg:mt-10 lg:w-[36.5%] xl:w-[36.7%]">
            <div className="border-b-4 border-lime w-[85px] mb-3"></div>
            <h4 className="text-white uppercase text-[23px] ">GET IN TOUCH</h4>
            <h4 className="font-bold text-white text-[36px] ">For All Enquiries</h4>
            <div>
              <p className="pt-10 text-white text-justify">
                Depending on the type and nature of your enquiry. Please select one of therelevant option below.
              </p>

            </div>
          </div>
        </div>
      </div>

    <div className="mb-20 w-full flex justify-center px-[31px] sm:mb-20 md:mb-12">
      <Head>
        <title>Nationwide Surveyors | Contact Us</title>
      </Head>

      <div className="w-full flex justify-center xl:container xxl:px-[100px]">
        <div className="lg:w-[80%] bg-dark-blue rounded p-0 flex flex-col md:flex-row justify-center ">
          <div className="w-full py-5 md:w-[50%] flex flex-col justify-around items-center">

            {enquiries.map(({ text, link, query }, index) => {
              return (
                <div key={index} className="w-full">
                  <Enquiry text={text} link={link} query={query} />
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-[50%] flex flex-col ">
            <ContactUsCard />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;

function Enquiry({ text, link, query }: any) {
  return (
    <div className="w-[95%%] md:w-11/12 bg-lime hover:bg-dark-blue  text-white ease-in mb-[21px]  duration-200">
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
    <div className=" w-full sm:w-11/12 h-[95%] bg-lime  drop-shadow-lg sm:px-3  border-lime items-end">
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
            <li className="flex gap-3 text-sm py-[5px] ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-lime mt-1"
                icon={faMobileScreenButton}
              />
              0800 048 7474
            </li>
            <li className="flex gap-3 text-sm py-[5px] ">
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
            <li className="flex gap-3 text-sm py-[5px]  ">
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
