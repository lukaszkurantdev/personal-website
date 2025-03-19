import Link from "next/link";

import {
  APPLE_LINK,
  CONTACT_EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
} from "./AboutSection.constants";
import styles from "./AboutSection.module.css";

import { Typography } from "@/components/Typography/Typography";
import { Medium } from "@/assets/icons/Medium";
import { LinkedIn } from "@/assets/icons/LidkedIn";
import { Github } from "@/assets/icons/Github";
import { Apple } from "@/assets/icons/Apple";

export const AboutSection = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Mobideca Łukasz Kurant</Typography>
      <Typography opacity>ul. Kazimierza Wielkiego 8, lok. 202</Typography>
      <Typography opacity>20-611 Lublin, Poland</Typography>
      <br />
      <Typography opacity>NIP: 6020144610</Typography>
      <Typography opacity>REGON: 522681728</Typography>
      <br />
      <Typography>
        {`Email: `}
        <Link className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </Link>
      </Typography>
      <br />

      <div className={styles.socialContainer}>
        <Link href={MEDIUM_LINK} aria-label="Medium">
          <Medium />
        </Link>
        <Link href={LINKEDIN_LINK} aria-label="LinkedIn">
          <LinkedIn />
        </Link>
        <Link href={GITHUB_LINK} aria-label="Github">
          <Github />
        </Link>
        <Link href={APPLE_LINK} aria-label="Apple">
          <Apple />
        </Link>
      </div>
    </div>
  );
};
