import Link from "next/link";
import styles from "./CurrentWorkSection.module.css";
import { Typography } from "../Typography/Typography";
import { Links } from "@/constants/Links";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ColumnsContainer } from "../ColumnsContainer/ColumnsContainer";

const DATA = EXPERIENCE_DATA.filter((item) => item.isCurrent);

export const CurrentWorkSection = () => {
  return (
    <ColumnsContainer title="Currently working as">
      {DATA.map((item) => (
        <div key={item.key}>
          <Typography>{item.position}</Typography>
          <Typography
            className={styles.company}
            variant="small-paragraph"
            opacity
          >
            {item.company}
          </Typography>
        </div>
      ))}

      <div className={styles.linksContainer}>
        <Link href={Links.Experience}>
          <Typography variant="small-paragraph" link>
            My previous jobs / education
          </Typography>
        </Link>
        <Link href={Links.Activities}>
          <Typography variant="small-paragraph" link>
            Check list of my certificates, speeches and publications
          </Typography>
        </Link>
      </div>
    </ColumnsContainer>
  );
};
