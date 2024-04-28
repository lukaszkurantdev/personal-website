import { useTranslation } from "next-i18next";

import styles from "./EducationSection.module.css";
import { CERTIFICATES, SPEECHES } from "./EducationSection.constants";

import { Typography } from "@/components/Typography/Typography";
import { CertificateInfoBox } from "@/components/CertificateInfoBox/CertificateInfoBox";
import { SnapCarousel } from "@/components/SnapCarousel/SnapCarousel";
import { SpeechBox } from "@/components/SpeechBox/SpeechBox";

export const EducationSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "journey" });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.column}>
        <div className={styles.textContainer}>
          <Typography variant="h2">{t("certificates.title")}</Typography>
          <Typography>{t("certificates.description")}</Typography>
        </div>

        {CERTIFICATES.map((item) => (
          <CertificateInfoBox
            {...item}
            key={item.title}
            date={t(`certificates.${item.date}`)}
            title={t(`certificates.${item.title}`)}
            publisher={t(`certificates.${item.publisher}`)}
            description={t(`certificates.${item.description}`)}
          />
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.textContainer}>
          <Typography variant="h2">{t("speeches.title")}</Typography>
          <Typography>{t("speeches.description")}</Typography>
        </div>

        {SPEECHES.map((item) => (
          <SpeechBox
            {...item}
            key={item.title}
            date={t(`speeches.${item.date}`)}
            title={t(`speeches.${item.title}`)}
            publisher={t(`speeches.${item.publisher}`)}
            description={
              item.description ? t(`speeches.${item.description}`) : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};
