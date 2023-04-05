import Head from "next/head";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";

import styles from "./styles.module.css";

import { Typography } from "@/components/Typography/Typography";
import CookiesIllustration from "@/assets/illustrations/cookies.svg";
import type { ServerSideProps } from "@/types/ServerSideProps";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";

export default function Cookies() {
  const { t } = useTranslation("cookies");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.column}>
          <Typography variant="h1">{t("title")}</Typography>
          <Typography opacity>{ReactHtmlParser(t("description"))}</Typography>
        </div>

        <div className={classNames(styles.column, styles.centered)}>
          <CookiesIllustration />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["cookies"]);

  return {
    props: {
      ...translations,
    },
  };
}
