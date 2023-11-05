import { React, useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
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

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <div className={styles.content}>
        <motion.div
          className={styles.cursor1}
          variants={variants}
          animate={cursorVariant}
        />
        <div
          className={styles.aboutpara}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
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
        <span className={styles.moreabout}>
          <Link href="/about" className={styles.arrowlink}>
            <span>LEARN MORE ABOUT US &nbsp;&#10230; </span>
          </Link>
        </span>
        <div className={styles.mainimg}>
          <img
            src="./images/aboutmainpage.jpg"
            alt=""
            className={styles.img1}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
