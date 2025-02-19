import Image from "next/image";
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
  color,
  image,
  imageSize,
}: PortfolioItemProps) => {
  return (
    <Link href={`${Links.Portfolio}/${slug}`}>
      <div className={styles.container}>
        <div className={styles.insideContanier}>
          <div>
            <Typography color={color} variant="x-small-paragraph">
              {date}
            </Typography>
            <Typography weight="bold" className={styles.title}>{title}</Typography>
            <Typography opacity variant="small-paragraph">
              {description}
            </Typography>
          </div>

          <Image
            src={image}
            alt={title}
            className={styles.image}
            height={40}
            width={40}
          />
        </div>
        <div className={styles.hoverContainer}>
          <Typography color={color} variant="paragraph" link>
            Show more
          </Typography>
        </div>
      </div>
    </Link>
  );
};
