import { useTranslation } from "next-i18next";
import Link from "next/link";

import {
  APPLE_LINK,
  CONTACT_EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
} from "./AboutSection.constants";
import styles from "./AboutSection.module.css";
import LinkedIn from "../../../assets/icons/linked-in-icon.svg";
import Github from "../../../assets/icons/github-icon.svg";
import Medium from "../../../assets/icons/medium-icon.svg";
import Apple from "../../../assets/icons/apple-icon.svg";

import { Typography } from "@/components/Typography/Typography";

export const AboutSection = () => {
  const { t } = useTranslation("contact", { keyPrefix: "info" });

  return (
    <div className={styles.container}>
      <Typography variant="h2">{t("company1")}</Typography>
      <Typography opacity>{t("company2")}</Typography>
      <Typography opacity>{t("company3")}</Typography>
      <br />
      <Typography opacity>{t("company4")}</Typography>
      <Typography opacity>{t("company5")}</Typography>
      <br />
      <Typography>
        {`${t("email")} `}
        <Link className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </Link>
      </Typography>
      <br />

      <div className={styles.socialContainer}>
        <Link href={MEDIUM_LINK} aria-label="Medium">
          <Medium />
        </Link>
        <Link href={LINKEDIN_LINK} aria-label="LinkedIn">
          <LinkedIn />
        </Link>
        <Link href={GITHUB_LINK} aria-label="Github">
          <Github />
        </Link>
        <Link href={APPLE_LINK} aria-label="Apple">
          <Apple />
        </Link>
      </div>
    </div>
  );
};
