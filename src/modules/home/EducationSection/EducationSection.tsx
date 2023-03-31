import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./EducationSection.module.css";
import { CertificateInfoBox } from "@/components/CertificateInfoBox/CertificateInfoBox";
import { CERTIFICATES } from "./EducationSection.constants";

export const EducationSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "journey" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h2">{t("certificates.title")}</Typography>
        <Typography>{t("certificates.description")}</Typography>
      </div>

      <div className={styles.row}>
        {CERTIFICATES.map((certificate) => (
          <CertificateInfoBox
            {...certificate}
            key={certificate.title}
            date={t(`certificates.${certificate.date}`)}
            title={t(`certificates.${certificate.title}`)}
            publisher={t<string>(`certificates.${certificate.publisher}`)}
            description={t<string>(`certificates.${certificate.description}`)}
          />
        ))}
      </div>
    </div>
  );
};
