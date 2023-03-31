import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography/Typography";

import styles from "./BlogPost.module.css";

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
  return (
    <div className={styles.container}>
      <Link href={link} target="_blank" rel="noreferrer">
        <div className={styles.insideContainer}>
          <Image
            src={image}
            alt={title}
            className={styles.image}
            height={192}
            width={384}
          />

          <Typography variant="small-paragraph" className={styles.date}>
            {date}
          </Typography>

          <Typography className={styles.title} variant="h3">{title}</Typography>

          <Typography>{description}</Typography>
        </div>
      </Link>

      {polishVersionLink && (
        <Link
          className={styles.polishLink}
          href={polishVersionLink}
          target="_blank"
          rel="noreferrer"
        >
          🇵🇱 Polish version
        </Link>
      )}
    </div>
  );
};
