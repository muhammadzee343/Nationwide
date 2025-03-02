
import ButtonComponent from "./button.component";
import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import Image from 'next/image'
import Home from '../public/Home.png';
import Builiding from '../public/Building.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHome,
  faHouseChimney,
    faBuilding,
    
} from "@fortawesome/free-solid-svg-icons";
export default function SelectProperty({sticky = false, selectedServiceId}: {sticky: boolean, selectedServiceId: number}) {

  const sticky_condition = sticky ? 'sticky top-14' : '';
  const { setShowDrawer, setOverlay, setPropertyType, setServiceId } =
    useContext(SidebarContext);
  const displayDrawer = (propertyType: string) => {
    setPropertyType(propertyType);
    setServiceId(selectedServiceId)
    setOverlay(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setShowDrawer(true);
    }, 1);
  };
  return (
    <div
      className={`${sticky_condition} bg-white text-center drop-shadow-xl lg:max-w-[382px] sm:max-h-[auto] max-h-[416px] lg:max-h-[375px] sm:w-[100%]  rounded ml-[auto] lg:min-w-[259px]`}
      id="main_quote_form"
    >
      <form id="instantquote_main" method="post">
        <div className={`w-full overflow-hidden`}>
          <h3 className="text-white uppercase w-full text-[26px] sm:text-[20px] lg:text-[20px] xl:text-[24px] mx-25 bg-dark-blue py-[35px] lg:py-[25px] xl:py-[35px] px-[20px] block rounded-sm drop-shadow-lg">
            Get Instant Quote
          </h3>
          <div className="mb-[25px] mt-0 rounded px-[20px] bg-white h-[276px] sm:h-[auto] xl:h-[287px] xxl:h-[287px] text-center ">
            <div className="text-left relative" id="default_screen">
              <h6 className="text-black block text-base lg:leading-[1.1rem] lg:text-[13px] lg:leading-[1.25rem] md:leading-[1.1rem] md:text-[13px] mt-[20px] mb-[20px] xl:mb-[20px] text-center xl:text-base">
                Select Your Property as appropraite and get quote in 30 seconds!
              </h6>
              <div className="justify-center  flex-col">
                <div className="cat_box">
                  <label
                    className="relative flex items-center justify-center border-2 border-lime min-h-[51px] px-[5px]
                    text-[14px] xxl:text-[20px]  text-black cursor-pointer mb-[20px]
                   hover:bg-lime"
                    onClick={() => displayDrawer("residential_property")}
                  >
                    {/*<Image src={Home} alt='home' className="h-8 w-8 mr-5"/>*/}
                    <FontAwesomeIcon className="h-8 w-8 mr-5" icon={faHouseChimney} />
                    Residential Property 
                  </label>

                  <label
                    className="relative flex items-center justify-center border-2 border-lime min-h-[51px] px-[5px]
                    text-[14px] xxl:text-[20px] text-black cursor-pointer mb-[20px] xl:mb-[20px] hover:bg-lime"
                    onClick={() => displayDrawer("commercial_property")}
                  >
                    {/*<Image src={Builiding} alt='home' className="h-7 w-7 mr-5"/>*/}
                    <FontAwesomeIcon
                        className="h-7 w-7 mr-5 relative left-[4px]"
                        icon={faBuilding}
                    />
                    Commercial Property
                  </label>
                </div>
              </div>
              <ButtonComponent
                text="Quote Now"
                className="bg-lime text-black font-semibold uppercase px-[20px] min-h-[52px]  hover:bg-dark-blue hover:text-white ease-in duration-200"
                onClick={() => displayDrawer("residential_property")}
                type="button"
              />
            </div>
          </div>
        </div>
      </form>

     
    </div>
  );
}
