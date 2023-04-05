import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./ConstCashSection.module.css";
import Image from "next/image";
import ConstcashShape from "@/assets/backgrounds/constcash.svg";
import Link from "next/link";
import { Links } from "@/constants/Links";

export const ConstCashSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "constcash" });

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.textContainer}>
          <Image
            alt="constcash-logo"
            src="/images/logos/constcash.webp"
            width={150}
            height={35}
          />
          <Typography opacity className={styles.description}>
            {t("description1")}
          </Typography>
          <Typography>
            {t("description2")}{" "}
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

      <ConstcashShape className={styles.shape1} />
      <ConstcashShape className={styles.shape2} />

      <Image
        alt="constcash-logo"
        src="/images/constcash-screen.webp"
        className={styles.image}
        width={438}
        height={632}
      />
    </div>
  );
};
