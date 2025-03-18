import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Sliders = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        <SwiperSlide>
          <img
            src="/img/proj-1.png"
            className="w-96 px-3 h-auto "
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/proj-2.png"
            className="w-96 px-3 h-auto "
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/proj-3.png"
            className="w-96 px-3 h-auto "
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/proj-2.png"
            className="w-96 px-3 h-auto "
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/proj-3.png"
            className="w-96 px-3 h-auto "
            alt="slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
