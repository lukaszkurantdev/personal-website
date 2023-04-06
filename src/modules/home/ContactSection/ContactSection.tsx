import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./ContactSection.module.css";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { Links } from "@/constants/Links";

export const ContactSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "contact" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.particle1} />
        <div className={styles.particle2} />
        <div className={styles.particle3} />

        <Typography variant="h1" align="center">
          {t("title")}
        </Typography>
        <Typography className={styles.description} align="center">
          {t("description")}
        </Typography>
        <Link href={Links.Contact} aria-label="contact">
          <Button
            className={styles.button}
            variant="ternary"
            title={t("button")}
          />
        </Link>
      </div>
    </div>
  );
};
