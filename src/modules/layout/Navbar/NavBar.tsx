import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { Links } from "@/constants/Links";
import { useState } from "react";
import classNames from "classnames";
import Menu from "@/assets/icons/Menu.svg";

export const Navbar = () => {
  const { t } = useTranslation("common", { keyPrefix: "header" });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((state) => !state);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href={Links.About}>
            <Typography className={styles.mainHeader}>
              <span className={styles.primaryText}>lukaszkurant</span>.com
            </Typography>
          </Link>

          <button className={styles.menuButton} onClick={toggleVisibility}>
            <Menu />
          </button>
        </div>

        <div
          className={classNames(styles.menu, {
            [styles.visibleMenu]: isVisible,
          })}
        >
          <div className={styles.menuInsideContainer}>
            <Link href={Links.About} onClick={toggleVisibility}>
              <Button title={t("about")} variant="secondary" />
            </Link>
            <Link href={Links.Blog} onClick={toggleVisibility}>
              <Button title={t("blog")} variant="secondary" />
            </Link>
            <Link href={Links.Portfolio} onClick={toggleVisibility}>
              <Button title={t("portfolio")} variant="secondary" />
            </Link>
            <Link href={Links.Contact} onClick={toggleVisibility}>
              <Button title={t("contact")} variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
