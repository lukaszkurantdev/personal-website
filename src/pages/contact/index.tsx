import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { AboutSection } from "@/modules/contact/AboutSection/AboutSection";
import { ContactFormSection } from "@/modules/contact/ContactFormSection/ContactFormSection";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import type { ServerSideProps } from "@/types/ServerSideProps";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>

      <div className={styles.container}>
        <ContactFormSection />
        <AboutSection />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["contact"]);

  return {
    props: { ...translations },
  };
}
