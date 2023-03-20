import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationCrosshairs,
  faPhone,
  faCircleDot
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { enquiries } from "../utility/contactUsConstants";
import Head from "next/head";
import Image from 'next/image'
import arrow from  '../public/trending_flat.png';

function ContactUs(props: any) {
  return (
    <>
    <div className="mb-20 w-full flex-row justify-center sm:mb-20 md:mb-12">
      <Head>
        <title>Nationwide Surveyors | Contact Us</title>
      </Head>
      <div className="bg-contact_us bg-cover w-full block">
        <div className="flex w-full bg-blue-transparent backdrop-brightness-100 pt-[45px] pb-[30px] md:min-h-[350px] lg:min-h-[440px] flex flex-row flex-wrap justify-start lg:px-32">
          <div className="w-full mb-3 px-4 md:w-[60%] lg:mt-10 xl:w-[40.5%] xl:w-[36.7%]">
            <div className="border-b-4 rounded-full border-lime w-[85px] mb-3"></div>
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
      <div className="w-full relative min-h-[700px] md:min-h-[360px] lg:min-h-[400px] flex justify-center">
        <div className="w-full md:w-[80%] xl:w-[85%] absolute bg-white top-0 md:-top-[19%] lg:-top-[36%] shadow-xl rounded-lg overflow-hidden sm:flex sm:flex-col md:flex-row justify-center ">
          <div className="w-full py-5 md:w-[55%] flex flex-col justify-around items-center">
            {enquiries.map(({ text, link, query }, index) => {
              return (
                <div key={index} className="w-[90%] ">
                  <Enquiry text={text} link={link} query={query} />
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-[45%] flex flex-row justify-center ">
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
    <div className="rounded-sm flex flex-row justify-start px-10 items-center text-black border-lime mb-2 md:mb-0 border-[2px] hover:bg-dark-blue hover:border-0 hover:text-white ease-in duration-200">
      <Image src={arrow} alt="Arrow right"/>
      <Link
        href={{ pathname: link, query: query }}
        className="text-[10px] lg:text-sm block font-semibold px-[20px]  lg:px-[30px] py-[15px]"
      >
        {text}
      </Link>
    </div>
  );
}

function ContactUsCard(props: any) {
  return (
    <div className="w-full flex flex-row h-[550px] items-center justify-center sm:w-11/12 md:w-full bg-lime  drop-shadow-lg sm:px-3 border-lime items-end">
      <div className="my-[22px] mx-[10px]">
        <div className="px-2">
          <h4 className="font-semibold text-[25px] leading-7 text-black text-left mb-[15px]">
            Contact Us
          </h4>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col justify-between items-center py-5">
              <FontAwesomeIcon
                  className="w-6 h-5 text-black "
                  icon={faLocationCrosshairs}
              />
              <div className="w-[1px] bg-dark-blue h-full">
              </div>
              <FontAwesomeIcon
                  className="w-3 h-3 text-black"
                  icon={faCircleDot}
              />
            </div>
           <div className="flex flex-col justify-start">
             <div className="flex my-[16px] gap-5 ">
               <div className="text-sm md:text-[12px] lg:text-sm leading-5 lg:leading-6">
                 Head Office:
                 <br />
                 Kemp House, 160 City Road
                 <br />
                 London, EC1V 2NX
               </div>
             </div>
             <div className="flex my-[16px] gap-5 ">
               <div className="text-sm md:text-[12px] lg:text-sm leading-5 lg:leading-6">
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
          </div>
          <ul>
            <li className="flex items-center gap-5 text-sm md:text-[12px] lg:text-sm py-[5px] ">
              <FontAwesomeIcon
                className="w-6 h-5 text-black mt-1"
                icon={faPhone}
              />
              0800 048 7474
            </li>
            <li className="flex items-center gap-5 text-sm md:text-[12px] lg:text-sm py-[5px] ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-black mt-1"
                icon={faMessage}
              />
              <Link
                href="mailto:info@nationwidesurveyors.org.uk"
                className="text-sm md:text-[11px] lg:text-sm leading-5 lg:leading-6 hover:text-black ease-in duration-200 break-all"
              >
                info@nationwidesurveyors.org.uk
              </Link>
            </li>
            <li className="flex items-center gap-5 text-sm md:text-[11px] lg:text-sm py-[5px]  ">
              <FontAwesomeIcon
                className=" w-6 h-5 text-black mt-1"
                icon={faGlobe}
              />
              <a
                href="https://nationwide-surveyors.org.uk/"
                className="text-sm md:text-[11px] lg:text-sm leading-5 lg:leading-6 hover:text-black ease-in duration-200 break-all"
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
