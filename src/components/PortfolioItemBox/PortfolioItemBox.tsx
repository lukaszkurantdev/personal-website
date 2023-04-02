import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography/Typography";

import styles from "./PortfolioItemBox.module.css";
import { useTranslation } from "next-i18next";
import { Button } from "../Button/Button";

type PortfolioItemBoxProps = {
  date: string;
  title: string;
  description: string;
  slug: string;
  color: string;
  image: string;
  imageSize: {height: number, width: number};
};

export const PortfolioItemBox = ({
  date,
  title,
  description,
  slug,
  color,
  image,
  imageSize,
}: PortfolioItemBoxProps) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          height={imageSize.height}
          width={imageSize.width}
        />

        <div
          className={styles.dateContainer}
          style={{ backgroundColor: color }}
        >
          <Typography variant="small-paragraph" className={styles.date}>
            {date}
          </Typography>
        </div>

        <Typography className={styles.title} variant="h3">
          {title}
        </Typography>

        <Typography
          opacity
          align="center"
          variant="small-paragraph"
          className={styles.description}
        >
          {description}
        </Typography>

        <Link href={`/portfolio/${slug}`} target="_blank" rel="noreferrer">
          <Button
            variant="secondary"
            title={t("readMore")}
            className={styles.moreButton}
            style={{ color }}
          />
        </Link>
      </div>
    </div>
  );
};
