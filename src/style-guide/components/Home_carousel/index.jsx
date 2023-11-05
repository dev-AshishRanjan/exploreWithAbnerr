import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

import styles from "./style.module.scss";

const Home_carousel = () => {
  return (
    <div className={styles.hcarousel}>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src="./images/8.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home_carousel;
