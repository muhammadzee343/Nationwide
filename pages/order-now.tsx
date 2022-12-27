import React, { useEffect, useMemo, useRef, useState } from "react";
import PropertyTypeCardComponent from "../components/propertyTypeCard.component";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../components/button.component";
import ServiceSelectionCard from "../components/serviceSelectionCard.component";
import Counter from "../components/counter";
import RadioButton from "../components/RadioButton.component";
import { attributes } from "../utility/orderNowConstants";
import TextField from "../components/TextFied.component";
import AlertBox from "../components/alertBox.component";

function OrderNow({ commercialProperties, residentialProperties }: any) {
  const [propertyType, setPropertyType] = useState<string>("");

  const [ispropertySelected, setIsPropertySelected] = useState<boolean>(true);

  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [serviceAttributes, setServiceAttributes] = useState<string[]>([]);

  const servicesSection = useRef<HTMLInputElement | any>();

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
  useEffect(() => {
    // scrollIntoViewClick();
  }, [propertyType]);

  const scrollIntoViewClick = () => {
    servicesSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const setAllAttributes = (selectedServicesData: string[]) => {
    let attributes = new Set();

    const services =
      propertyType === "Residential Property"
        ? residentialProperties
        : commercialProperties;
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
    setServiceAttributes([...attributes]);
  };

  const selectService = (title: string) => {
    const temp = title;
    const services =
      propertyType === "Residential Property"
        ? residentialProperties
        : commercialProperties;
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

  const services = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = [];

    const services =
      propertyType === "Residential Property"
        ? residentialProperties
        : commercialProperties;

    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      elements.push(
        <div
          key={i}
          className=" w-full md:w-5/12"
          onClick={() => selectService(service.name)}
        >
          <ServiceSelectionCard
            title={service.name}
            className={`${
              selectedService.includes(service.name) ? "bg-lime self-end " : ""
            } text-[15px] py-[11px] border-lime`}
          />
        </div>
      );
    }

    return elements;
  }, [propertyType, selectedService]);

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
            <div className="w-full flex sm:px-5 md:px-0 md:justify-center">
              <div className="w-full md:w-8/12 flex flex-col md:flex-row flex-wrap gap-6 lg:justify-start">
                {ele.options.map((attr, index) => {
                  if (attr.type === "radio") {
                    return (
                      <>
                        <div key={index} className="w-full md:w-5/12">
                          <RadioButton
                            title={attr.title}
                            value={attr.value}
                            lable={ele.attr}
                            selectattribute={setAttributes}
                            className={`${
                              attribute[ele.attr] === attr.value
                                ? "bg-lime"
                                : "border border-grey-500"
                            } border border-grey-500 w-6 h-6 sm:w-7 sm:h-7`}
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
                  <AlertBox text={ele.Alert} className="text-[17px]" />
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
                              } border border-grey-500 w-6 h-6 sm:w-7 sm:h-7`}
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
    <>
      <div className="flex justify-center">
        <div className="w-full xl:container">
          <section>
            <div className="flex flex-col justify-center items-center">
              <div className="w-full px-5 md:px-0 md:w-8/12 ">
                <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                  Select your property type
                </h3>
              </div>
              <div className="flex justify-center ">
                <div className="md:container flex flex-col px-5 lg:px-0  justify-center ">
                  {!ispropertySelected && !propertyType && (
                    <p className="mb-3">Please select a category.</p>
                  )}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <PropertyTypeCardComponent
                      changePropertyType={setPropertyType}
                      title="Residential Property"
                      description="Select this option if your property is a home."
                      icon={faHouse}
                    />
                    <PropertyTypeCardComponent
                      changePropertyType={setPropertyType}
                      title="Commercial Property"
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
                <div className=" w-full  sm: px-5 md:px-0  md:w-8/12 ">
                  <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                    Select Your Service
                  </h3>
                </div>
                <div className="w-full flex justify-center sm:px-5  md:px-0">
                  <div className=" w-full md:w-12/12 lg:w-10/12 xl:w-10/12 xxl:w-8/12  flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    {services}
                  </div>
                </div>
                <hr className=" h-[2px] mt-8  w-10/12 md:w-8/12 bg-[#dfdfdf]" />
                <NextBottom setpropType={setIsPropertySelected} />
              </div>
            </section>
          )}

          {selectedService.length > 0 && (
            <section className="animate-fade-in-up" ref={servicesSection}>
              <div className="flex flex-col justify-center items-center px-5">
                {serviceAttribute}
                <div className="w-full sm:px-5 md:px-0 xl:w-8/12 mt-8 mb-2">
                  <h3 className="text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">
                    Property Information
                  </h3>
                  <div className="flex flex-col sm:flex-row w-full">
                    <div className="sm:w-6/12 flex flex-col px-1 lg:px-0">
                      <div className=" w-full flex gap-1 sm:gap-2">
                        <div className="w-full sm:w-7/12 flex flex-col justify-center">
                          <div>
                            <TextField
                              handleChange={() => {}}
                              lable="Property Postcode"
                              name="postcode"
                              placeholder="Enter full postcode here"
                            />
                          </div>
                        </div>
                        <div className=" w-full sm:w-4/12 flex items-end">
                          <ButtonComponent
                            text="Find Address"
                            className="bg-[#252525] text-white text-[11px] sm:text-[12px] font-semibold px-[2px] sm:px-[20px] py-[13px] hover:bg-lime hover:text-white ease-in duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:w-6/12 w-full flex flex-col justify-center">
                      <TextField
                        handleChange={() => {}}
                        lable="Property Address"
                        name="address"
                        placeholder="Enter full address here"
                      />
                    </div>
                  </div>
                </div>
                {/*<div className=" w-full sm:px-5 md:px-0 xl:w-8/12 mt-8 mb-2">*/}
                {/*  <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">*/}
                {/*    Contact for Access:*/}
                {/*  </h3>*/}
                {/*</div>*/}
                {/*<div className="w-full flex sm:px-5 md:px-0 md:justify-center">*/}
                {/*  <div className="w-full md:w-8/12 flex flex-col md:flex-row flex-wrap gap-6 lg:justify-start">*/}
                {/*    {contactOptions.map((attr, index) => {*/}
                {/*      return (*/}
                {/*        <>*/}
                {/*          <div key={index} className="w-full md:w-5/12">*/}
                {/*            <RadioButton*/}
                {/*              title={attr.title}*/}
                {/*              className={`border border-grey-500 bg-lime`}*/}
                {/*            />*/}
                {/*          </div>*/}
                {/*        </>*/}
                {/*      );*/}
                {/*    })}*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className=" w-full sm:px-5 md:px-0 xl:w-8/12 mt-8 mb-2">*/}
                {/*  <h3 className=" text-2xl md:text-3xl text-dark-blue font-bold my-[30px]">*/}
                {/*    Contact for Access:*/}
                {/*  </h3>*/}
                {/*</div>*/}
                {/*<div className="w-full flex sm:px-5 md:px-0 md:justify-center">*/}
                {/*  <div className="w-full md:w-8/12 flex flex-col md:flex-row flex-wrap gap-6 lg:justify-start">*/}
                {/*    <TextField*/}
                {/*      handleChange={() => {}}*/}
                {/*      lable="Other Name"*/}
                {/*      name="name"*/}
                {/*      placeholder="Example: Martin Roberts"*/}
                {/*    />*/}
                {/*    <TextField*/}
                {/*      handleChange={() => {}}*/}
                {/*      lable="Tenant Contact Number"*/}
                {/*      name="Contact Number"*/}
                {/*      placeholder="e.g. 01632 960069"*/}
                {/*    />*/}
                {/*    <TextField*/}
                {/*      handleChange={() => {}}*/}
                {/*      lable="Other Email"*/}
                {/*      name="otherEmail"*/}
                {/*      placeholder="e.g. martin.roberts@gmail.com"*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*</div>*/}
                <hr className=" h-[2px] mt-8  w-10/12 md:w-8/12 bg-[#dfdfdf]" />
                <NextBottom setpropType={setIsPropertySelected} />
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

OrderNow.getInitialProps = async () => {
  const res = await fetch("http://192.168.10.38:8000/services/list_services");
  const data = await res.json();
  const commercialProperties = data.services.filter(
    (data) => data.category === "commercial_property"
  );
  const residentialProperties = data.services.filter(
    (data) => data.category === "residential_property"
  );

  return {
    commercialProperties,
    residentialProperties,
  };
};

export default OrderNow;

function NextBottom(props: any) {
  return (
    <div
      className="w-8/12 flex justify-center py-6"
      onClick={() => props.setpropType(false)}
    >
      <div className="inline-block w-[180px]">
        <ButtonComponent
          text="Next"
          className="bg-dark-blue uppercase text-white font-semibold px-[20px] py-[13px] hover:bg-lime  ease-in duration-200"
        />
      </div>
    </div>
  );
}
