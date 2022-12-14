import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import priceStyles from "../styles/pricing.module.css";
import { Navigation, Pagination } from "swiper";
import { bundles } from "../utility/constants";
import PricingCard from "./pricingCard.component";

function PricingCarouselComponent(props: any) {
  return (
    <>
      <div className="flex lg:hidden pl-6 sm:px-6 mx-auto md:px-12 xl:px-32 mt-[10px] xl:mt-[-200px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          className=" mySwiper w-full flex justify-center min-h-[560px] relative
          "
          style={{
            "--swiper-pagination-color": "#c2cf10",
            "--swiper-pagination-bullet-inactive-color": "#182333",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            swiperButtonNext: "#0000",
          }}
        >
          {bundles.map(({ className, content }, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${priceStyles.priceCustomSlide} xl:flex xl:justify-center `}
              >
                <PricingCard
                  key={index}
                  content={{ ...content }}
                  className={className}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default PricingCarouselComponent;
