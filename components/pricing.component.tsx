import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./Button.component";
import "swiper/css";
const Pricing = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:flex-nowrap flex-wrap px-6 md:px-12 xl:px-32 mt-[-150px]">
        <div className="w-[284px] p-0 py-12 drop-shadow-md ">
          <div className=" p-[30px] bg-[#f9f9f9]">
            <div className="block">
              <div className="block ">
                <div className="block relative text-left ">
                  <div className="text-xl text-grey-900 text-left ">
                    <h3 className={styles.pricingTitle}>Service Bundle One</h3>
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
                      129
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
                      <li className="relative pl-[25px]  pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 flex text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px]">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Portable Appliance Test (PAT)
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Installation Condition Report (EICR)
                      </li>
                    </ul>
                  </div>
                  <ButtonComponent
                    text="Get Instant Quote"
                    className="bg-dark-blue text-white hover:bg-lime hover:text-white ease-in duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[284px] p-0 py-12 drop-shadow-md ">
          <div className="ttm-pricetable-column-w p-[30px] bg-[#f9f9f9]">
            <div className="ttm-pricetable-column-inner tm-currency-before block">
              <div className="tm-ptablebox tm-ptablebox-style-1 block ">
                <div className="themetechmount-ptable-main block relative text-left ">
                  <div className="tm-ptablebox-title text-xl text-grey-900 text-left ">
                    <h3 className={styles.pricingTitle}>Service Bundle Two</h3>
                  </div>
                  {/*<div className="tm-ptablebox-desc">Save upto 10%</div>*/}
                  <div className="relative inline-block mt-[37px] mb-0 text-left">
                    <div
                      className={` ${styles.pricingAmount}  text-lime absolute top-0 font-semibold text-xl  inline-block`}
                    >
                      £
                    </div>
                    <div
                      className={`${styles.pricingAmount} text-lime text-[50px] leading-[27px] pl-[20px] font-semibold`}
                    >
                      129
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
                      <li className="relative pl-[25px]  pt-[12px] pb-[11px] pr-[10px] leading-[22px] border-b border-b-grey-400 flex text-sm text-[#1a1a1a] break-words">
                        <span className=" absolute left-[-2px] top-[16px]">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Energy Performance Certificate
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pt-[12px] pb-[11px] pr-[10px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a] break-words">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Installation Condition Report (EICR)
                      </li>
                    </ul>
                  </div>
                  <ButtonComponent
                    text="Get Instant Quote"
                    className="bg-dark-blue text-white hover:bg-lime hover:text-white ease-in duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[284px] p-0 py-12 drop-shadow-md ">
          <div className="p-[30px] bg-white">
            <div className="tm-currency-before block">
              <div className="block">
                <div className="block relative text-left ">
                  <div className="text-xl text-grey-900 text-left ">
                    <h3 className={styles.pricingTitle}>
                      Service Bundle Three
                    </h3>
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
                      199
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
                      <li className="relative pl-[25px]  pt-[12px] pb-[11px] pr-[10px] leading-[22px] border-b border-b-grey-400 flex text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px]">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Gas Safety Certificate
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pr-[10px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Portable Appliance Test (PAT)
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pr-[10px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Installation Condition Report (EICR)
                      </li>
                    </ul>
                  </div>
                  <ButtonComponent
                    text="Get Instant Quote"
                    className="bg-dark-blue text-white hover:bg-lime hover:text-white ease-in duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[284px] p-0 py-12 drop-shadow-md ">
          <div className="p-[30px] bg-[#f9f9f9]">
            <div className="tm-currency-before block">
              <div className="block">
                <div className="block relative text-left ">
                  <div className="text-xl text-grey-900 text-left ">
                    <h3 className={styles.pricingTitle}>
                      Service Bundle Three
                    </h3>
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
                      199
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
                      <li className="relative pl-[25px]  pt-[12px] pb-[11px] pr-[10px] leading-[22px] border-b border-b-grey-400 flex text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px]">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Energy Performance Certificate
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pr-[10px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Gas Safety Certificate
                      </li>
                      <li className="relative left-[-2px] top-1 pl-[25px] pr-[10px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-grey-400 text-sm text-[#1a1a1a]">
                        <span className=" absolute left-[-2px] top-[16px] text-dark-blue">
                          <FontAwesomeIcon className="w-4" icon={faCheck} />
                        </span>
                        Electrical Installation Condition Report (EICR)
                      </li>
                    </ul>
                  </div>
                  <ButtonComponent
                    text="Get Instant Quote"
                    className="bg-dark-blue text-white hover:bg-lime hover:text-white ease-in duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
