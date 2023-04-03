import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Footer.module.css";
import { CookiesAlert } from "@/components/CookiesAlert/CookiesAlert";

export const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });

  return (
    <>
      <div className={styles.mainContainer}>
        <nav className={styles.container}>
          <Typography>{t("rights")}</Typography>

          <div className={styles.menu}>
            <Button title={t("constcash")} variant="secondary" />
            <Button title={t("cookies")} variant="secondary" />
            <Button title={t("contact")} variant="secondary" />
          </div>
        </nav>
      </div>
      
      <CookiesAlert />
    </>
  );
};
