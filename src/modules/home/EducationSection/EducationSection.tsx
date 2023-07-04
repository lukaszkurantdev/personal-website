import { useTranslation } from "next-i18next";

import styles from "./EducationSection.module.css";
import { CERTIFICATES } from "./EducationSection.constants";

import { Typography } from "@/components/Typography/Typography";
import { CertificateInfoBox } from "@/components/CertificateInfoBox/CertificateInfoBox";
import { SnapCarousel } from "@/components/SnapCarousel/SnapCarousel";

export const EducationSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "journey" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h2">{t("certificates.title")}</Typography>
        <Typography align="center">{t("certificates.description")}</Typography>
      </div>

      <SnapCarousel
        items={CERTIFICATES}
        renderItem={({ item, isSnapPoint }) => (
          <CertificateInfoBox
            {...item}
            isSnapPoint={isSnapPoint}
            key={item.title}
            date={t(`certificates.${item.date}`)}
            title={t(`certificates.${item.title}`)}
            publisher={t<string>(`certificates.${item.publisher}`)}
            description={t<string>(`certificates.${item.description}`)}
          />
        )}
      />
    </div>
  );
};
