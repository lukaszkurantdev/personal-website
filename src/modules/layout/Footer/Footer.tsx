import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Footer.module.css";
import { CookiesAlert } from "@/components/CookiesAlert/CookiesAlert";
import { Links } from "@/constants/Links";

export const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });

  return (
    <>
      <div className={styles.mainContainer}>
        <nav className={styles.container}>
          <div className={styles.rightsContainer}>
            <span className={styles.particle} />
            <Typography variant="small-paragraph" opacity>
              {t("rights")}{new Date().getFullYear()}
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
        </nav>
      </div>

      <CookiesAlert />
    </>
  );
};
