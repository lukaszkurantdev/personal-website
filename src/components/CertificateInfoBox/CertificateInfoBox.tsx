import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import styles from "./CertificateInfoBox.module.css";

import { Typography } from "@/components/Typography/Typography";
import { CERTIFICATE_IMAGE_SIZE } from "./CertificateInfoBox.constants";

export type CertificateInfoBoxProps = {
  date: string;
  title: string;
  logoSrc: string;
  logoAlt: string;
  link: string;
  publisher?: string;
  description?: string;
};

export const CertificateInfoBox = ({
  date,
  title,
  description,
  publisher,
  logoSrc,
  logoAlt,
  link,
}: CertificateInfoBoxProps) => {
  const { t } = useTranslation("home", { keyPrefix: "journey" });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          height={CERTIFICATE_IMAGE_SIZE}
          width={CERTIFICATE_IMAGE_SIZE}
        />
        <div>
          <Typography weight="bold">{title}</Typography>
          <Typography variant="small-paragraph" opacity>
            {date}
          </Typography>
        </div>
      </div>
      <Typography>
        {publisher}
        <Link className={styles.link} href={link}>
          {` | ${t("certificates.viewCertificate")}`}
        </Link>
      </Typography>

      <Typography variant="small-paragraph" opacity>
        {description}
      </Typography>
    </div>
  );
};
