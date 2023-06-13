import React from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./button.component";
import { useRouter } from "next/router";
import Link from "next/link";

function PricingCard({
  className = "",
  content = { bundleName: "", price: "", list: [""], service: "" },
}) {
  const router = useRouter();

  return (
    <>
      <div
        className={`w-[284px] md:w-[95%] lg:w-[284px] mt-3 lg:mt-0 mx-2 p-0  bg-white  drop-shadow-md text-[15px] relative bundle_table  ${styles.specialBUndle}`}
      >
        <div className="w-full py-8 shadow-lg bg-dark-blue justify-center items-center">
          {content?.bundleName === "Service Bundle Three" && (
              <div className="flex flex-row text-dark-blue bg-lime absolute top-[-14px] justify-center items-center md:w-[60%] w-[50%] p-1.5 rounded h-[30px] ml-[auto] mr-[auto] left-[0] right-[0]">
                <FontAwesomeIcon className="w-4 mr-2" icon={faStar} />
                <p className='text-[11px] md:text-[9px] lg:text-[9px] xl:text-[12px] font-semibold'>MOST POPULAR</p>
              </div>
          )}
          <h3 className='text-xl uppercase text-center text-white md:text-[14px]  xl:text-xl lg:text-[16px]'>{content?.bundleName}</h3>
        </div>
        <div className={`p-[30px] md:p-[25px] lg:p-[30px]  bg-white`}>
          <div className="block">
            <div className="block ">
              <div className="block relative text-left ">

                <div className="relative inline-block mt-[37px] mb-0 text-left">
                  <div
                    className={` ${styles.poppinsFamily}  text-lime absolute top-0 font-semibold text-xl  inline-block`}
                  >
                    £
                  </div>
                  <div
                    className={`${styles.poppinsFamily} text-lime text-[50px] md:text-[40px] lg:text-[50px] leading-[27px] pl-[20px] font-semibold`}
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
                    className={`${styles.pricingMarkers}tm-feature-lines block text-left min-h-[216px] md:min-h-[230px]  pt-3 marker:dark-blue`}
                  >
                    {content.list.map((ele, index) => {
                      return (
                        <li
                          key={index}
                          className="relative pl-[25px] pt-[12px] pb-[11px] leading-[22px] border-b border-b-[#BFC8D6] flex text-sm  md:text-[12px] lg:text-[12px] xl:text-sm text-black"
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
                <Link
                  href={{
                    pathname: "/order-now",
                    query: { bundle: content.service },
                  }}
                >
                  <ButtonComponent
                    text="Get Instant Quote"
                    className={` ${
                      content?.bundleName === "Service Bundle Three"
                        ? "bg-lime text-dark-blue bg-lime hover:bg-dark-blue hover:text-white "
                        : "bg-dark-blue text-white hover:bg-lime hover:text-dark-blue"
                    } ease-in duration-200 px-[20px] lg:px-[10px] xl:px-[20px] py-[13px] uppercase md:text-[12px] lg:text`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
