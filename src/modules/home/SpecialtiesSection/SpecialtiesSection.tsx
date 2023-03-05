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
          technologiesHeader="Technologies"
          technologies="JavaScript, TypeScript, React Native, MobX, Redux, Redux Saga, React Native Testing Library, Detox, Java, Obj-C"
        />

        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header="Web development"
          description="I create modern, visually attractive and effective web systems that meet high standards."
          technologiesHeader="Technologies"
          technologies="JavaScript, TypeScript, ReactJS, NodeJS, Strapi, NestJS, NextJS, Gatsby, MobX, Redux, Redux Saga, Tailwind, React Testing Library, WDIO"
        />

        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header="UI/UX Design"
          description="I create eye-catching designs for mobile and web applications based on the needs of end users."
          technologiesHeader="Tools & Utils"
          technologies="Adobe XD, Figma, Material UI, Tailwind UI"
        />

        <SpecialtyInfoBox
          icon={<MobileIcon />}
          header="Know-how"
          description="I help deliver new technology solutions, select the tools that fit your needs, and enjoy sharing knowledge."
          technologiesHeader="Solutions"
          technologies="Publication in Google Play, App Store and Microsoft Store, ML algorithms, BLE devices, code audits, image processing and much more"
        />
      </div>

      <div className={styles.row}></div>
    </div>
  );
};
