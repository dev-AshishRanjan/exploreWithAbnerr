import { React, useEffect } from "react";
import styles from "./style.module.scss";
import Masonry from "react-masonry-css";

const GalleryGrid = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    750: 2,
    550: 1,
  };

  return (
    <div className={styles.container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.gallery}
        columnClassName={styles.masonryColumn}
      >
        <div className={styles.image}>
          <img src="/images/winter/1.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/2.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/3.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/4.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/5.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/6.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/7.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/8.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/9.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/10.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/11.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/12.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/13.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/14.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/15.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/16.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/17.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/18.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/19.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/20.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/21.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/22.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/23.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/24.jpg" />
        </div>
        <div className={styles.image}>
          <img src="/images/winter/25.jpg" />
        </div>
      </Masonry>
    </div>
  );
};

export default GalleryGrid;
