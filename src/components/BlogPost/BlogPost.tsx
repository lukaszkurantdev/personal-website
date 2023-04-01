import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography/Typography";

import styles from "./BlogPost.module.css";
import { useTranslation } from "next-i18next";

type BlogPostProps = {
  date: string;
  title: string;
  description: string;
  link: string;
  polishVersionLink?: string;
  image: string;
};

export const BlogPost = ({
  date,
  title,
  description,
  link,
  polishVersionLink,
  image,
}: BlogPostProps) => {
  const { t } = useTranslation("blog");

  return (
    <div className={styles.container}>
      <Link href={link} target="_blank" rel="noreferrer">
        <div className={styles.insideContainer}>
          <div className={styles.imageContainer}>
            <Image src={image} alt={title} className={styles.image} fill />
          </div>

          <Typography variant="small-paragraph" className={styles.date}>
            {date}
          </Typography>

          <Typography className={styles.title} variant="h3">
            {title}
          </Typography>

          <Typography opacity>{description}</Typography>
        </div>
      </Link>

      {polishVersionLink && (
        <Link
          className={styles.polishLink}
          href={polishVersionLink}
          target="_blank"
          rel="noreferrer"
        >
          {t("polishVersion")}
        </Link>
      )}
    </div>
  );
};
