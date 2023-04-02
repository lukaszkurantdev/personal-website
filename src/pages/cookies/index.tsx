import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Typography } from "@/components/Typography/Typography";
import ReactHtmlParser from "react-html-parser";

export default function Cookies() {
  const { t } = useTranslation("cookies");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography opacity className={styles.description}>
          {ReactHtmlParser(t("description"))}
        </Typography>
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
