import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Navbar = ({ mobileHamClicked, setMobileHamClicked }) => {
  const [activeLink, setActiveLink] = useState(
    (typeof window !== 'undefined' && window.location.pathname.split("/")[1])|| "home"
  );
  return (
    <div className={styles.navWrapper}>
      <div
        className={`${styles.navbar} ${mobileHamClicked ? styles.navShow : styles.navHide
          }`}
      >
        <div className={styles.logo}>
          LOGO
          {/* <img src="/ashish.png" alt="" /> */}
        </div>
        <div className={styles.nav_links}>
          <Link
            href="/"
            className={`${activeLink === "home" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("home");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            HOME
          </Link>
          <Link
            href="/admin"
            className={`${activeLink === "admin" ? styles.activeLink : null}`}
            onClick={() => {
              setActiveLink("admin");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            ADMIN
          </Link>
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
          <Link
            href="/projects"
            className={`${activeLink === "projects" ? styles.activeLink : null
              }`}
            onClick={() => {
              setActiveLink("projects");
              setMobileHamClicked(!mobileHamClicked);
            }}
          >
            PROJECTS
          </Link>
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
            href="/contact"
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
