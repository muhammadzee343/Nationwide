import React from "react";
import { useSwiper } from "swiper/react";
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
      className={`border border-[#a0a0a0] absolute w-[33px] h-[45px] bg-white 
          z-[600] flex justify-center items-center cursor-pointer ${props.className}`}
      onClick={changeSlide}
    >
      <p className="text-[19px] text-dark-blue font-bold"> {props.charset}</p>
    </div>
  );
}

export default SwiperButton;
