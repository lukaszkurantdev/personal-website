import { Typography } from "@/components/Typography/Typography";
import type { FC } from "react";
import styles from "./CertificateInfoBox.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export type CertificateInfoBoxProps = {
  date: string;
  title: string;
  logoSrc: string;
  logoAlt: string;
  link: string;
  publisher?: string;
  description?: string;
};

export const CertificateInfoBox: FC<CertificateInfoBoxProps> = ({
  date,
  title,
  description,
  publisher,
  logoSrc,
  logoAlt,
  link,
}) => {
  const { t } = useTranslation("home", { keyPrefix: "journey" });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Image src={logoSrc} alt={logoAlt} height={35} width={35} />
        <div>
          <Typography weight="bold">{title}</Typography>
          <Typography variant="small-paragraph" opacity>{date}</Typography>
        </div>
      </div>
      <Typography>
        {publisher} | {" "}
        <Link className={styles.link} href={link}>
          {t("certificates.viewCertificate")}
        </Link>
      </Typography>

      <Typography variant="small-paragraph" opacity>
        {description}
      </Typography>
    </div>
  );
};
