import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import priceStyles from "../styles/pricing.module.css";
import { Navigation, Pagination } from "swiper";
import { bundles } from "../utility/constants";
import PricingCard from "./pricingCard.component";
import SwiperButton from "./swiperButton.component";

function PricingCarouselComponent(props: any) {
  const swiper = useSwiper();

  return (
    <>
      <div className="flex lg:hidden relative -ml-3 -mr-3 md:ml-0 md:mr-0 md:pl-0 mx-auto md:px-12 xl:px-32 mt-[10px] xl:mt-[-200]px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={true}
          navigation={false}
          modules={[Pagination, Navigation]}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          className="mySwiper w-full flex justify-center min-h-[580px] relative
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
          <SwiperButton
            charset="&#8249;"
            className="top-[49%]
       left-3  sm:left-[30px]"
            direction="prev"
            directionArrow='left'
          />
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
          <SwiperButton
            charset="&#8250;"
            className="top-[49%] right-3 sm:right-[30px]"
            direction="next"
          />
        </Swiper>
      </div>
    </>
  );
}

export default PricingCarouselComponent;
