import Link from "next/link";
import styles from "./LibrariesSection.module.css";
import { Typography } from "../Typography/Typography";
import { ExternalLink } from "@/assets/icons/ExternalLink";
import { LIBRARIES_DATA } from "@/data/libraries";

export const LibrariesSection = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        My libraries
      </Typography>

      {LIBRARIES_DATA.map((item) => (
        <Link
          href={item.link}
          key={item.key}
          className={styles.link}
          target="blank"
          rel="noreferrer"
        >
          <Typography link>{item.title}</Typography>
          <ExternalLink />
        </Link>
      ))}
    </div>
  );
};
