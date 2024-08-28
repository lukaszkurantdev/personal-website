import Link from "next/link";
import styles from "./BlogItem.module.css";
import { Typography } from "../Typography/Typography";
import { ExternalLink } from "@/assets/icons/ExternalLink";

type BlogItemProps = {
  title: string;
  description: string;
  date: string;
  link: string;
};

export const BlogItem = ({ title, description, date, link }: BlogItemProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="x-small-paragraph" opacity>
        {date}
      </Typography>

      <Link href={link} target="blank" className={styles.link} rel="noreferrer">
        <Typography link>
          {title}
          <span className={styles.leftPadding}>
            <ExternalLink />
          </span>
        </Typography>
      </Link>

      <Typography variant="small-paragraph" opacity>
        {description}
      </Typography>
    </div>
  );
};
