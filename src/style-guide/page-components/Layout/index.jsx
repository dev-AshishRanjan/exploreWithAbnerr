import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Hamburger from "@/style-guide/components/Hamburger-nav";
import Home_carousel from "@/style-guide/components/Home_carousel";
import Intro from "@/style-guide/components/Intro";
import Blog_carousel from "@/style-guide/components/Blog_carousel";
import styles from "./style.module.scss";
import Footer from "@/style-guide/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 40,
      width: 40,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <div className={styles.body}>
        <motion.div
          className={styles.cursor1}
          variants={variants}
          animate={cursorVariant}
        />
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
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
