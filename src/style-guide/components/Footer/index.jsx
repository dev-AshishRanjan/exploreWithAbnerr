import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerpage}>
        <img src="./images/logo.jpg" className={styles.footerimg} />
        <div className={styles.footercr}>
          © COPYRIGHT 2023 | ALL RIGHTS RESERVED
        </div>
      </div>
    </>
  );
};

export default Footer;
