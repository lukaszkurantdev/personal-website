import classNames from "classnames";
import { useTranslation } from "next-i18next";

import styles from "./AboutSection.module.css";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

export const AboutSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "about" });

  return (
    <div className={styles.container}>
      <div className={classNames(styles.column, styles.headerSection)}>
        <Typography className={styles.yearsOfExperience}>
          {t("experienceYearsTitle")}
        </Typography>
        <Typography>{t("experienceYearsDescription")}</Typography>
      </div>

      <div className={classNames(styles.column, styles.textContainer)}>
        <Typography variant="h1">{t("title")}</Typography>
        <div className={styles.underline} />

        <Typography>{t("description1")}</Typography>

        <Typography className={styles.infoDetailsContainer}>
          <span className={styles.bold}>{t("infoTitle1")}</span>
          {`: {t("infoDescription1")}`}
        </Typography>

        <Typography className={styles.infoDetailsContainer}>
          <span className={styles.bold}>{t("infoTitle2")}</span>
          {`: ${t("infoDescription2")}`}
        </Typography>

        <Button className={styles.button} title={t("button")} />
      </div>
    </div>
  );
};
