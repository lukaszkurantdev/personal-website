import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { HeroSection } from "@/modules/home/HeroSection/HeroSection";
import { SpecialtiesSection } from "@/modules/home/SpecialtiesSection/SpecialtiesSection";
import { ExperienceSection } from "@/modules/home/ExperienceSection/ExperienceSection";
import { EducationSection } from "@/modules/home/EducationSection/EducationSection";
import { ConstCashSection } from "@/modules/home/ConstCashSection/ConstCashSection";
import { ContactSection } from "@/modules/home/ContactSection/ContactSection";
import { BlogSection } from "@/modules/home/BlogSection/BlogSection";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import type { ServerSideProps } from "@/types/ServerSideProps";
import { ValuesSection } from "@/modules/home/ValuesSection/ValuesSection";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <div className={styles.home}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>
      <HeroSection />
      <SpecialtiesSection />
      <ValuesSection />
      <ExperienceSection />
      <EducationSection />
      <ConstCashSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, [
    "home",
    "blog",
  ]);

  return {
    props: {
      ...translations,
    },
  };
}
