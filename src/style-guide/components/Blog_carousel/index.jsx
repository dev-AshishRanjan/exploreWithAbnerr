import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./style.module.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Blog_carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        // spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <img src="./images/1.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/2.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/3.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/4.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/5.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/6.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/7.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/8.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src="./images/1.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/2.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/3.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/4.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/5.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/6.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/7.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/8.jpg" alt="" className={styles.swiper_img} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.content}>
        <div className={styles.aboutpara}>
          The blending of traditional lifestyle photography with the wonderment
          and joy of adventure, accompanied by rich tones and moody vibes, is
          what makes up the unique aesthetic of our work. In all things,our aim
          is to explore and create to inspire. At our cores, we are
          storyteller.s We use the mediums of photography, written word, and
          design to tell whatever story we want to be told. We are also avid
          lovers of music, culinary arts, and many other creative mediums. We
          enjoy work that challenges us and our abilities, taking us to places
          We have never been and allows us to see things We have never seen. We
          constantly draw inspiration from old, vintage styles and techniques to
          discover new places to take our art and creativity. At our very core,
          We are just a bunch of young friends on a journey, unceasingly
          refining and establishing ourselves as an artist,and as adventurers
        </div>
      </div>
    </>
  );
}
