import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "about" });

  return (
    <div className={styles.container}>
      <div className={classNames(styles.column, styles.headerSection)}>
        <Typography className={styles.yearsOfExperience}>5</Typography>
        <Typography>years of{"\n"}commercial experience</Typography>
      </div>

      <div className={classNames(styles.column, styles.textContainer)}>
        <Typography variant="h1">{t("title")}</Typography>
        <div className={styles.underline} />

        <Typography weight="bold">{t("description1")}</Typography>

        <Typography>{t("description2")}</Typography>

        <Typography className={styles.infoDetailsContainer}>
          <span className={styles.bold}>{t("infoTitle1")}</span>:{" "}
          {t("infoDescription1")}
        </Typography>

        <Typography className={styles.infoDetailsContainer}>
          <span className={styles.bold}>{t("infoTitle1")}</span>:{" "}
          {t("infoDescription1")}
        </Typography>

        <Button className={styles.button} title={t("button")} />
      </div>
    </div>
  );
};
