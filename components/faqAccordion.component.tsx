import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import serviceStyle from "../styles/service.module.css";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
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
  activeHeaderColor = "",
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
            expandIconPosition={"start"}
            expandIcon={({ isActive }) =>
              isActive ? (
                <FontAwesomeIcon
                  className="w-6 h-6 text-white mr-5"
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon
                  className="w-6 h-6 mr-5"
                  icon={faPlus}
                />
              )
            }
            className="font-opensans w-full "
            style={{ color: "#fff" }}
          >
            <Panel
              header={
                <span
                  className={`${
                    active === (index + 1).toString()
                      ?  activeHeaderColor ? activeHeaderColor :  "text-dark-blue"
                      : `text-dark-blue`
                  } text-[18px] leading-4 font-bold`}
                >
                  {item?.title}
                </span>
              }
              key={index + 1}
              className={`${
                active === (index + 1).toString()
                  ? `${activeHeadBackgorund}`
                  : "bg-slate-50"
              } hover:${hoverHeadBackground} ${headerBackground} ${
                navigateFromFAQ ? serviceStyle.parent : null
              } py-2`}
            >
              <div
                className={`${
                  active === (index + 1).toString()
                    ? ""
                    : null
                } py-5 px-12`}
              >
                <h1 className="font-semibold text-base">{item.head1}</h1>
                {item?.description.map((desc: any) => {
                  return (
                    <div className="border-lime border-l-2 rounded-sm pl-4">
                      <p className={`${styles.footerParagraph} text-justify`}>{desc?.para1}</p>
                      <p className={`${styles.footerParagraph} text-justify`}>{desc?.para2}</p>
                      <p className={`${styles.footerParagraph} text-justify`}>{desc?.para3}</p>
                      <p className={`${styles.footerParagraph} text-justify`}>{desc?.para4}</p>
                    </div>
                  );
                })}
                <h1 className="font-semibold text-base">{item.head2}</h1>
                {item?.requirementList?.map((desc: any, index: number) => {
                  return (
                    <div className="flex flex-row" key={index}>
                      <span className="w-[15px]">{desc.iconName}</span>
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
