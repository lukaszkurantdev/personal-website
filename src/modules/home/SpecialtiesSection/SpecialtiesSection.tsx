import { SpecialtyInfoBox } from "@/components/SpecialtyInfoBox/SpecialtyInfoBox";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./SpecialtiesSection.module.css";
import MobileIcon from "@/assets/icons/MobileIcon.svg";

export const SpecialtiesSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "specialties" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography align="center">{t("description")}</Typography>
      </div>

      <div className={styles.row}>
        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header="Mobile development"
          description="I make advanced mobile applications for Android and iOS using cross-platform technologies."
          items={["Javascript", "TypeScript", "React Native", "Mobx", "Redux"]}
        />

        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header="Mobile development"
          description="I make advanced mobile applications for Android and iOS using cross-platform technologies."
          items={["Javascript", "TypeScript", "React Native", "Mobx", "Redux"]}
        />
      </div>
    </div>
  );
};
