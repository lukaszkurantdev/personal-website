import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import styles from "./ConstCashSection.module.css";
import { ILLUSTRATION_SIZE, LOGO_SIZE } from "./ConstCashSection.constants";

import ConstCashShape from "@/assets/backgrounds/constcash.svg";
import { Links } from "@/constants/Links";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

export const ConstCashSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "constcash" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.textContainer}>
          <Image
            alt="constcash-logo"
            src="/images/logos/constcash.webp"
            {...LOGO_SIZE}
          />
          <Typography opacity className={styles.description}>
            {t("description1")}
          </Typography>
          <Typography>
            {`${t("description2")} `}
            <Link href={Links.ConstCash} className={styles.link}>
              {t("caseStudy")}
            </Link>
          </Typography>
          <Link href={Links.ConstCashWebsite}>
            <Button
              className={styles.button}
              variant="danger"
              title={t("button")}
            />
          </Link>
        </div>
      </div>

      <Image
        alt="constcash-logo"
        src="/images/constcash-screen-2.webp"
        className={styles.image}
        {...ILLUSTRATION_SIZE}
      />
    </div>
  );
};
