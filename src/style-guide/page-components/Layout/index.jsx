import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Hamburger from "@/style-guide/components/Hamburger-nav";
import Home_carousel from "@/style-guide/components/Home_carousel";
import Intro from "@/style-guide/components/Intro";
import Blog_carousel from "@/style-guide/components/Blog_carousel";
import styles from "./style.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const [mobileHamClicked, setMobileHamClicked] = useState(false);

  // const handleScroll = (e) => {
  //   e.target.classList.add("on-scrollbar");
  //   setTimeout(() => {
  //     e.target.classList.remove("on-scrollbar");
  //   }, 500);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, true);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll, true);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.body}>
        <ToastContainer />
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
