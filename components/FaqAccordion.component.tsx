import React, { useState } from "react";
import styles from "../styles/footer.module.css";
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
}: any) {
  const [active, setActive] = useState("1");
  const onChange = (key: string | string[]) => {
    setActive(key);
  };

  return (
    <>
      {accordionData?.map((item: any, index: any) => {
        return (
          <Collapse
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
            className="font-opensans mb-5 w-full"
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
                  ? `${activeHeadBackgorund} border border-lime shadow-md`
                  : null
              } hover:${hoverHeadBackground} ${headerBackground}`}
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
              <p className="text-sm font-semibold">{item.sendCdInsctruction}</p>
            </Panel>
          </Collapse>
        );
      })}
    </>
  );
}

export default FaqAccordion;
