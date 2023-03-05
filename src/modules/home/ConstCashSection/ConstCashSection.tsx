import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./ConstCashSection.module.css";

export const ConstCashSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "constcash" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.textContainer}>
          <Typography variant="h2" className={styles.header}>
            {t("title")}
          </Typography>
          <Typography>{t("description1")}</Typography>
          <Typography>{t("description2")}</Typography>
          <Button className={styles.button} title={t("button")} />
        </div>
      </div>
    </div>
  );
};
