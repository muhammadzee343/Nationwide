import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

function FaqAccordion({ accordionData = [] }: any) {
  const [active, setActive] = useState("1");
  const onChange = (key: string | string[]) => {
    setActive(key);
  };

  return (
    <>
      {accordionData?.map((item: any, index: any) => {
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
                  className="text-xl"
                  style={{ color: "#8d9297" }}
                />
              ) : (
                <PlusOutlined
                  className="text-xl"
                  style={{ color: "#8d9297" }}
                />
              )
            }
            className="font-opensans mb-5"
            style={{ color: "#fff" }}
          >
            <Panel
              header={
                <span
                  className={`${
                    active === (index + 1).toString()
                      ? "text-white"
                      : "text-gray-400"
                  } hover:text-white text-[17px] leading-4 font-semibold`}
                >
                  {item?.title}
                </span>
              }
              key={index + 1}
              className={` ${
                active === (index + 1).toString() ? "bg-lime border border-lime" : null
              } hover:bg-lime bg-white`}
            >
              {item?.description.map((desc: any) => {
                return (
                  <>
                    <p className={styles.footerParagraph}>{desc?.para1}</p>
                    <p className={styles.footerParagraph}>{desc?.para2}</p>
                    <p className={styles.footerParagraph}>{desc?.para3}</p>
                    <p className={styles.footerParagraph}>{desc?.para4}</p>
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
