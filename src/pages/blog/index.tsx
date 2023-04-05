import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { BlogSection } from "@/modules/blog/BlogSection/BlogSection";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import type { ServerSideProps } from "@/types/ServerSideProps";

export default function Blog() {
  const { t } = useTranslation("blog");

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>

      <BlogSection />
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["blog"]);

  return {
    props: {
      ...translations,
    },
  };
}
