import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { t } = useTranslation("common", { keyPrefix: "header" });

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.container}>
        <Typography className={styles.mainHeader}>
          <span className={styles.primaryText}>lukaszkurant</span>.com
        </Typography>

        <div className={styles.menu}>
          <Button title={t("about")} variant="secondary" />
          <Button title={t("blog")} variant="secondary" />
          <Button title={t("portfolio")} variant="secondary" />
          <Button title={t("contact")} variant="secondary" />
        </div>
      </nav>
    </div>
  );
};
