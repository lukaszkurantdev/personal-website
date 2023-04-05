import { useTranslation } from "next-i18next";
import Link from "next/link";

import {
  CONTACT_EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
} from "./AboutSection.constants";
import styles from "./AboutSection.module.css";

import LinkedIn from "@/assets/icons/linked-in.svg";
import Github from "@/assets/icons/github.svg";
import Medium from "@/assets/icons/medium.svg";
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
        <Link href={MEDIUM_LINK}>
          <Medium />
        </Link>
        <Link href={LINKEDIN_LINK}>
          <LinkedIn />
        </Link>
        <Link href={GITHUB_LINK}>
          <Github />
        </Link>
      </div>
    </div>
  );
};
