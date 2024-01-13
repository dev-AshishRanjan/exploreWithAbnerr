import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import DummyPage from "@/style-guide/page-components/DummyPage";
import ContactSection from "@/style-guide/components/ContactSection";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <>
      {/* <ReactLenis root> */}
      <DummyPage />
      <ContactSection />
      {/* </ReactLenis> */}
    </>
  );
}
