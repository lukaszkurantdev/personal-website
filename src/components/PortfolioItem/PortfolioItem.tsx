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
        <Image
          src={image}
          alt={title}
          className={styles.image}
          height={imageSize.height}
          width={imageSize.width}
        />
        <div className={styles.topContainer}>
          <Typography color={color} variant="small-paragraph">
            {date}
          </Typography>
          <Typography weight="bold">{title}</Typography>
          <Typography opacity variant="small-paragraph">
            {description}
          </Typography>

          <Typography color={color} variant="small-paragraph" link>
            Show more
          </Typography>
        </div>
      </div>
    </Link>
  );
};
