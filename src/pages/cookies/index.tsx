import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Typography } from "@/components/Typography/Typography";
import ReactHtmlParser from "react-html-parser";
import CookiesIllustration from "@/assets/illustrations/cookies.svg";
import classNames from "classnames";

export default function Cookies() {
  const { t } = useTranslation("cookies");

  return (
    <div className={styles.mainContainer}>
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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "cookies"])),
    },
  };
}
