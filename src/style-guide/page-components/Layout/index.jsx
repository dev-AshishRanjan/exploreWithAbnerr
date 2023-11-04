import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Hamburger from "@/style-guide/components/Hamburger-nav";
import styles from "./style.module.scss";

const Layout = ({ children }) => {
  const [mobileHamClicked, setMobileHamClicked] = useState(false);

  const handleScroll = (e) => {
    e.target.classList.add("on-scrollbar");
    setTimeout(() => {
      e.target.classList.remove("on-scrollbar");
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);
  return (
    <>
      <div className={styles.body}>
        <Navbar
          mobileHamClicked={mobileHamClicked}
          setMobileHamClicked={setMobileHamClicked}
        />
        <Hamburger
          mobileHamClicked={mobileHamClicked}
          setMobileHamClicked={setMobileHamClicked}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
