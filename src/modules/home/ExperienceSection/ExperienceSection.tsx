import { useTranslation } from "next-i18next";

import styles from "./ExperienceSection.module.css";

import { ExperiencePositionBox } from "@/components/ExperiencePositionBox/ExperiencePositionBox";
import { Typography } from "@/components/Typography/Typography";

export const ExperienceSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "experience" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1" align="center">
          {t("title")}
        </Typography>
        <Typography align="center">{t("description")}</Typography>
      </div>

      <Typography variant="h2" className={styles.header}>
        {t("current")}
      </Typography>

      <div className={styles.listContainer}>
        <ExperiencePositionBox
          date={t("experiencePosition9.date")}
          position={t("experiencePosition9.position")}
          company={t("experiencePosition9.company")}
          technologies={t("experiencePosition9.technologies")}
          description={t("experiencePosition9.description")}
          logoSrc="/images/logos/masterborn.webp"
          isTopLineTransparent
        />

        <ExperiencePositionBox
          date={t("experiencePosition2.date")}
          position={t("experiencePosition2.position")}
          company={t("experiencePosition2.company")}
          description={t("experiencePosition2.description")}
          technologies={t("experiencePosition2.technologies")}
          logoSrc="/images/logos/umcs.webp"
        />

        <ExperiencePositionBox
          date={t("experiencePosition1.date")}
          position={t("experiencePosition1.position")}
          company={t("experiencePosition1.company")}
          description={t("experiencePosition1.description")}
          technologies={t("experiencePosition1.technologies")}
          logoSrc="/images/logos/mobideca.webp"
          isBottomLineTransparent
        />
      </div>

      <Typography variant="h2" className={styles.header}>
        {t("past")}
      </Typography>

      <div className={styles.listContainer}>
        <ExperiencePositionBox
          isTopLineTransparent
          date={t("experiencePosition3.date")}
          position={t("experiencePosition3.position")}
          company={t("experiencePosition3.company")}
          description={t("experiencePosition3.description")}
          expired
          logoSrc="/images/logos/dogtronic.webp"
          technologies={t("experiencePosition3.technologies")}
        />
        <ExperiencePositionBox
          date={t("experiencePosition4.date")}
          position={t("experiencePosition4.position")}
          company={t("experiencePosition4.company")}
          description={t("experiencePosition4.description")}
          expired
          logoSrc="/images/logos/umcs.webp"
        />
        <ExperiencePositionBox
          date={t("experiencePosition5.date")}
          position={t("experiencePosition5.position")}
          company={t("experiencePosition5.company")}
          description={t("experiencePosition5.description")}
          expired
          logoSrc="/images/logos/polcode.webp"
          technologies={t("experiencePosition5.technologies")}
        />
        <ExperiencePositionBox
          date={t("experiencePosition6.date")}
          position={t("experiencePosition6.position")}
          company={t("experiencePosition6.company")}
          description={t("experiencePosition6.description")}
          expired
          logoSrc="/images/logos/akanza.webp"
          technologies={t("experiencePosition6.technologies")}
        />
        <ExperiencePositionBox
          date={t("experiencePosition7.date")}
          position={t("experiencePosition7.position")}
          company={t("experiencePosition7.company")}
          description={t("experiencePosition7.description")}
          expired
          logoSrc="/images/logos/umcs.webp"
        />
        <ExperiencePositionBox
          date={t("experiencePosition8.date")}
          position={t("experiencePosition8.position")}
          company={t("experiencePosition8.company")}
          description={t("experiencePosition8.description")}
          expired
          logoSrc="/images/logos/freelancer.webp"
          technologies={t("experiencePosition8.technologies")}
          isBottomLineTransparent
        />
      </div>
    </div>
  );
};
