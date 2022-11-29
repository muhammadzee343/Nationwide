import React from "react";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import priceStyles from "../styles/pricing.module.css";

function CarouselComponent({list, component}: any) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            onSlideChange={() => {
            }}
            onSwiper={(swiper) => {
            }}
            className=" mySwiper w-full flex justify-center"
            style={{
                //@ts-ignore
                "--swiper-pagination-color": "#c2cf10",
                "--swiper-pagination-bullet-inactive-color": "#182333",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "14px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                swiperButtonNext: "#0000",
            }}
        >
            {list.map((ele: any, index: number) => {
                return (
                    <SwiperSlide
                        key={index}
                        className={`${priceStyles.customSlide} xl:flex xl:justify-center`}
                    >
                        {React.createElement(component, {
                            title: ele.title,
                            paragraph: ele.paragraph,
                            index: index
                        })}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default CarouselComponent;
