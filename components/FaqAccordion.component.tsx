import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import serviceStyle from "../styles/service.module.css";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

function FaqAccordion({
  accordionData = [],
  iconMinusColor = "",
  iconPlusColor = "",
  headerBackground = "",
  activeHeadBackgorund = "",
  hoverHeadBackground = "",
  headerTitleColor = "",
  defaultActiveaccordion = "",
  navigateFromFAQ,
}: any) {
  const [active, setActive] = useState(defaultActiveaccordion);
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
                  style={{
                    color: `${iconMinusColor}`,
                  }}
                />
              ) : (
                <PlusOutlined
                  className="text-xl"
                  style={{ color: `${iconPlusColor}` }}
                />
              )
            }
            className="font-opensans mb-5 w-full font-medium"
            style={{ color: "#fff" }}
          >
            <Panel
              header={
                <span
                  className={`${
                    active === (index + 1).toString()
                      ? "text-white"
                      : `${headerTitleColor}`
                  } text-[17px] leading-4 font-lg`}
                >
                  {item?.title}
                </span>
              }
              key={index + 1}
              className={`${
                active === (index + 1).toString()
                  ? `${activeHeadBackgorund}`
                  : "border border-gray-300"
              } hover:${hoverHeadBackground} ${headerBackground} ${
                navigateFromFAQ ? serviceStyle.parent : null
              } `}
            >
              <div
                className={`${
                  active === (index + 1).toString()
                    ? "border-t-0 border-l border-r border-b border-lime shadow-md"
                    : null
                } p-5`}
              >
                <h1 className="font-semibold text-base">{item.head1}</h1>
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
                <h1 className="font-semibold text-base">{item.head2}</h1>
                <br />
                {item?.requirementList?.map((desc: any) => {
                  return (
                    <div className="flex flex-row">
                      {desc.iconName}
                      <li className="ml-2 leading-7 pb-3" key={index}>
                        {desc.listPoint}
                      </li>
                    </div>
                  );
                })}
                <br />
                <p className="text-[15px] font-semibold">
                  {item.sendCdInsctruction}
                </p>
              </div>
            </Panel>
          </Collapse>
        );
      })}
    </>
  );
}

export default FaqAccordion;
