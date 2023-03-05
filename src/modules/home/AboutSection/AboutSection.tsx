import { Typography } from "@/components/Typography/Typography";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "about" });

  return (
    <div className={styles.container}>
      <div className={styles.column}></div>

      <div className={classNames(styles.column, styles.textContainer)}>
        <Typography variant="h1">
          {t("title")}
        </Typography>

        <Typography>{t("description1")}</Typography>
        <Typography weight="bold">{t("description2")}</Typography>
        <Typography variant="small-paragraph">{t("description3")}</Typography>
      </div>
    </div>
  );
};
