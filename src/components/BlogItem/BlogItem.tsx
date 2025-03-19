import Link from "next/link";
import styles from "./BlogItem.module.css";
import { Typography } from "../Typography/Typography";
import { ExternalLink } from "@/assets/icons/ExternalLink";

type BlogItemProps = {
  title: string;
  description: string;
  date: string;
  link: string;
  type: string;
};

export const BlogItem = ({
  title,
  description,
  date,
  link,
  type,
}: BlogItemProps) => {
  return (
    <div className={styles.container}>
      <Link
        href={link}
        target={type === "external" ? "blank" : undefined}
        className={styles.link}
        rel="noreferrer"
      >
        <Typography link>
          {title}
          {/* {type === "external" ? (
            <span className={styles.leftPadding}>
              <ExternalLink />
            </span>
          ) : null} */}
        </Typography>
      </Link>

      <Typography variant="small-paragraph" opacity>
        <span className={styles.date}>{date}</span> | {description}
      </Typography>
    </div>
  );
};
