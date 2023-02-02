import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import PropertyTypeCardComponent from "../components/propertyTypeCard.component";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../components/button.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import Counter from "../components/counter";
import RadioButton from "../components/radioButton.component";
import { attributes } from "../utility/orderNowConstants";
import TextField from "../components/textFied.component";
import AlertBox from "../components/alertBox.component";
import { useForm } from "react-hook-form";
import Select from "../components/select.component";
import { useRouter } from "next/router";
import Head from "next/head";
import { UuidContext } from "../context/sidebarContext";

function OrderNow({ commercialProperties, residentialProperties }: any) {
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
    post_code: "",
    property_area: "",
    supply_type: "",
    circuits: "",
  };

  const { uuid } = useContext(UuidContext);

  const { register, handleSubmit, setValue, watch } = useForm();

  const postcode = watch("property_postcode", "");
  const propertyAddress = watch("property_address");

  const [propertyType, setPropertyType] = useState<string>("");

  const [ispropertySelected, setIsPropertySelected] = useState<boolean>(true);

  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [serviceAttributes, setServiceAttributes] = useState<string[]>([]);

  const [selectedServiceId, setSelectedServiceId] = useState<any[]>([]);

  const [attribute, setAttributes] = useState<any>(attributeState);

  const [addresses, setAddresseses] = useState([]);

  const [formDirty, setFormDirty] = useState(false);

  const servicesSection = useRef<HTMLInputElement | any>();

  const attributeSection = useRef<HTMLInputElement | any>();

  const router = useRouter();

  const { bundle, ser, value, keys, property, postCode, item, address } =
    router.query;

  useEffect(() => {
    addOtherService();
    if (bundle) {
      selectBundle();
    }
    populateForms();
  }, []);

  const scrollIntoViewClick = () => {
    servicesSection.current?.scrollIntoView(true, {
      behavior: "smooth",
      block: "start",
    });
  };

  const selectBundle = () => {
    if (bundle) {
      switch (bundle) {
        case "10":
          setPropertyType("residential_property");
          setSelectedService([
            "Electrical Installation Condition Report (EICR)",
            "Electrical Portable Appliance Test (PAT)",
          ]);
          setSelectedServiceId([9, 10]);
          setAllAttributes([
            "Electrical Installation Condition Report (EICR)",
            "Electrical Portable Appliance Test (PAT)",
          ]);
          break;
        case "20":
          setPropertyType("residential_property");
          setSelectedServiceId([9, 1]);
          setSelectedService([
            "Electrical Installation Condition Report (EICR)",
            "Energy Performance Certificate",
          ]);
          setAllAttributes([
            "Electrical Installation Condition Report (EICR)",
            "Energy Performance Certificate",
          ]);
          break;
        case "30":
          setPropertyType("residential_property");
          setSelectedServiceId([9, 10, 7]);
          setSelectedService([
            "Electrical Installation Condition Report (EICR)",
            "Electrical Portable Appliance Test (PAT)",
            "Gas Safety Certificate",
          ]);
          setAllAttributes([
            "Electrical Installation Condition Report (EICR)",
            "Electrical Portable Appliance Test (PAT)",
            "Gas Safety Certificate",
          ]);
          break;
        case "40":
          setPropertyType("residential_property");
          setSelectedServiceId([9, 1, 7]);
          setSelectedService([
            "Electrical Installation Condition Report (EICR)",
            "Energy Performance Certificate",
            "Gas Safety Certificate",
          ]);
          setAllAttributes([
            "Electrical Installation Condition Report (EICR)",
            "Energy Performance Certificate",
            "Gas Safety Certificate",
          ]);
          break;
        default:
          setPropertyType("");
          setSelectedService([]);
          setAllAttributes([]);
          setSelectedServiceId([]);
      }
    }
  };

  const populateForms = () => {
    if (ser && value && keys) {
      let obj = Object.fromEntries(keys?.map((k, i) => [k, value[i]]));
      setPropertyType(property);
      if (obj) {
        const services =
          property === "residential_property"
            ? residentialProperties
            : commercialProperties;
        let temp = typeof ser !== "string" ? ser?.map((ele) => +ele) : [+ser];
        let selectedService = services
          .filter((ele, index) => {
            return temp.includes(ele.id);
          })
          .map((ele) => ele.name);

        setAttributes(obj);
        setSelectedServiceId(temp);
        setAllAttributes(selectedService);
        setSelectedService(selectedService);
        setValue("property_area", obj.property_area);
        setValue("property_postcode", obj.property_postcode);
      }
    }
  };

  const orderNow = async () => {
    setFormDirty(true);
    const body = {
      order: {
        service_category: propertyType,
        session_id: uuid,
        property_postcode: postcode,
        property_address: propertyAddress,
        contact_type: "",
        contact_name: "",
        contact_number: "",
        contact_email: "",
        customer_note: "",
      },
      order_product: {
        ...attribute,
        number_bedrooms_manual: attribute.bedrooms >= 5 ? true : false,
        no_of_gas_appliances_manual:
          attribute.gas_appliances >= 4 ? true : false,
        no_of_distribution_boards_manual: true,
        no_of_electric_appliances_manual:
          attribute.electrical_appliances >= 30 ? true : false,
        no_of_floors_manual: attribute.floors >= 4 ? true : false,
        no_of_bathrooms_manual: true,
        no_of_circuits_manual: attribute.circuits >= 31 ? true : false,
        property_price_manual:
          attribute.property_price >= 1000001 ? true : false,
      },
      services: [...selectedServiceId],
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL_DEV}orders`,
        requestOptions
      );
      if (!response.ok) {
        switch (response.status) {
        }
      } else {
        const data = await response.json();
        router.push({ pathname: "/checkout" });
      }
    } catch (err) {}
  };

  const changePropertyType = (property_type: string) => {
    setPropertyType(property_type);
    scrollIntoViewClick();
    setSelectedService([]);
    setSelectedServiceId([]);
    setAttributes(attributeState);
  };

  const getPropertyAddress = async () => {
    if (!propertyAddress) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ postcode: postcode }),
      };
      try {
        const response = await fetch(
          `${process.env.BASE_URL_DEV}postcodes/find_address`,
          requestOptions
        );
        if (!response.ok) {
          setAddresseses([]);
          switch (response.status) {
            case 422:
              alert("Please Enter a valid Postcode");
          }
        } else {
          const data = await response.json();
          const addresses = [...data.addresses];
          setAddresseses([...addresses]);
        }
      } catch (err) {}
    }
  };

  const setPropertyAddress = (address: string) => {
    setValue("property_address", address);
    setAddresseses([]);
  };

  const setAllAttributes = (selectedServicesData: string[]) => {
    let attributes = new Set();

    const services =
      propertyType === "commercial_property"
        ? commercialProperties
        : residentialProperties;
    const addAttributes = services.forEach((data) => {
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

  const selectService = ({ name, id }: any) => {
    const temp = name;
    const services =
      propertyType === "residential_property"
        ? residentialProperties
        : commercialProperties;
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
      const idIndex = selectedServiceId.findIndex((ele) => +id === +ele);
      selectedService.splice(index, 1);
      selectedServiceId.splice(idIndex, 1);
      setAllAttributes(selectedService);
      setSelectedService([...selectedService]);
      setSelectedServiceId([...selectedServiceId]);
    }
  };

  const addOtherService = () => {
    console.log(property, postCode, ser);
    if (address) {
      setPropertyType(property);
      let temp  = [ ];
      if (Array.isArray(ser)){
        temp = ser.map((ele) => +ele);
      }else{
        const arr = [ser];
        temp = arr.map((ele) => +ele);
      }

      const services =
        property === "residential_property"
          ? residentialProperties
          : commercialProperties;
      let selectedService = services
        .filter((ele, index) => {
          return temp.includes(ele.id);
        })
        .map((ele) => ele.name);
      setSelectedServiceId(temp);
      setAllAttributes(selectedService);
      setSelectedService(selectedService);
      setValue("property_address", address);
      setValue("property_postcode", postCode);
    }
  };

  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];
    const services =
      propertyType === "residential_property"
        ? residentialProperties
        : commercialProperties;

    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      elements.push(
        <div
          key={i}
          className="w-full md:w-[47.5%] xxl:w-[48%]"
          onClick={() => selectService(service)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${
              selectedServiceId.includes(service.id) ? "bg-lime self-end " : ""
            } text-[15px] py-[11px] border-lime`}
          />
        </div>
      );
    }

    return elements;
  }, [propertyType, selectedService, selectedServiceId]);

  const serviceAttribute = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];

    serviceAttributes.forEach((key, index) => {
      const ele = { ...attributes[key] };

      if (ele?.attr === "property_type") {
        let options = [...ele?.options];
        ele.options = options?.filter((opt: any) => {
          return opt.serviceType === propertyType;
        });
      }
      if (ele && Object.keys(ele).length !== 0) {
        elements.push(
          <>
            <div
              className=" w-full sm:px-5 md:px-0 xl:w-8/12 xxl:w-9/12 mt-8 mb-2"
              key={index}
            >
              <h3
                className={`text-[21px] font-semibold font-bold my-[20px] ${
                  formDirty && attribute[ele.attr] === ""
                    ? "text-[#ff0000]"
                    : "text-dark-blue"
                }`}
              >
                {ele.headings}
              </h3>
            </div>
            <div className="w-full flex sm:px-5 md:px-0 xl:w-8/12 xxl:w-9/12">
              <div className="w-full  flex flex-col md:flex-row flex-wrap gap-6 lg:justify-start">
                {ele.options?.map((opt, index, options) => {
                  if (opt.type === "radio") {
                    return (
                      <>
                        <div key={index} className="w-full md:w-5/12">
                          <RadioButton
                            title={opt.title}
                            value={opt.value}
                            lable={ele.attr}
                            selectattribute={setAttributes}
                            className={`${
                              attribute[ele.attr] == opt.value ||
                              (options.length - 1 === index &&
                                attribute[ele.attr] >= opt.value &&
                                typeof opt.value === "number")
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                            pClass="text-[18px] font-semibold"
                          />
                        </div>
                      </>
                    );
                  } else if (opt.type !== "radio" && opt.type !== "select") {
                    return (
                      <div key={index} className="w-full  flex">
                        <p className=" text-lg text-dark-blue font-semibold mr-3">
                          {opt.title}
                        </p>
                        <Counter
                          label={ele.attr}
                          minValue={ele.minValue}
                          setValue={setAttributes}
                          preValue={+attribute[ele.attr]}
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
                  <div className="w-full flex">
                    <p className=" text-lg text-dark-blue font-semibold mr-3 w-5/12">
                      {ele.exactNumber}
                    </p>
                    <div className="w-5/12">
                      <Counter
                        minValue={ele.minValue}
                        label={ele.attr}
                        setValue={setAttributes}
                        preValue={+attribute[ele.attr]}
                        className={ele.className && ele.className}
                      />
                    </div>
                  </div>
                )}
                {ele.Alert && attribute[ele.attr] >= ele.minValue && (
                  <AlertBox text={ele.Alert} className="text-[17px]" />
                )}
                {ele?.radioQuestion1 && (
                  <div className="flex flex-col w-full">
                    <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 w-5/12">
                      {ele.radioQuestion1.question}
                    </p>
                    <div className="flex flex-wrap gap-9">
                      {ele.radioQuestion1.options.map((x, index: number) => {
                        return (
                          <>
                            <RadioButton
                              key={index}
                              title={x.title}
                              value={x.value}
                              lable={ele.radioQuestion1.attr}
                              selectattribute={setAttributes}
                              className={`${
                                eval(attribute[ele.radioQuestion1.attr]) ==
                                x.value
                                  ? "bg-lime"
                                  : "border border-grey-500"
                              } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                )}
                {ele?.radioQuestion2 && attribute[ele?.radioQuestion1.attr] && (
                  <div className="flex flex-col w-full">
                    <p className=" text-lg text-dark-blue my-3 font-semibold mr-3 w-5/12">
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
                              eval(attribute[ele.radioQuestion2.attr]) ==
                              x.value
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-4 h-4 sm:w-5 sm:h-5`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
                {ele.exactNumber2 && +attribute[ele.attr] >= ele.minValue && (
                  <div className="w-full flex my-4">
                    <p className=" text-lg text-dark-blue font-semibold mr-3 ">
                      {ele.exactNumber2}
                    </p>
                    <div className="w-5/12">
                      <Counter
                        setValue={setAttributes}
                        label="other_rooms"
                        minValue={0}
                        preValue={+attribute[ele.attr]}
                        className="w-14"
                      />
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
  }, [propertyType, serviceAttributes, selectedService, attribute, formDirty]);

  return (
    <>
      <div className="flex justify-center" onClick={() => setAddresseses([])}>
        <Head>
          <title>Order Now - Nationwide Surveyors</title>
        </Head>
        <div
          className="w-full  md:min-w-[750px] md:max-w-[750px] lg:min-w-[970px] lg:max-w-[970px]
        xl:min-w-[1155px] xl:max-w-[1155px]"
        >
          <section>
            <div className="flex flex-col justify-center items-center">
              <div className="w-full px-5 md:px-0 md:w-8/12 xxl:w-9/12">
                <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                  Select your property type
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="md:container flex flex-col px-5 lg:px-0 justify-center ">
                  {!ispropertySelected && !propertyType && (
                    <p className="mb-3">Please select a category.</p>
                  )}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <PropertyTypeCardComponent
                      changePropertyType={changePropertyType}
                      propertyType={propertyType}
                      title="Residential Property"
                      value="residential_property"
                      description="Select this option if your property is a home."
                      icon={faHouse}
                    />
                    <PropertyTypeCardComponent
                      changePropertyType={changePropertyType}
                      propertyType={propertyType}
                      title="Commercial Property"
                      value="commercial_property"
                      description="Select this option if the property is a commercial premises.
                    Example: An office, retail or restaurant."
                      icon={faBuilding}
                    />
                  </div>
                </div>
              </div>
              <hr className=" h-[2px] mt-9  w-10/12 md:w-8/12 bg-[#dfdfdf]" />
              {!propertyType && (
                <NextBottom setpropType={setIsPropertySelected} />
              )}
            </div>
          </section>

          {propertyType && (
            <section className="animate-fade-in-up" ref={servicesSection}>
              <div className="flex flex-col justify-center items-center px-5">
                <div className=" w-full  sm:px-5 md:px-0  md:w-8/12 xxl:w-9/12 my-[20px]">
                  <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold ">
                    Choose Your Services
                  </h3>
                </div>
                <div className="w-full md:w-8/12 xxl:w-9/12 flex justify-center sm:px-5  md:px-0">
                  <div className=" w-full  flex flex-col md:flex-row flex-wrap justify-start gap-6  xxl:gap-x-8 xxl:gap-y-6">
                    {services}
                  </div>
                </div>
                <hr className=" h-[2px] mt-8  w-10/12 md:w-8/12 bg-[#dfdfdf]" />
                {selectedServiceId.length <= 0 && (
                  <NextBottom setpropType={() => {}} />
                )}
              </div>
            </section>
          )}

          {selectedService.length > 0 && (
            <section className="animate-fade-in-up" ref={attributeSection}>
              <div className="flex flex-col justify-center items-center px-5">
                {serviceAttribute}
                <div className="w-full sm:px-5 md:px-0  xl:w-8/12 xxl:w-9/12 mt-8 mb-2">
                  <h3 className="text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                    Property Information
                  </h3>
                  <div className="flex flex-col sm:flex-row w-full">
                    <div className="sm:w-6/12 flex flex-col px-1 lg:px-0">
                      <div className=" w-full flex gap-1 sm:gap-2">
                        <div className="w-full sm:w-7/12 flex flex-col justify-center">
                          <div>
                            <TextField
                              lable="Property Postcode"
                              register={register}
                              name="property_postcode"
                              className="text-lg text-dark-blue font-semibold"
                              inputClass="border-grey-500 py-2.5 px-3"
                              placeholder="Enter full postcode here"
                            />
                          </div>
                        </div>
                        <div className=" w-full sm:w-4/12 flex items-end">
                          <ButtonComponent
                            text="Find Address"
                            className="bg-[#252525] text-white text-[11px] sm:text-[12px] font-semibold px-[2px]
                             sm:px-[20px] py-[13px] hover:bg-lime hover:text-white ease-in duration-200"
                            onClick={getPropertyAddress}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:w-6/12 w-full flex flex-col justify-center">
                      <div className="w-full relative">
                        <label className="text-lg text-dark-blue font-semibold">
                          Property Address
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full address here"
                          name="property_address"
                          required={true}
                          className={`border w-full  focus:border-lime  outline-none focus:ring-transparent
                           shadow-sm border-grey-500 py-2.5 px-3`}
                          {...register("property_address", { required: true })}
                        />
                        {addresses.length > 0 && (
                          <div className="w-[97%] max-h-[300px] overflow-y-auto border border-lime absolute bg-white ">
                            {addresses.map((ele, index) => {
                              return (
                                <div
                                  key={index}
                                  className="border-b border-b-grey-500 px-[20px] py-[5px] text-[15px] font-normal text-dark-blue"
                                  onClick={() =>
                                    setPropertyAddress(ele.address)
                                  }
                                >
                                  {ele.address}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className=" h-[2px] mt-8  w-10/12 md:w-8/12 bg-[#dfdfdf]" />
                <NextBottom setpropType={orderNow} />
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BASE_URL_DEV}/services/list_services`);
  const data = await res.json();
  const commercialProperties = data.services.filter(
    (data) => data.category === "commercial_property"
  );
  const residentialProperties = data.services.filter(
    (data) => data.category === "residential_property"
  );

  return {
    props: {
      commercialProperties,
      residentialProperties,
    },
  };
};

export default OrderNow;

function NextBottom({ setpropType }: any) {
  return (
    <div
      className="w-8/12 flex justify-center py-6"
      onClick={() =>
        setpropType((prevValue) => {
          return !prevValue;
        })
      }
    >
      <div className="inline-block w-[180px]">
        <ButtonComponent
          text="Next"
          className="bg-dark-blue uppercase text-white font-semibold px-[20px] py-[13px] hover:bg-lime
            ease-in duration-200"
        />
      </div>
    </div>
  );
}
