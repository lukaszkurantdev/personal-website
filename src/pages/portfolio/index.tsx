import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { PortfolioList } from "@/modules/portfolio/PortfolioList/PortfolioList";
import type { ServerSideProps } from "@/types/ServerSideProps";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";

export default function Portfolio() {
  const { t } = useTranslation("portfolio");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>

      <div className={styles.container}>
        <PortfolioList />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["portfolio"]);

  return {
    props: {
      ...translations,
    },
  };
}
