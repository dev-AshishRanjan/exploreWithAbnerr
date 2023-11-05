import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import DummyPage from "@/style-guide/page-components/DummyPage";
import ContactSection from "@/style-guide/components/ContactSection";

export default function Home() {
  return (
    <>
      <DummyPage />
      <ContactSection />
    </>
  );
}
