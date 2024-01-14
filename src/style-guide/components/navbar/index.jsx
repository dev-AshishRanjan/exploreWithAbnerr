import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Navbar = ({ mobileHamClicked, setMobileHamClicked }) => {
  const [dropdown, setDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState(
    (typeof window !== "undefined" && window.location.pathname.split("/")[1]) ||
      "home"
  );
  const dmEnter = () => {
    setDropdown(true);
  };
  const dmLeave = () => {
    setDropdown(false);
  };
  return (
    <div className={styles.navWrapper}>
      <div
        className={`${styles.navbar} ${
          mobileHamClicked ? styles.navShow : styles.navHide
        }`}
      >
        <div className={styles.logo}>
          <Link
            href="/"
            className={`${activeLink === "home" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("home");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            <img src="./images/logo.jpg" alt="DVANGA"></img>
          </Link>
        </div>
        <div className={styles.nav_links}>
          <Link
            href="/about"
            className={`${activeLink === "about" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("about");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            ABOUT
          </Link>
          <div
            className={styles.gallerydropdown}
            onMouseEnter={dmEnter}
            onMouseLeave={dmLeave}
          >
            GALLERY
            {dropdown ? (
              <div className={styles.gallerylinks}>
                <Link
                  href="/winter"
                  className={`${
                    activeLink === "winter" ? styles.activeLink : null
                  }`}
                  onClick={() => {
                    setActiveLink("winter");
                    setMobileHamClicked(!mobileHamClicked);
                  }}
                >
                  <div className={styles.sublink}>WINTER</div>
                </Link>
                <Link
                  href="/ambience"
                  className={`${
                    activeLink === "ambience" ? styles.activeLink : null
                  }`}
                  onClick={() => {
                    setActiveLink("ambience");
                    setMobileHamClicked(!mobileHamClicked);
                  }}
                >
                  <div className={styles.sublink}>AMBIENCE</div>
                </Link>
                <Link
                  href="/goldenhour"
                  className={`${
                    activeLink === "goldenhour" ? styles.activeLink : null
                  }`}
                  onClick={() => {
                    setActiveLink("goldenhour");
                    setMobileHamClicked(!mobileHamClicked);
                  }}
                >
                  <div className={styles.sublink}>GOLDEN HOUR</div>
                </Link>
              </div>
            ) : null}
          </div>
          <Link
            href="/blogs"
            className={`${activeLink === "blogs" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("blogs");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            BLOGS
          </Link>
          <Link
            href="/"
            className={`${activeLink === "store" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("store");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            STORE
          </Link>
          <Link
            href="/#contact"
            className={`${activeLink === "contact" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("contact");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
