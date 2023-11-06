import { React, useState } from "react";
import styles from "./style.module.scss";
// import Socials from "../../../../socials.json";
import Home_carousel from "@/style-guide/components/Home_carousel";
import Intro from "@/style-guide/components/Intro";
import Navbar from "@/style-guide/components/navbar";
import Hamburger from "@/style-guide/components/Hamburger-nav";
import { Icon } from "@iconify/react";

const Error = () => {
  const [mobileHamClicked, setMobileHamClicked] = useState(false);
  return (
    <>
      <div className={styles.body}>
        <Home_carousel className={styles.carousel_body} />
        <Intro className={styles.intro} />
      </div>
    </>
  );
};

export default Error;
