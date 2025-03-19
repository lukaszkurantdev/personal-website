import styles from "./HeroSection.module.css";
import { Typography } from "../Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { Medium } from "@/assets/icons/Medium";
import { LinkedIn } from "@/assets/icons/LidkedIn";
import { Github } from "@/assets/icons/Github";
import { Apple } from "@/assets/icons/Apple";
import { Button } from "../Button/Button";
import {
  APPLE_LINK,
  AVATAR_SIZE,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MEDIUM_LINK,
} from "./HeroSection.constants";
import { Links } from "@/constants/Links";

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.avatarContainer}>
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            fetchPriority="high"
            priority
          />
        </div>

        <Typography variant="h1" className={styles.title}>
          Lukasz Kurant
        </Typography>
        <Typography opacity align="center">
          Fullstack Software Engineer and University Teacher
        </Typography>

        <div className={styles.socialContainer}>
          <Link
            href={MEDIUM_LINK}
            aria-label="Medium"
            target="blank"
            rel="noreferrer"
          >
            <Medium />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            aria-label="LinkedIn"
            target="blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </Link>
          <Link
            href={GITHUB_LINK}
            aria-label="Github"
            target="blank"
            rel="noreferrer"
          >
            <Github />
          </Link>
          <Link
            href={APPLE_LINK}
            aria-label="Apple"
            target="blank"
            rel="noreferrer"
          >
            <Apple />
          </Link>
        </div>

        <Link href={Links.Contact} aria-label="contact">
          <Button title="Get in touch with me" />
        </Link>
      </div>
    </div>
  );
};
