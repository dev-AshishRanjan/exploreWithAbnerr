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
      {/* <div className={styles.error}>
        <h1>START</h1>
        <p>Public Template for Nextjs</p>
        <Filteroptions />
        <div className={styles.socials}>
          {Socials.map((ele) => {
            return (
              <a href={ele.link} target="_blank" title={ele.name}>
                <Icon icon={`cib:${ele.name}`} color="#579" />
              </a>
            );
          })} 
        </div>
      </div> */}
      <div className={styles.body}>
        <Home_carousel className={styles.carousel_body} />
        <Intro className={styles.intro} />
        {/* <Blog_carousel /> */}
        <Navbar
          mobileHamClicked={mobileHamClicked}
          setMobileHamClicked={setMobileHamClicked}
        />
        <Hamburger
          mobileHamClicked={mobileHamClicked}
          setMobileHamClicked={setMobileHamClicked}
        />
      </div>
    </>
  );
};

export default Error;
