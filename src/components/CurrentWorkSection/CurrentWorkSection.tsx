import Link from "next/link";
import styles from "./CurrentWorkSection.module.css";
import { Typography } from "../Typography/Typography";
import { Links } from "@/constants/Links";
import { EXPERIENCE_DATA } from "@/data/experience";

const DATA = EXPERIENCE_DATA.filter((item) => item.isCurrent);

export const CurrentWorkSection = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Currently working as
      </Typography>

      {DATA.map((item) => (
        <div key={item.key}>
          <Typography weight="bold">{item.position}</Typography>
          <Typography variant="small-paragraph" opacity>
            {item.company}
          </Typography>
        </div>
      ))}

      <div className={styles.linksContainer}>
        <Link href={Links.Experience}>
          <Typography variant="small-paragraph" link>
            Check my experience
          </Typography>
        </Link>
        <Link href={Links.Activities}>
          <Typography variant="small-paragraph" link>
            Check list of my certificates, speeches and publications
          </Typography>
        </Link>
      </div>
    </div>
  );
};
