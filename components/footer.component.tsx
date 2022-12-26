import Link from "next/link";
import Image from "next/image";
import logofooter from "../public/logofooter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/header.module.css";
import {
  faFacebookF,
  faFlickr,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const OurServices = [
    { title: "Energy Performance Certificate", pageLink: "domestic-epc" },
    { title: "Commercial EPC", pageLink: "commercial-epc" },
    { title: "Gas Safety Certificate", pageLink: "gas-safety-certificate" },
    { title: "Boiler Service", pageLink: "boiler-service" },
    {
      title: "Electrical Portable Appliance Test",
      pageLink: "electrical-portable-appliance-test",
    },
    {
      title: "Electrical Installation Condition Report (EICR)",
      pageLink: "electrical-installation-condition-report",
    },
    { title: "Floor Plans", pageLink: "floor-plans" },
    { title: "Building Surveys", pageLink: "building-surveys" },
  ];

  const UsefulLinkes = [
    { title: "Frequently Asked Questions", pageLink: "faq" },
    { title: "How It Works", pageLink: "how-it-works" },
    { title: "Who Needs an EPC", pageLink: "who-needs-an-epc" },
    {
      title: "Energy Performance Certificate Rules and Regulations",
      pageLink: "energy-performance-certificate-rules-and-regulations",
    },
    { title: "Who needs EICR", pageLink: "who-needs-eicr" },
    { title: "Terms & Condition", pageLink: "terms-condition" },
  ];

  return (
    <>
      <footer className="p-4 bg-white sm:p-6 bg-gray-900 bg-footer_bg_image bg-no-repeat bg-cover">
        <div className=" flex flex-wrap justify-center my-10 md:mx-10">
          <div className="md:flex md:justify-evenly">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center">
                <Image
                  className="h-10 w-52 inline cursor-pointer"
                  src={logofooter}
                  alt="Nwlogo"
                />
              </Link>
              <p className="md:w-[248px] text-[#a3a3a6] text-[15px] my-10">
                Nationwide Surveyors is a trading name of Nationwide Services-UK
                Limited, Company No: 12010871 Kemp House, 160 City Road London,
                EC1V 2NX
              </p>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 pl-3  text-white border-l-4 border-lime">
                Opening Hours
              </h3>
              <ul className="md:pl-4 md:pr-5">
                <li className="flex justify-between text-[#a3a3a6]  text-[16px]  py-1">
                  Mon - Fri
                  <span>
                    <strong className="text-lime">09am - 06pm</strong>
                  </span>
                </li>
                <hr className="" />
                <li className="flex justify-between text-[#a3a3a6] text-[16px]  py-1">
                  Saturday
                  <span>
                    <strong className="text-lime">10am - 02pm</strong>
                  </span>
                </li>
                <hr className="" />
                <li className="flex justify-between text-[#a3a3a6] text-[16px]  py-1">
                  Sunday
                  <span>
                    <strong className="text-lime">Closed</strong>
                  </span>
                </li>
                <hr className="" />
              </ul>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 mt-20 md:mt-0 lg:grid-cols-3">
              <div>
                <h3 className="mb-6 text-lg font-semibold  pl-3  text-white border-l-4 border-lime">
                  Our Services
                </h3>

                <ul className="text-gray-600 text-gray-400">
                  {OurServices.map((el, index) => {
                    return (
                      <li className="mb-4" key={index}>
                        <Link
                          href={`/service/${el.pageLink}`}
                          className={styles.tNavLinks}
                        >
                          {el.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-lg  font-semibold  text-gray-900 pl-3  text-white border-l-4 border-lime  ">
                  Useful Links
                </h3>

                <ul className="text-gray-600 dark:text-gray-400">
                  {UsefulLinkes.map((items, index) => {
                    return (
                      <li className="mb-4" key={index}>
                        <Link
                          href={`/${items?.pageLink}`}
                          className=" text-white hover:text-lime text-sm"
                        >
                          {items?.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mt-5">
                    <button className="font-bold transition-colors text-white text-sm border-2 border-white p-3 hover:text-black hover:bg-white hover:font-normal  ">
                      SEE ALL OUR SERVICES
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-semibold text-gray-900 pl-3  text-white border-l-4 border-lime">
                  Prefer to Talk ?<br />
                  Please Call Us Free
                </h3>

                <ul className="text-gray-600 text-gray-400">
                  <li className="mb-10">
                    <h2 className="text-lime text-[29px] font-semibold mb-2">
                      0800 048 7474
                    </h2>
                  </li>
                  <li className="py-1">
                    <a
                      href="/contact-us"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/business-enquiries"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      Business Enquiries
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/career"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      Career
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      Join Us
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="/bulk-order-discounts"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      Bulk Order Discounts
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      info@nationwidesurveyors.org.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center text-gray-400">
            Copyright © 2021
            <a href="#" className="text-white hover:text-lime">
              Nationwide Surveyors.
            </a>
            All Rights Reserved.
            <Link
              href="/cookie-policy"
              className="text-white hover:text-lime ml-3"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white hover:text-lime ml-3"
            >
              Privacy Policy
            </Link>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 hover:text-white"
            >
              <FontAwesomeIcon className="w-[10px]" icon={faFacebookF} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon className="w-4" icon={faTwitter} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 hover:text-white"
            >
              <FontAwesomeIcon className="w-4" icon={faFlickr} />
              <span className="sr-only">flickr page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 hover:text-white"
            >
              <FontAwesomeIcon className="w-4" icon={faLinkedin} />
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
