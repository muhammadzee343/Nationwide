import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
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
import RadioButton from "./radioButton.component";
import Counter from "./counter";
import AlertBox from "./alertBox.component";
import TextField from "./textFied.component";
import ButtonComponent from "./button.component";
import styles from "../styles/Home.module.css";
import RequestCallBack from "./requestCallBack.component";
import CardComponent from "./card.component";
import { OverlayContext, SidebarContext } from "../context/sidebarContext";
import { useForm } from "react-hook-form";
import Select from "./select.component";
import { useRouter } from "next/router";
import Home from "../public/Home.png";
import Builiding from "../public/Building.png";

import {
  postcodeValidator,
  postcodeValidatorExistsForCountry,
} from "postcode-validator";
import Image from "next/image";

const DrawerComponent = ({}: any) => {
  const attributeState = {
    property_type: "",
    property_age: "",
    property_price: "",
    bedrooms: "",
    other_rooms: 0,
    distribution_boards: 1,
    electrical_appliances: "",
    floors: "",
    gas_appliances: "",
    gas_fire: "",
    fire_back_boiler: "",
    property_postcode: "",
    property_area: "",
    supply_type: "",
    circuits: "",
  };
  const [showMore, setShowMore] = useState(false);
  const [Services, setServices] = useState<any[]>([]);
  const [filteredServices, setfilteredServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<string[]>([]);
  const [serviceAttributes, setServiceAttributes] = useState<string[]>([]);
  const [quote, setQuote] = useState<any>(0);
  const [ip, setIp] = useState("");
  const [step, setStep] = useState(true);
  const [formDirty, setFormDirty] = useState(false);
  const [attribute, setAttributes] = useState<any>(attributeState);
  const [validPostcode, setValidPostcode] = useState(true);
  const qouteRef = useRef(null);
  const requestACBRef = useRef(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const watchPropertyArea = watch("property_area", "");
  const {
    showDrawer,
    setShowDrawer,
    overlay,
    setOverlay,
    propertyType,
    setPropertyType,
  } = useContext<any>(SidebarContext);

  const { isLoading, setIsLoading } = useContext<any>(OverlayContext);
  useLayoutEffect(() => {
    fetchData(propertyType);
    getUserIp();
  }, []);

  useEffect(() => {
    getFilterServices(propertyType);
  }, [Services]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let temp = { ...attribute };
      if (name === "property_area") {
        setAttributes((attr) => {
          return { ...attr, property_area: value["property_area"] };
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watchPropertyArea]);

  //GET USERIP
  const getUserIp = async () => {
    const res = await fetch(`https://geolocation-db.com/json/`);
    if (res.ok) {
      const data = await res.json();
      setIp(data.IPv4);
    } else {
      setIp("");
    }
  };

  //FETCH SERVICES
  const fetchData = async (propertyType: any) => {
    const res = await fetch(
      `${process.env.BASE_URL_DEV}services/list_services`
    );
    const data = await res.json();
    setServices(data.services);
  };

  //SUBMIT FORM1 GET INTSANT QUOTE
  const getInstantQuote = async (data: any, e: any) => {
    const code = data.property_postcode.replace(/\s/g, "");
    if (checkFormValidity() && selectedService.length > 0) {
      if (postcodeValidator(code, "UK") || postcodeValidator(code, "US")) {
        setValidPostcode(true);
        setAttributes((attr) => {
          return { ...attr, ...data };
        });
        saveLogs(data);
        setStep(false);
        qouteRef.current.scrollTop = 0;
      } else {
        setValidPostcode(false);
      }
    }
  };

  //CHECK FORM VALIDITY
  const checkFormValidity = () => {
    let valid = [];
    for (let i = 0; i < serviceAttributes.length; i++) {
      if (
        attribute["gas_fire"] === false &&
        serviceAttributes[i] === "fire_back_boiler"
      ) {
        continue;
      }
      if (attribute[serviceAttributes[i]] === "") {
        valid.push(false);
      } else {
        valid.push(true);
      }
    }
    return !valid.includes(false);
  };

  // SAVE LOGS
  const saveLogs = async (data: any) => {
    const body = {
      quotation_log: {
        ...attribute,
        ...data,
        studio: attribute.bedrooms === "s",
        request_type: "front-end",
        ip_address: ip,
      },
      services: [...selectedServiceId],
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    setIsLoading(true);
    const response = await fetch(
      `${process.env.BASE_URL_DEV}quotation_logs`,
      requestOptions
    );
    if (response.ok) {
      let data = await response.json();
      setIsLoading(false);
      setQuote(data);
      reset((formValues) => ({
        ...formValues,
        property_area: "",
        property_postcode: "",
      }));
    } else {
      alert("Something Went wrong");
    }
  };

  //RESET ALL
  const ResetAll = () => {
    setServiceAttributes([]);
    setSelectedService([]);
    setSelectedServiceId([]);
    setAttributes(attributeState);
    setStep(true);
    setFormDirty(false);
  };

  //GET FILTERED SERVICE
  const getFilterServices = (properTypeParam: string) => {
    setPropertyType(properTypeParam);
    ResetAll();
    const filteredService = Services.filter(
      (data) => data.category === properTypeParam
    );
    setfilteredServices(filteredService);
  };

  //SELECT SERVICE
  const selectService = ({ name, id }: any) => {
    const temp = name;
    const condition = selectedService.findIndex((ele) => name === ele) === -1;
    let attributes: string[] = [...serviceAttributes];
    if (condition) {
      const selectedServicesData = [...selectedService, temp];
      const selectedServicesId: any = [...selectedServiceId, id];
      setAllAttributes(selectedServicesData);
      setSelectedService(selectedServicesData);
      setSelectedServiceId(selectedServicesId);
    } else {
      const index = selectedService.findIndex((ele) => name === ele);
      selectedService.splice(index, 1);
      selectedServiceId.splice(index, 1);
      setAllAttributes(selectedService);
      setSelectedService([...selectedService]);
    }
  };

  //SHOW/HIDE DRAWER
  const displayDrawer = () => {
    setShowDrawer(false);
    document.body.style.overflow = "unset";
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };
  //SET ATTRIBUTES
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
    if (selectedServicesData.length > 0) {
      setServiceAttributes(["property_type", ...attributes]);
    } else {
      setServiceAttributes([...attributes]);
    }
  };
  //ORDER NOW
  const orderNow = () => {
    router.push({
      pathname: "/order-now",
      query: {
        ser: selectedServiceId,
        keys: Object.keys(attribute),
        value: Object.values(attribute),
        property: propertyType,
      },
    });
    setShowDrawer(false);
    setOverlay(false);
    document.body.style.overflow = "unset";
  };

  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    const services = !showMore
      ? filteredServices.slice(0, 5)
      : filteredServices;

    for (let i = 0; i < services?.length; i++) {
      const service = services[i];
      elements.push(
        <div
          key={i}
          className=" w-full mb-[13px]"
          onClick={() => selectService(service)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${
              selectedService.includes(service.name)
                ? " border-lime bg-lime self-end "
                : "border-[#9b9b9b] "
            } text-[17px] py-[7px] font-semibold`}
          />
        </div>
      );
    }
    return elements;
  }, [
    propertyType,
    selectedService,
    filteredServices,
    Services,
    showMore,
    formDirty,
  ]);

  const serviceAttribute = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    serviceAttributes.forEach((key, index) => {
      const ele = { ...attributes[key] };
      if (ele?.attr === "property_type") {
        let options = [...ele.options];
        ele.options = options.filter((opt: any) => {
          return opt.serviceType === propertyType;
        });
      }
      if (ele && Object.keys(ele).length > 0) {
        elements.push(
          <>
            <div
              className=" w-full sm:px-5 md:px-0 xl:w-8/12 mt-8 mb-2"
              key={index}
            >
              <h3
                className={`text-[21px] font-semibold font-bold my-[20px] font-opensans ${
                  formDirty && attribute[ele.attr] === ""
                    ? "text-[#ff0000]"
                    : "text-dark-blue"
                }`}
              >
                {ele.headings}
              </h3>
            </div>
            <div className="w-full flex sm:px-5 md:px-0 ">
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-3 lg:justify-start">
                {ele?.options?.map((opt, index, options) => {
                  if (opt.type === "radio") {
                    return (
                      <div key={index} className="w-full">
                        <RadioButton
                          title={opt.title}
                          value={opt.value}
                          lable={ele.attr}
                          selectattribute={setAttributes}
                          pClass="text-[17px] font-semibold"
                          className={`${
                            attribute[ele.attr] === opt.value ||
                            (options.length - 1 === index &&
                              attribute[ele.attr] >= opt.value &&
                              typeof opt.value === "number")
                              ? "bg-lime"
                              : "border border-grey-500"
                          } border border-grey-500 w-6 h-6 sm:w-5 sm:h-5`}
                        />
                      </div>
                    );
                  } else if (opt.type !== "radio" && opt.type !== "select") {
                    return (
                      <div key={index} className="w-full flex">
                        <p className=" font-opensans text-base text-dark-blue font-semibold mr-3">
                          {opt.title}
                        </p>
                        <Counter
                          label={ele.attr}
                          minValue={ele.minValue}
                          setValue={setAttributes}
                          className="w-14"
                        />
                      </div>
                    );
                  }
                })}
                {ele.type === "select" && (
                  <div className="w-full">
                    <Select
                      label=""
                      className="text-sm leading-8 text-dark-blue font-semibold"
                      name="property_area"
                      register={register}
                      inputClass="border-[#DEDEDE] py-2 px-3"
                      required={false}
                      options={ele.options}
                    />
                  </div>
                )}
                {ele.exactNumber && attribute[ele.attr] >= ele.minValue && (
                  <div className="w-full flex justify-center items-center">
                    <p className="text-base text-dark-blue font-semibold mr-3 w-2/4">
                      {ele.exactNumber}
                    </p>
                    <div className="w-2/4 pl-[24px]">
                      <Counter
                        minValue={ele.minValue}
                        label={ele.attr}
                        setValue={setAttributes}
                        className={ele.className && ele.className}
                      />
                    </div>
                  </div>
                )}
                {ele.Alert && attribute[ele.attr] >= ele.minValue && (
                  <AlertBox
                    text={ele.Alert}
                    className={"text-[16px] font-normal"}
                  />
                )}
                {ele?.radioQuestion1 && attribute[ele.attr] > 1 && (
                  <div className="flex flex-col w-full">
                    <p className="text-lg my-3 text-dark-blue mr-3 w-full font-semibold">
                      {ele.radioQuestion1.question}
                    </p>
                    <div className="flex flex-wrap gap-9">
                      {ele.radioQuestion1.options.map((x, index: number) => {
                        return (
                          <RadioButton
                            key={index}
                            title={x.title}
                            value={x.value}
                            lable={ele.radioQuestion1.attr}
                            selectattribute={setAttributes}
                            className={`${
                              attribute[ele.radioQuestion1.attr] === x.value
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-6 h-6 sm:w-5 sm:h-5`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
                {ele?.radioQuestion2 && attribute[ele?.radioQuestion1.attr] && (
                  <div className="flex flex-col w-full">
                    <p className=" font-opensans text-lg text-dark-blue my-3 font-semibold  w-full">
                      {ele.radioQuestion2.question}
                    </p>
                    <div className="flex flex-wrap gap-9">
                      {ele.radioQuestion2.options.map((x, index: number) => {
                        return (
                          <RadioButton
                            key={index}
                            title={x.title}
                            value={x.value}
                            lable={ele.radioQuestion2.attr}
                            selectattribute={setAttributes}
                            className={`${
                              attribute[ele.radioQuestion2.attr] === x.value
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {ele.exactNumber2 && attribute[ele.attr] >= ele.minValue && (
                  <div className="w-full flex my-4 items-center">
                    <p className=" font-opensans text-base text-dark-blue font-semibold w-2/4">
                      {ele.exactNumber2}
                    </p>
                    <div className="w-2/4 pl-[24px]">
                      <Counter
                        setValue={setAttributes}
                        label="other_rooms"
                        minValue={0}
                        className="w-14"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <hr className="h-[2px] bg-[#ececec] my-[35px]" />
          </>
        );
      }
    });
    return elements;
  }, [serviceAttributes, selectedService, attribute, formDirty, propertyType]);

  const requestACBSucess = () => {
    requestACBRef.current.scrollIntoView({ blocK: "start" });
  };

  return (
    <div className="w-screen h-screen bg-[#000000cc] fixed z-[2999] flex items-end flex-col ">
      <div
        id="drawer-right-example"
        className={`h-screen relative p-4 overflow-y-auto bg-row_bg_two py-[10px] px-[15px] sm:px-[30px] 
            bg-gray-800  ease-in-out duration-1000 w-[100%] md:w-[700px] ${
              showDrawer ? "translate-x-[0%]" : "translate-x-[100%]"
            }`}
        aria-labelledby="drawer-right-label"
        ref={qouteRef}
      >
        <div
          className="sticky top-[8px] left-[29px] z-[900]
         w-full flex justify-end items-center cursor-pointer"
        >
          <span
            className="sticky top-[10px] left-[29px] z-[900] bg-[#ff0000] rounded-full
         w-7 h-7 flex justify-center items-center cursor-pointer"
            onClick={() => displayDrawer()}
          >
            <FontAwesomeIcon className="text-white w-4" icon={faXmark} />
          </span>
        </div>
        {!step && (
          <>
            <div className="bg-white shadow-md mb-[20px]" id="quote">
              <h4 className="text-[26px] bg-dark-blue text-center text-white font-semibold px-[25px] pt-[15px] pb-[15px] ">
                QUOTE FOR
              </h4>
              <div className="px-[25px] py-[20px] ">
                <ul className="mb-[20px]">
                  {selectedService.map((ele, index) => {
                    return (
                      <li className="mb-[9px] flex flex-row" key={index}>
                        <span className="pr-[20px] font-bold">&#187;</span>
                        <p className="text-left text-[19px] font-semibold">
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
                    £{quote.total_price}
                  </span>
                  <span className="text-sm text-[#b4b4b4] mb-[16px]">
                    Price including VAT where
                    <br />
                    applicable
                  </span>
                  <div className="w-[156px] mb-[8px]">
                    <ButtonComponent
                      text="Order Now"
                      className="flex font-bold rounded  justify-center items-center text-sm bg-lime  border border-lime
                       hover:bg-dark-blue hover:text-white px-[28px] py-[12px] ease-in duration-200"
                      onClick={orderNow}
                    />
                  </div>
                  <span className="text-sm text-[#182333] mb-[10px]">OR</span>
                  <span
                    className="text-sm text-[#182333] border-b border-lime hover:border-dark-blue mb-[10px]"
                    onClick={() => ResetAll()}
                  >
                    start all over again
                  </span>
                </div>
                {selectedService.length > 1 && quote.discount > 0 && (
                  <div className=" bg-dark-blue flex rounded-lg py-[10px] pl-[20px] pr-[10px]">
                    <FontAwesomeIcon
                      className="text-lime w-9 md:w-6 mr-2"
                      icon={faTag}
                    />
                    <p className="text-white text-[11px] md:text-[15px] font-semibold">
                      <span className="text-[14px] font-bold">
                        Congratulations!
                      </span>
                      <br /> £{quote.discount} multi-service-order Discount has been applied.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div ref={requestACBRef}>
              <RequestCallBack
                attributes={attribute}
                requestACBSucess={requestACBSucess}
                services={selectedServiceId}
                propertyType={propertyType}
              />
            </div>
            <CardComponent
              className="bg-white shadow px-[20px] pt-[15px] pb-[20px] my-[25px]"
              hClass="text-xl mb-[15px] text-black font-bold text-center"
              pClass="font-semibold text-justify text-base"
              paragraph="Orders can be placed online 24/7 or over the phone during our working
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
              <h3 className="text-[26px] font-semibold mb-[15px] text-lime font-opensans">
                Get Instant <span className="text-dark-blue"> Quote</span>
              </h3>
            </div>

            <div className="w-full bg-white shadow-md  px-[20px]  py-[90px] sm:py-[25px]">
              <div className="mb-[25px]">
                <h6 className="text-dark-blue block font-semibold text-[21px] mb-[19px]">
                  Select Your Property Type
                </h6>
                <label
                  className={`relative flex items-center border-2 py-[11px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px] ${
                     propertyType === "residential_property"
                       ? "bg-lime border-lime"
                       : "border-[#ececec] bg-white"
                   }
                   hover:bg-lime`}
                  onClick={() => getFilterServices("residential_property")}
                >
                  <Image src={Home} alt="home" className="h-8 w-8 mr-5" />
                  {/*<FontAwesomeIcon*/}
                  {/*  className="w-8 h-[35px] text-dark-blue absolute left-[14px] text-[35px]"*/}
                  {/*  icon={faHouse}*/}
                  {/*/>*/}
                  Residential Property
                </label>

                <label
                  className={`relative flex items-center border-2 border-[#ececec] py-[11px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px] hover:bg-lime
                    cursor-pointer  ${
                      propertyType === "commercial_property"
                        ? "bg-lime border-lime"
                        : "border-[#ececec] bg-white"
                    }`}
                  onClick={() => getFilterServices("commercial_property")}
                >
                  <Image src={Builiding} alt="home" className="h-8 w-8 mr-5" />
                  {/*<FontAwesomeIcon*/}
                  {/*    className="w-8 h-[35px] text-dark-blue absolute left-[14px] text-[35px]"*/}
                  {/*  icon={faBuilding}*/}
                  {/*/>*/}
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
              <form onSubmit={handleSubmit(getInstantQuote)}>
                {serviceAttribute}
                <TextField
                  lable="Property postcode"
                  placeholder="Property postcode"
                  name="property_postcode"
                  required={true}
                  errors={errors}
                  register={register}
                  className="text-xl text-dark-blue font-semibold my-3 font-opensans"
                  inputClass="border-grey-500 py-2.5 px-3 mt-3"
                  errorClass="text-[#ff0000] text-sm font-semibold"
                />
                {!validPostcode && (
                  <p className="text-[#ff0000] text-sm font-semibold">
                    Enter a Valid Code
                  </p>
                )}
                <hr className="h-[2px] bg-[#ececec] my-[20px] " />
                {formDirty && (
                  <h3 className="text-[21px] font-semibold font-bold my-[20px] text-[#ff0000]">
                    {!selectedService.length >= 1 && "Please select a service."}
                  </h3>
                )}
                {formDirty && (
                  <h3 className="text-[21px] font-semibold font-bold my-[20px] text-[#ff0000]">
                    {selectedService.length > 0 &&
                      !serviceAttributes.every((data) => {
                        return attribute[data] !== "";
                      }) &&
                      "Please fill highlighted sections."}
                  </h3>
                )}
                <ButtonComponent
                  text="Get Instant Quote"
                  className="flex font-bold justify-center items-center text-[17px] bg-lime uppercase
                   border border-lime hover:bg-dark-blue hover:text-white px-[28px] py-[12px] text-sm
                    ease-in duration-200"
                >
                  <span className="flex mt-1.5 ml-2 mb-1">
                    <FontAwesomeIcon className="w-3.5" icon={faChevronRight} />
                  </span>
                </ButtonComponent>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DrawerComponent;
