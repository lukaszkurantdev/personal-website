import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Footer.module.css";

import { CookiesAlert } from "@/components/CookiesAlert/CookiesAlert";
import { Links } from "@/constants/Links";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import {
  APPLE_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
} from "@/modules/contact/AboutSection/AboutSection.constants";
import LinkedIn from "../../../assets/icons/linked-in-icon.svg";
import Github from "../../../assets/icons/github-icon.svg";
import Medium from "../../../assets/icons/medium-icon.svg";
import Apple from "../../../assets/icons/apple-icon.svg";

export const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });

  return (
    <>
      <div className={styles.mainContainer}>
        <nav className={styles.container}>
          <div className={styles.rightsContainer}>
            <span className={styles.particle} />
            <Typography variant="small-paragraph" opacity align="center">
              {t("rights")}
              {new Date().getFullYear()}
            </Typography>
          </div>

          <div className={styles.menu}>
            <Link href={Links.ConstCashWebsite}>
              <Button title={t("constcash")} variant="secondary" />
            </Link>
            <Link href={Links.Cookies}>
              <Button title={t("cookies")} variant="secondary" />
            </Link>
            <Link href={Links.Contact}>
              <Button title={t("contact")} variant="secondary" />
            </Link>
          </div>

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
        </nav>
      </div>

      <CookiesAlert />
    </>
  );
};
