import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./Button.component";

function PricingCard({
  className = "",
  content = { bundleName: "", price: "", list: [""] },
}) {
  return (
    <>
      <div
        className={`w-[284px] p-0 py-12 drop-shadow-md  text-[15px] relative${styles.specialBUndle}`}
      >
        {content?.bundleName === "Service Bundle Three" && (
          <div className="flex text-white bg-lime absolute top-[-1px] justify-center items-center w-full h-[50px]">
            <FontAwesomeIcon className="w-4 mr-2" icon={faStar} />
            <p className="font-semibold">MOST POPULAR</p>
          </div>
        )}
        <div className={`p-[30px] ${className} bg-cream`}>
          <div className="block">
            <div className="block ">
              <div className="block relative text-left ">
                <div className="text-xl text-grey-900 text-left ">
                  <h3 className={styles.pricingTitle}>{content?.bundleName}</h3>
                </div>
                <div className="relative inline-block mt-[37px] mb-0 text-left">
                  <div
                    className={` ${styles.pricingAmount}  text-lime absolute top-0 font-semibold text-xl  inline-block`}
                  >
                    £
                  </div>
                  <div
                    className={`${styles.pricingAmount} text-lime text-[50px] leading-[27px] pl-[20px] font-semibold`}
                  >
                    {content?.price}
                  </div>
                  <div className=" w-full absolute text-grey-700 text-center top-[-28px] text-sm left-0 italic">
                    from only
                  </div>
                </div>
              </div>
              <div className="tm-ptablebox-content block text-left">
                <div className="tm-ptablebox-features">
                  <ul
                    className={`${styles.pricingMarkers}tm-feature-lines block text-left min-h-[216px] pt-3 marker:dark-blue`}
                  >
                    {content.list.map((ele, index) => {
                      return (
                        <li
                          key={index}
                          className="relative pl-[25px]  pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 flex text-sm text-[#1a1a1a]"
                        >
                          <span className=" absolute left-[-2px] top-[16px]">
                            <FontAwesomeIcon className="w-4" icon={faCheck} />
                          </span>
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <ButtonComponent
                  text="Get Instant Quote"
                  className={` ${
                    content?.bundleName === "Service Bundle Three"
                      ? "bg-lime text-dark-blue bg-lime hover:bg-dark-blue hover:text-white "
                      : "bg-dark-blue text-white hover:bg-lime hover:text-white"
                  } ease-in duration-200 px-[20px] py-[13px] uppercase`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
