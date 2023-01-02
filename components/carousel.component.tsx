import React, { useMemo } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import Styles from "../styles/pricing.module.css";

function CarouselComponent({ list, component, className = "" }: any) {
  const lists = useMemo(() => {
    let rows: any = [];
    list.map((ele: any, index: number) => {
      rows.push(
        <SwiperSlide
          key={index}
          className={`${Styles.customSlide} xl:flex xl:justify-center `}
        >
          {React.createElement(component, {
            title: ele?.title,
            paragraph: ele?.paragraph,
            index: index,
            list: ele.list,
          })}
        </SwiperSlide>
      );
    });
    return rows;
  }, []);
  return (
    <div className="w-full relative">
      <div
        className="border border-[#a0a0a0] absolute w-[33px] h-[45px] bg-white top-[42%]
       left-1  sm:left-[30px] z-[600] flex justify-center items-center cursor-pointer"
      >
        <p className="text-[19px] text-dark-blue font-bold">&#8249;</p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className={`mySwiper w-full flex justify-center ${className} h-[360px] relative`}
        style={{
          "--swiper-pagination-color": "#c2cf10",
          "--swiper-pagination-bullet-inactive-color": "#182333",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "14px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          swiperButtonNext: "#0000",
        }}
      >
        {lists}
      </Swiper>
      <div
        className="border border-[#a0a0a0] absolute w-[33px] h-[45px] bg-white top-[42%] right-3 sm:right-[30px]
          z-[600] flex justify-center items-center cursor-pointer"
      >
        <p className="text-[19px] text-dark-blue font-bold"> &#8250;</p>
      </div>
    </div>
  );
}

export default CarouselComponent;
