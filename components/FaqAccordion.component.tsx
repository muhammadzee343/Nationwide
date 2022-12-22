import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { accordionData, service } from "../utility/constants";
const { Panel } = Collapse;
import styles from "../styles/service.module.css";
function FaqAccordion() {
  const [active, setActive] = useState<string | string[]>("1");
  const onChange = (key: string | string[]) => {
    setActive(key);
  };

  return (
    <>
      {accordionData.map((item, index) => {
        return (
          <Collapse
            key={index}
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
            className={`font-opensans mb-5 ${
              active === (index + 1).toString() ? "border border-lime" : null
            } `}
            style={{ color: "#fff" }}
          >
            <Panel
              header={
                <span
                  className={`${
                    active === (index + 1).toString()
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }  text-[17px] leading-4`}
                >
                  {item.title}
                </span>
              }
              key={index + 1}
              className={`hover:bg-lime  ${styles.parent} ${
                active === (index + 1).toString() ? "bg-lime" : null
              }`}
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
