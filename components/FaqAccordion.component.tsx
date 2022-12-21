import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const accordionData = [
  {
    title: "Who require an EPC?",
    description: [
      {
        para1:
          "As of the 21st May 2010, if you decide to place your property on themarket for sale or rent in the UK you will need to purchase an EPC.This includes both residential and commercial properties. SinceApril 2018 it is also a legal requirement for the EPC rating to be aminimium of an ‘E’ rating in order for that property to be let to atenant.",
      },
    ],
  },
  {
    title: "Who is responsible for obtaining an EPC?",
    description: [
      {
        para1:
          "When you are selling or renting your property, you, as the seller or landlord must provide the EPC. The certificate should be given to the prospective buyer or tenant prior to entering into a sale or lease agreement.",
      },
      {
        para2:
          "With a new build it is the responsibility of the person carrying out the work. They must provide the owner with the certificate and inform the Building Control Officer or Approved Inspector that this has been completed within the specified time.",
      },
      {
        para3:
          "The owner/ landlord will have to pay for this survey and we offer extremely competitive prices.",
      },
      {
        para4:
          "The survey is designed to be a non-invasive visual inspection and all information is to be gathered whilst on site. If there are any measures that cannot be seen i.e. cavity wall insulation, we will require the associated documentation to include this within our certificate.",
      },
    ],
  },
  {
    title: "Can I market or rent the property before I receive the EPC?",
    description: [
      {
        para1:
          "As long as you have already ordered and paid for an EPC then you are permitted to put your property on the market or advertise it for renting purposes. We will make sure you receive confirmation of your order immediately after booking the EPC.",
      },
    ],
  },
  {
    title: " Can An EPC Fail?",
    description: [
      {
        para1:
          "When an EPC has been completed the property will get a rating between A and G. If you are selling the property then you cannot get a fail.",
      },
      {
        para2:
          "Since April 2018 it has been a legal requirement for the EPC rating to be at least an E rating if you are renting the property to a tenant (unless you have a suitable exemption). For more information on this please call 0800 048 7474.",
      },
    ],
  },
  {
    title: "How do I order my EPC?",
    description: [
      {
        para1:
          "You can easily place your order for the EPC via this website by clicking here.",
      },
      {
        para2:
          "Should you have any questions or would rather place an order over the telephone you can call our team on 0800 048 7474. Our opening times are Monday – Friday 9am – 6pm and Saturday 10am to 2pm.",
      },
    ],
  },
];

function FaqAccordion() {
  const [active, setActive] = useState("1");
  const onChange = (key: string | string[]) => {
    console.log(key, "key");
    setActive(key);
  };

  return (
    <>
      {accordionData.map((item, index) => {
        return (
          <Collapse
            accordion
            activeKey={active}
            onChange={onChange}
            expandIconPosition={"end"}
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined
                  className={`text-xl`}
                  style={{ color: "#8d9297" }}
                />
              ) : (
                <PlusOutlined
                  className={`text-xl`}
                  style={{ color: "#8d9297" }}
                />
              )
            }
            className={`font-opensans mb-5 ${active === (index+1).toString() ? "border border-lime" : null}`}
            style={{ color: "#fff" }}
          >
            <Panel
              header={
                <span
                  className={`${
                    active === (index + 1).toString()
                      ? "text-white"
                      : "text-gray-500"
                  } hover:text-white text-[17px] leading-4`}
                >
                  {item.title}
                </span>
              }
              key={index + 1}
              className={`${
                active === (index + 1).toString() ? "bg-lime" : null
              } hover:bg-lime hover:text-white`}
            >
              {item.description.map((desc) => {
                return (
                  <>
                    <p className="footer-paragraph">{desc?.para1}</p>
                    <p className="footer-paragraph">{desc?.para2}</p>
                    <p className="footer-paragraph">{desc?.para3}</p>
                    <p className="footer-paragraph">{desc?.para4}</p>
                  </>
                );
              })}
            </Panel>
          </Collapse>
        );
      })}
    </>
  );
}

export default FaqAccordion;
