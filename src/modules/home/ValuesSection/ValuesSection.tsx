import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import styles from "./ValuesSection.module.css";

export const ValuesSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "values" });

  return (
    <div className={styles.container}>
      <div className={classNames(styles.column, styles.textContainer)}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography>{t("description")}</Typography>
      </div>

      <div className={classNames(styles.column, styles.valuesContainer)}>
        <div className={styles.valuesColumn}>
          <span className={styles.value}>
            {t("valuesWords.responsibility")}
          </span>
          <span className={styles.value}>{t("valuesWords.quality")}</span>
          <span className={styles.value}>{t("valuesWords.trust")}</span>
        </div>
        <div className={styles.valuesColumn}>
          <span className={styles.value}>
            {t("valuesWords.professionalism")}
          </span>
          <span className={styles.value}>{t("valuesWords.fairness")}</span>
          <span className={styles.value}>{t("valuesWords.helpfulness")}</span>
        </div>
      </div>
    </div>
  );
};
