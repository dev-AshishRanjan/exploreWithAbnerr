import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArticlesData from "../../../blogs.json";
import styles from "../../styles/Blogs.module.scss";
import Spinner from "@/style-guide/components/spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { toast } from "react-toastify";

const Blog = () => {
  const [articledata, setArticledata] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/article`)
        .then((req) => req.json())
        .then((res) => {
          console.log({ res });
          res.articles.map((ele) => {
            if (ele._id == id) {
              console.log({ ele });
              setArticledata(ele);
              setLoading(false);
            }
          });
        });
    } catch (err) {
      toast.error("Network Error");
    }
    // ArticlesData.map((ele) => {
    //   if (ele._id == id) {
    //     setArticledata(ele);
    //   }
    // })
  }, []);
  if (!articledata || !articledata.title || loading) {
    return <Spinner />;
  } else
    return (
      <div className={styles.BlogPage}>
        <img
          src={articledata.coverImage.url}
          alt=""
          className={styles.coverImage}
        />
        <h1 className={styles.title}>{articledata.title}</h1>
        <p className={styles.description}>{articledata.description}</p>
        <div className={styles.carousel}>
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
            {articledata.otherImages.length > 0 &&
              articledata.otherImages.map((ele, ind) => {
                return (
                  <SwiperSlide className={styles.swiper_slide} key={ind}>
                    <img src={ele.url} alt="" />
                  </SwiperSlide>
                );
              })}
            {/* <SwiperSlide className={styles.swiper_slide}>
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
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    );
};

export default Blog;
