import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./ContactSection.module.css";

export const ContactSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "contact" });

  return (
    <div className={styles.container}>
      <Typography variant="h1">{t("title")}</Typography>
      <Typography className={styles.description} align="center">
        {t("description")}
      </Typography>
      <Button className={styles.button} title={t("button")} />
    </div>
  );
};
