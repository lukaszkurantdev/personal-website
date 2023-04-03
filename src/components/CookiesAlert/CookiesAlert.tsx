import { useCallback, useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Button } from "../Button/Button";
import styles from "./CookiesAlert.module.css";
import { COOKIES_KEY } from "./CookiesAlert.constants";

export const CookiesAlert = () => {
  const { t } = useTranslation("cookies", { keyPrefix: "alert" });

  const [isCookiesAlertVisible, setCookiesAlertVisible] = useState(false);

  const onClickCookies = useCallback(() => {
    localStorage.setItem(COOKIES_KEY, Boolean(false).toString());
    setCookiesAlertVisible(false);
  }, []);

  useEffect(() => {
    setCookiesAlertVisible(Boolean(localStorage.getItem(COOKIES_KEY)) || true);
  }, []);

  if (!isCookiesAlertVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.placeholder} />

      <div className={styles.container}>
        <Typography>
          {t("description1")}
          <Link href="/cookies" className={styles.link}>
            {t("description2")}
          </Link>
          {t("description3")}
        </Typography>

        <Button title={t("button")} onClick={onClickCookies} />
      </div>
    </>
  );
};
