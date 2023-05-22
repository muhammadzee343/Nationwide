import Link from "next/link";
import Image from "next/image";
import logofooter from "../public/logofooter.png";

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


  const OtherLinkes = [
    { title: "Contact Us", pageLink: "/contact-us" },
    { title: "Business Enquiries", pageLink: "/business-enquiries" },
    { title: "Career", pageLink: "/career" },
    { title: "Join Us", pageLink: "/join-us-new" },
    { title: "Bulk Order Discounts", pageLink: "/bulk-order-discounts" },
    
  ];

  return (
    <>
      <footer className="p-4 bg-white sm:p-6 bg-gray-900 bg-footer_bg_image bg-no-repeat bg-cover w-full  md:px-0 xl:px-[39px] flex flex-wrap justify-center lg:justify-between mx-auto">
        <div className="flex flex-wrap lg:w-full justify-center my-10 md:mx-10">
          <div className="md:flex md:justify-between w-full lg:max-w-[970px] xl:max-w-[1170px]">
            <div className="mb-6 md:mb-0 pl-[15px] pr-[15px]">
              <Link href="#" className="flex items-center">
                <Image
                  className="h-10 w-52 inline cursor-pointer"
                  src={logofooter}
                  alt="Nwlogo"
                />
              </Link>
              <p className="md:w-[248px] text-[#a3a3a6] text-[15px] my-10 font-opensans">
              Nationwide Surveyors is a trading name of Nationwide Services-UK Limited, Company No: 12010871 Kemp House, 160 City Road London, EC1V 2NX
              </p>
              <div className="border-lime border-b-2 w-8 mb-2"></div>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 text-white font-opensans">
                Opening Hours
              </h3>
              <ul className="md:pr-5">
                <li className="flex justify-between text-[#a3a3a6]  text-[15px] py-3 font-opensans border-b border-b-white">
                  Mon - Fri
                  <span>
                    <strong className="text-lime">09am - 06pm</strong>
                  </span>
                </li>

                <li className="flex justify-between text-[#a3a3a6] text-[15px]  py-3 font-opensans border-b border-b-white">
                  Saturday
                  <span>
                    <strong className="text-lime">10am - 02pm</strong>
                  </span>
                </li>

                <li className="flex justify-between text-[#a3a3a6] text-[15px]  py-3 font-opensans border-b border-b-white">
                  Sunday
                  <span>
                    <strong className="text-lime">Closed</strong>
                  </span>
                </li>

              </ul>
            </div>
            <div className="lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-20 md:mt-0 lg:grid-cols-3 ">
              <div className="pl-[15px] pr-[15px]">
                <div className="border-lime border-b-2 rounded-full w-8 mb-2 "></div>
                <h3 className="mb-6 text-lg font-semibold text-white ">
                Our Services
                </h3>

                <ul className="text-gray-600 text-gray-400">

                  <li className="py-2">
                    <Link
                        href="/service/domestic-epc"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Energy Performance Certificate
                    </Link>
                  </li>

                  <li className="py-2">
                    <Link
                        href="/service/commercial-epc"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Commercial EPC
                    </Link>
                  </li>

                  <li className="py-2">
                    <Link
                        href="/service/gas-safety-certificate"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Landlord Gas Safety Certificate (CP12)
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                        href="/service/boiler-service"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Boiler Service
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                        href="/electrical-portable-appliance-test"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Electrical Portable Appliance Tests
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                        href="/service/electrical-installation-condition-report"
                        className="text-white hover:text-lime text-[15px]"
                    >
                      Electrical Installation Condition Report (EICR)
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                        href="/service/floor-plans"
                        className="text-white hover:text-lime text-[15px]"
                    >
                     Floor Plans
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                        href="/service/building-surveys"
                        className="text-white hover:text-lime text-[15px]"
                    >
                     Building Surveys
                    </Link>
                  </li>

                  

                </ul>
              </div>
              <div className="pl-[15px] pr-[15px]">
                <div className="border-lime border-b-2 rounded-full w-8 mb-2"></div>
                <h3 className="mb-6 text-lg font-semibold text-gray-900 text-white">
                Useful Links
                </h3>

                <ul className="text-gray-600 dark:text-gray-400">
                  {UsefulLinkes.map((items, index) => {
                    return (
                      <li className="pb-1.5" key={index}>
                        <Link
                          href={`/${items?.pageLink}`}
                          className=" text-white hover:text-lime text-sm leading-7"
                        >
                          {items?.title}
                        </Link>
                      </li>
                    );
                  })}

                </ul>
                <ul className="text-gray-600 dark:text-gray-400">
                <li className="mt-5">
                    <button className="w-[90%] transition-colors text-sm bg-lime p-3 hover:text-black hover:bg-white hover:font-normal  ">
                      SEE ALL OUR SERVICES
                    </button>
                  </li>
                  </ul>
              </div>

              <div className="pl-[15px] pr-[15px]">
                <div className="border-lime border-b-2 rounded-full w-8 mb-2"></div>
                <h3 className="mb-6 text-lg font-semibold text-gray-900 text-white ">
                  Prefer to Talk ?<br />
                  Please Call Us Free
                </h3>

                <ul className="text-gray-600 text-gray-400">
                  <li className="mb-5">
                    <h2 className="text-lime text-[29px] font-semibold mb-2">
                      0800 048 7474
                    </h2>
                  </li>

                  
                </ul>

                <ul className="text-gray-600 dark:text-gray-400">
                  {OtherLinkes.map((items, index) => {
                    return (
                      <li className="pb-1.5" key={index}>
                        <Link
                          href={`/${items?.pageLink}`}
                          className=" text-white hover:text-lime text-sm leading-7"
                        >
                          {items?.title}
                        </Link>
                      </li>
                      
                    );
                  })}
                  <li className="OtherLinkes">
                    <Link
                      href="mailto:info@nationwidesurveyors.org.uk"
                      className="text-white hover:text-lime text-[15px]"
                    >
                      info@nationwidesurveyors.org.uk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto border-gray-700" />
        <div className="w-full flex-row justify-center">
          <div className="w-full sm:flex sm:items-center sm:justify-between lg:min-w-[970px] xl:min-w-[1170px]">
            <div className="w-full flex justify-center">
              <span className="text-sm text-gray-500 sm:text-center text-gray-400">
              Copyright © 2023 
              <a href="#" className="text-white hover:text-lime ml-1 mr-1">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
