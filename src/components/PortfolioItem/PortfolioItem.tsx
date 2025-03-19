import styles from "./PortfolioItem.module.css";
import { Typography } from "../Typography/Typography";
import Link from "next/link";
import { Links } from "@/constants/Links";

type PortfolioItemProps = {
  date: string;
  title: string;
  description: string;
  slug: string;
  color: string;
  image: string;
  imageSize: { height: number; width: number };
};

export const PortfolioItem = ({
  date,
  title,
  description,
  slug,
}: PortfolioItemProps) => {
  return (
    <div className={styles.container}>
      <Link href={`${Links.Portfolio}/${slug}`} className={styles.link}>
        <Typography link>{title}</Typography>
      </Link>

      <Typography variant="small-paragraph" opacity>
        <span className={styles.date}>{date}</span> | {description}
      </Typography>
    </div>
  );
};
