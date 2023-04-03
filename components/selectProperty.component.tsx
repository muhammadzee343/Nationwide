import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./button.component";
import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import Image from 'next/image'
import Home from '../public/Home.png';
import Builiding from '../public/Building.png'

export default function SelectProperty() {
  const { setShowDrawer, setOverlay, setPropertyType, propertyType } =
    useContext(SidebarContext);
  const displayDrawer = (propertyType: string) => {
    setPropertyType(propertyType);
    setOverlay(true);
    setTimeout(() => {
      setShowDrawer(true);
    }, 1);
  };
  return (
    <div
      className="bg-white text-center border-transparent drop-shadow-xl lg:max-w-[382px] max-h-[400px] rounded "
      id="main_quote_form"
    >
      <form id="instantquote_main" method="post">
        <div className='bg-white rounded'>
          <h3 className="text-white uppercase w-full text-[26px] lg:text-[20px] xl:text-[26px] mx-25 bg-dark-blue py-[35px] lg:py-[25px] xl:py-[35px] px-[20px] block rounded drop-shadow-lg">
            Get Instant Quote
          </h3>
          <div className="mb-[25px] mt-0 px-[20px] h-[291px] xl:h-[320px] text-center ">
            <div className="text-left relative" id="default_screen">
              <h6 className="text-black block text-base lg:text-sm xl:text-base mt-[27px] mb-[25px] xl:mb-[31px] text-center">
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
                    <Image src={Home} alt='home' className="h-8 w-8 mr-5"/>
                    {/*<FontAwesomeIcon*/}
                    {/*  className="w-8 text-black absolute left-[14px]"*/}
                    {/*  icon={faHouse}*/}
                    {/*/>*/}
                    Residential Property
                  </label>

                  <label
                    className="relative flex items-center justify-center border-2 border-lime min-h-[51px] px-[5px]
                    text-[14px] xxl:text-[20px] text-black cursor-pointer mb-[20px] xl:mb-[37px] hover:bg-lime"
                    onClick={() => displayDrawer("commercial_property")}
                  >
                    <Image src={Builiding} alt='home' className="h-7 w-7 mr-5"/>
                    {/*<FontAwesomeIcon*/}
                    {/*  className="w-[26px] ,w-3 text-black  absolute left-[14px]"*/}
                    {/*  icon={faBuilding}*/}
                    {/*/>*/}
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
