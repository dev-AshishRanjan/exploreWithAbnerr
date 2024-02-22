import React from "react";
import styles from "./style.module.scss";
import Masonry from "react-masonry-css";

const GalleryGrid = ({ images }) => {
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
        {images.map((image, index) => (
          <div className={styles.image} key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default GalleryGrid;
