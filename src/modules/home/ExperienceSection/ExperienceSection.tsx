import { SpecialtyInfoBox } from "@/components/SpecialtyInfoBox/SpecialtyInfoBox";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./ExperienceSection.module.css";
import MobileIcon from "@/assets/icons/MobileIcon.svg";
import { ExperiencePositionBox } from "@/components/ExperiencePositionBox/ExperiencePositionBox";

export const ExperienceSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "experience" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography>{t("description")}</Typography>
      </div>

      <Typography variant="h2" className={styles.header}>
        {t("current")}
      </Typography>

      <div className={styles.listContainer}>
        <ExperiencePositionBox
          date={t("experiencePosition1.date")}
          position={t("experiencePosition1.position")}
          company={t("experiencePosition1.company")}
          logoSrc="/images/logos/mobideca.png"
          logoAlt="Mobideca"
          logoWidth={76}
          logoHeight={10}
        />
        <ExperiencePositionBox
          date={t("experiencePosition2.date")}
          position={t("experiencePosition2.position")}
          company={t("experiencePosition2.company")}
          logoSrc="/images/logos/mobideca.png"
          logoAlt="Mobideca"
          logoWidth={76}
          logoHeight={10}
        />
      </div>

      <Typography variant="h2" className={styles.header}>
        {t("past")}
      </Typography>

      <div className={styles.listContainer}>
        <ExperiencePositionBox
          date={t("experiencePosition3.date")}
          position={t("experiencePosition3.position")}
          company={t("experiencePosition3.company")}
          logoSrc="/images/logos/mobideca.png"
          logoAlt="Mobideca"
          logoWidth={76}
          logoHeight={10}
        />
        <ExperiencePositionBox
          date={t("experiencePosition4.date")}
          position={t("experiencePosition4.position")}
          company={t("experiencePosition4.company")}
          logoSrc="/images/logos/mobideca.png"
          logoAlt="Mobideca"
          logoWidth={76}
          logoHeight={10}
        />
        <ExperiencePositionBox
          date={t("experiencePosition5.date")}
          position={t("experiencePosition5.position")}
          company={t("experiencePosition5.company")}
          logoSrc="/images/logos/mobideca.png"
          logoAlt="Mobideca"
          logoWidth={76}
          logoHeight={10}
        />
      </div>
    </div>
  );
};
