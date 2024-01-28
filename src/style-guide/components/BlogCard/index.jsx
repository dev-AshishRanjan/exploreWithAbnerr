import React from "react";
import styles from "./style.module.scss";
const BlogCard = ({ key, data }) => {
  return (
    <a className={styles.BlogCard} key={key} href={`blogs/${data._id}`}>
      <img src={data?.coverImage?.url} alt="" />
      <div className={styles.overlay}></div>
      <h2>{data?.title}</h2>
    </a>
  );
};

export default BlogCard;
