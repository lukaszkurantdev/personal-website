import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Navbar = () => {
  const { t } = useTranslation("common", { keyPrefix: "header" });

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classNames(styles.mainContainer, {
        [styles.mainContainerUpdate]: offset > 10,
      })}
    >
      <nav className={styles.container}>
        <Link href="/">
          <Typography className={styles.mainHeader}>
            <span className={styles.primaryText}>lukaszkurant</span>.com
          </Typography>
        </Link>

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
