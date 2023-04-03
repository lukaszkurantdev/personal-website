import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutSection } from "@/modules/contact/AboutSection/AboutSection";
import { ContactFormSection } from "@/modules/contact/ContactFormSection/ContactFormSection";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <ContactFormSection />
        <AboutSection />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","cookies", "contact"])),
    },
  };
}
