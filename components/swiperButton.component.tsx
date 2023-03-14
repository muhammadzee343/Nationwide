import React from "react";
import { useSwiper } from "swiper/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
function SwiperButton(props: any) {
  const swiper = useSwiper();
  const changeSlide = () => {
    if (props.direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };
  return (
    <div
      className={`bg-opacity-50 rounded-full absolute p-2 bg-slate-300
          z-[600] flex justify-center items-center cursor-pointer ${props.className}`}
      onClick={changeSlide}
    >
      <p className="text-[19px] opacity-100 text-dark-blue font-bold"><FontAwesomeIcon icon={props.directionArrow==='left' ? faArrowLeft:faArrowRight} className={'h-4'}/></p>
    </div>
  );
}

export default SwiperButton;
