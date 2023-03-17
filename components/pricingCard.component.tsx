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
        className={`w-[284px] mt-3 lg:mt-0 mx-2 p-0 pb-12 bg-white  drop-shadow-md text-[15px] relative${styles.specialBUndle}`}
      >
        <div className="w-full py-8 shadow-lg bg-dark-blue justify-center items-center">
          {content?.bundleName === "Service Bundle Three" && (
              <div className="flex flex-row text-white bg-lime absolute -top-3 left-[30%] justify-center items-center w-[40%] p-1.5 rounded ">
                <FontAwesomeIcon className="w-4 mr-2" icon={faStar} />
                <p className='text-[9px]'>MOST POPULAR</p>
              </div>
          )}
          <h3 className='text-xl uppercase text-center text-white '>{content?.bundleName}</h3>
        </div>
        <div className={`p-[30px]  bg-white`}>
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
                    className={`${styles.poppinsFamily} text-lime text-[50px] leading-[27px] pl-[20px] font-semibold`}
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
                          className="relative pl-[25px]  pt-[12px] pb-[11px] leading-[22px] border-b border-b-slate-100 flex text-sm text-black"
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
                        : "bg-dark-blue text-white hover:bg-lime hover:text-white"
                    } ease-in duration-200 px-[20px] py-[13px] uppercase`}
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
