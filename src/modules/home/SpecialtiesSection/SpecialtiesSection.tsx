import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./SpecialtiesSection.module.css";

import MobileIcon from "@/assets/illustrations/mobile.svg";
import WebIcon from "@/assets/illustrations/web.svg";
import KnowHowIcon from "@/assets/illustrations/know-how.svg";
import { SpecialtyInfoBox } from "@/components/SpecialtyInfoBox/SpecialtyInfoBox";
import { Typography } from "@/components/Typography/Typography";

export const SpecialtiesSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "specialties" });

  return (
    <div className={styles.container}>
      <Fade delay={2000}>
        <div className={styles.particle1} />
      </Fade>
      <Fade delay={700}>
        <div className={styles.particle2} />
      </Fade>
      <Fade delay={1200}>
        <div className={styles.particle3} />
      </Fade>
      <Fade delay={800}>
        <div className={styles.particle4} />
      </Fade>
      <Fade delay={1400}>
        <div className={styles.particle5} />
      </Fade>

      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography align="center">{t("description")}</Typography>
      </div>

      <div>
        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header={t("specialty1.title")}
          description={t("specialty1.description")}
          technologiesHeader={t("specialty1.technologiesHeader")}
          technologies={t("specialty1.technologies")}
        />

        <SpecialtyInfoBox
          icon={<WebIcon />}
          header={t("specialty2.title")}
          description={t("specialty2.description")}
          technologiesHeader={t("specialty2.technologiesHeader")}
          technologies={t("specialty2.technologies")}
          reversed
        />

        <SpecialtyInfoBox
          icon={<KnowHowIcon />}
          header={t("specialty3.title")}
          description={t("specialty3.description")}
          technologiesHeader={t("specialty3.technologiesHeader")}
          technologies={t("specialty3.technologies")}
        />
      </div>
    </div>
  );
};
