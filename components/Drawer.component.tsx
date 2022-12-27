import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChevronRight,
  faHouse,
  faTag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ServiceSelectionCard from "./serviceSelectionCard.component";
import { attributes } from "../utility/orderNowConstants";
import RadioButton from "./RadioButton.component";
import Counter from "./counter";
import AlertBox from "./alertBox.component";
import TextField from "./TextFied.component";
import ButtonComponent from "./button.component";
import styles from "../styles/Home.module.css";
import RequestCallBack from "./requestCallBack.component";
import HowItWorks from "./howItWorksCard.component";
import CardComponent from "./card.component";
import { SidebarContext } from "../context/sidebarContext";

const DrawerComponent = ({}: any) => {
  const [showMore, setShowMore] = useState(false);
  const [Services, setServices] = useState<any[]>([]);
  const [Postcode, setPostcode] = useState("");
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const [serviceAttributes, setServiceAttributes] = useState<string[]>([]);
  const [step, setStep] = useState(true);
  const [attribute, setAttributes] = useState<any>({
    propertyType: "",
    NoOfBedrooms: "",
    noOtherBedrooms: "",
    NoFuseBoard: "",
    NoElectricalAppliances: "",
    PropertyAge: "",
    PropertyPrice: "",
    NoFloors: "",
    NoGasAppliances: "",
    gasFire: "",
    backBoiler: "",
    postCode: "",
    hasGas: "",
    propertyAddress: "",
    contactAccess: "",
    contact: {
      otherName: "",
      tenantConatctNo: "",
      otherEmail: "",
    },
  });

  const {
    showDrawer,
    setShowDrawer,
    overlay,
    setOverlay,
    propertyType,
    setPropertyType,
  } = useContext(SidebarContext);
  useLayoutEffect(() => {
    fetchData(propertyType);
  }, []);
  const fetchData = async (propertyType: any) => {
    const res = await fetch("http://192.168.10.38:8000/services/list_services");
    const data = await res.json();
    const filteredService = data.services.filter(
      (data) => data.category === propertyType
    );
    setServices(filteredService);
  };

  const selectService = (title: string) => {
    const temp = title;
    const condition = selectedService.findIndex((ele) => title === ele) === -1;
    let attributes: string[] = [...serviceAttributes];
    if (condition) {
      const selectedServicesData = [...selectedService, temp];
      setAllAttributes(selectedServicesData);
      setSelectedService(selectedServicesData);
    } else {
      const index = selectedService.findIndex((ele) => title === ele);
      selectedService.splice(index, 1);
      setAllAttributes(selectedService);
      setSelectedService([...selectedService]);
    }
  };

  const displayDrawer = () => {
    setShowDrawer(false);
    setTimeout(() => {
      setOverlay(false);
    }, 690);
  };

  const setAllAttributes = (selectedServicesData: string[]) => {
    let attributes = new Set();

    const addAttributes = Services.forEach((data) => {
      if (
        selectedServicesData.includes(data.name) &&
        data?.service_attributes
      ) {
        Object.keys(data?.service_attributes).forEach(function (key) {
          attributes.add(key);
        });
      }
    });
    //@ts-ignore
    setServiceAttributes([...attributes]);
  };

  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    const services = !showMore ? Services.slice(0, 5) : Services;

    for (let i = 0; i < services?.length; i++) {
      const service = services[i];
      elements.push(
        <div
          key={i}
          className=" w-full mb-[13px]"
          onClick={() => selectService(service.name)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${
              selectedService.includes(service.name)
                ? " border-lime bg-lime self-end "
                : "border-[#9b9b9b] "
            } text-[17px] py-[7px]`}
          />
        </div>
      );
    }

    return elements;
  }, [propertyType, selectedService, Services, showMore]);

  const serviceAttribute = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    serviceAttributes.forEach((key, index) => {
      const ele = attributes[key];
      if (ele) {
        elements.push(
          <>
            <div
              className=" w-full sm:px-5 md:px-0 xl:w-8/12 mt-8 mb-2"
              key={index}
            >
              <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                {ele.headings}
              </h3>
            </div>
            <div className="w-full flex sm:px-5 md:px-0 ">
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 lg:justify-start">
                {ele.options.map((attr, index) => {
                  if (attr.type === "radio") {
                    return (
                      <>
                        <div key={index} className="w-full ">
                          <RadioButton
                            title={attr.title}
                            value={attr.value}
                            lable={ele.attr}
                            selectattribute={setAttributes}
                            pClass="text-[17px] font-semibold"
                            className={`${
                              attribute[ele.attr] === attr.value
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                          />
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <div key={index} className="w-full  flex">
                        <p className=" text-lg text-dark-blue font-semibold mr-3">
                          {attr.title}
                        </p>
                        <Counter />
                      </div>
                    );
                  }
                })}
                {ele.exactNumber && attribute[ele.attr] === "+" && (
                  <div className="w-full flex">
                    <p className=" text-lg text-dark-blue font-semibold mr-3 w-5/12">
                      {ele.exactNumber}
                    </p>
                    <div className="w-5/12">
                      <Counter />
                    </div>
                  </div>
                )}
                {ele.Alert && attribute[ele.attr] === "+" && (
                  <AlertBox text={ele.Alert} />
                )}
                {ele.radioQuestion.map((ques, index) => {
                  return (
                    <div key={index} className="flex flex-col w-full">
                      <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 w-5/12">
                        {ques.question}
                      </p>
                      <div className="flex flex-wrap gap-9">
                        {ques.options.map((x, index) => {
                          return (
                            <RadioButton
                              key={index}
                              title={x.title}
                              value={x.value}
                              lable={x.attr}
                              selectattribute={setAttributes}
                              className={`${
                                attribute[x.attr] === x.value
                                  ? "bg-lime"
                                  : "border border-grey-500"
                              } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {ele.exactNumber2 && attribute[ele.attr] === "+" && (
                  <div className="w-full flex my-4">
                    <p className=" text-lg text-dark-blue font-semibold mr-3 ">
                      {ele.exactNumber2}
                    </p>
                    <div className="w-5/12">
                      <Counter />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        );
      }
    });
    return elements;
  }, [serviceAttributes, selectedService, attribute]);

  return (
    <div className="w-screen h-screen bg-[#000000cc] fixed z-[9999] flex items-end flex-col ">
      <div
        id="drawer-right-example"
        className={`h-screen relative p-4 overflow-y-auto bg-row_bg_two px-[15px] sm:px-[30px] 
            bg-gray-800  ease-in duration-700 ${
              showDrawer ? "w-[100%] xl:w-[50%] xxl:w-[37.3%]" : "w-0"
            }`}
        aria-labelledby="drawer-right-label"
      >
        <span
          className=" fixed top-[8px] right-[29px] z-[900] bg-[#ff0000] rounded-full
         w-7 h-7 flex justify-center items-center cursor-pointer"
          onClick={() => displayDrawer()}
        >
          <FontAwesomeIcon className="text-white w-4" icon={faXmark} />
        </span>
        {!step && (
          <>
            <div className="bg-white shadow-md mb-[20px]">
              <h4 className="text-[26px] bg-dark-blue text-center text-white font-semibold px-[25px] pt-[15px] pb-[15px] ">
                QUOTE FOR
              </h4>
              <div className="px-[25px] py-[20px] ">
                <ul className="mb-[20px]">
                  {selectedService.map((ele, index) => {
                    return (
                      <li className="mb-[9px]" key={index}>
                        <p className="text-left text-[19px] font-semibold">
                          <span className="pr-[25px] font-bold">&#187;</span>
                          {ele}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col text-center items-center ">
                  <span
                    className={`text-[40px] leading-7 text-lime font-semibold mb-[8px] ${styles.poppinsFamily}`}
                  >
                    £362
                  </span>
                  <span className="text-sm text-[#b4b4b4] mb-[16px]">
                    Price including VAT where
                    <br />
                    applicable
                  </span>
                  <div className="w-[156px] mb-[8px]">
                    <ButtonComponent
                      text="Order Now"
                      className="flex font-bold rounded  justify-center items-center text-sm bg-lime  border border-lime hover:bg-dark-blue hover:text-white px-[28px] py-[12px] ease-in duration-200"
                    />
                  </div>
                  <span className="text-sm text-[#182333] mb-[10px]">OR</span>
                  <span className="text-sm text-[#182333] border-b border-lime hover:border-dark-blue mb-[10px]">
                    start all over again
                  </span>
                </div>
                <div className=" bg-dark-blue flex rounded-lg py-[10px] pl-[45px] pr-[20px]">
                  <FontAwesomeIcon
                    className="text-lime w-4 mr-2"
                    icon={faTag}
                  />
                  <p className="text-white text-[15px] font-semibold">
                    Congratulations! £10 multi-service-order Discount has been
                    applied.
                  </p>
                </div>
              </div>
            </div>
            <RequestCallBack />
            <CardComponent
              className="bg-white shadow px-[20px] pt-[15px] pb-[20px] my-[25px]"
              paragraph="          Orders can be placed online 24/7 or over the phone during our working
          hours. We can also coordinate directly with your tenants, agent or
          vendor to organise inspection appointment(s). Our normal wait time is
          currently between 1 to 3 working days. If you want to discuss a
          quotation, need help placing new order or got any other question,
          please don’t hesitate to call us free at 0800 048 7474 or request a
          callback."
              heading="HOW IT WORKS?"
            />
          </>
        )}
        {step && (
          <>
            <div className="flex justify-between">
              <h3 className="text-[26px] font-semibold mt-2 mb-[15px] text-dark-blue">
                Get Instant <span className="text-lime"> Quote</span>
              </h3>
            </div>

            <div className="w-full bg-white shadow-md  px-[20px] py-[23px]">
              <div className="mb-[25px]">
                <h6 className="text-dark-blue block font-semibold text-[21px] mb-[14px]">
                  Select Your Property Type
                </h6>
                <label
                  className={`relative flex items-center border-2 py-[16px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px] ${
                     propertyType === "residential_property"
                       ? "bg-lime border-lime"
                       : "border-[#ececec] bg-white"
                   }
                   hover:bg-lime`}
                >
                  <FontAwesomeIcon
                    className="w-8 text-dark-blue absolute left-[14px]"
                    icon={faHouse}
                  />
                  Residential Property
                </label>

                <label
                  className={`relative flex items-center border-2 border-[#ececec] py-[16px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px] hover:bg-lime
                    cursor-pointer  ${
                      propertyType === "commerical_property"
                        ? "bg-lime border-lime"
                        : "border-[#ececec] bg-white"
                    }`}
                >
                  <FontAwesomeIcon
                    className="w-[26px] ,w-3 text-dark-blue  absolute left-[14px]"
                    icon={faBuilding}
                  />
                  Commercial Property
                </label>
              </div>
              <hr className="h-[2px] bg-[#ececec] mb-[25px]" />
              <div className="mb-[25px]">
                <h6 className="text-dark-blue block font-semibold text-[21px] mb-[14px]">
                  Choose Your Services
                </h6>
                {services}
                {!showMore && (
                  <p
                    className="text-sm text-dark-blue font-semibold hover:text-lime
                text-center"
                    onClick={() => setShowMore(true)}
                  >
                    + View all Residential Services
                  </p>
                )}
              </div>
              <hr className="h-[2px] bg-[#ececec] my-[25px]" />
              {serviceAttribute}
              <TextField
                lable="Property postcode"
                placeholder="Property postcode"
                name="postcode"
                handleChange={setPostcode}
              />
              <hr className="h-[2px] bg-[#ececec] my-[20px] " />
              <ButtonComponent
                text="Get Instant Quote"
                className="flex font-bold justify-center items-center text-[17px] bg-lime uppercase border border-lime hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm ease-in duration-200"
              >
                <span className="flex mt-1.5 ml-2 mb-1">
                  <FontAwesomeIcon className="w-3.5" icon={faChevronRight} />
                </span>
              </ButtonComponent>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DrawerComponent;
