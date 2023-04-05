import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { Fade } from "react-awesome-reveal";

import styles from "./ValuesSection.module.css";

import { Typography } from "@/components/Typography/Typography";

export const ValuesSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "values" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.particle1} />
        <div className={styles.particle2} />
        <div className={styles.particle3} />

        <div className={classNames(styles.column, styles.textContainer)}>
          <Typography variant="h1">{t("title")}</Typography>
          <Typography opacity>{t("description")}</Typography>
        </div>

        <div className={classNames(styles.column, styles.valuesContainer)}>
          <div className={styles.valuesColumn}>
            <Fade cascade direction="up" triggerOnce>
              <span className={styles.value}>
                {t("valuesWords.responsibility")}
              </span>
              <span className={styles.value}>{t("valuesWords.quality")}</span>
              <span className={styles.value}>{t("valuesWords.trust")}</span>
            </Fade>
          </div>
          <div className={styles.valuesColumn}>
            <Fade cascade direction="up" delay={1500} triggerOnce>
              <span className={styles.value}>
                {t("valuesWords.professionalism")}
              </span>
              <span className={styles.value}>{t("valuesWords.fairness")}</span>
              <span className={styles.value}>
                {t("valuesWords.helpfulness")}
              </span>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
