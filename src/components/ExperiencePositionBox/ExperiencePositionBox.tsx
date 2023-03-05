import { Typography } from "@/components/Typography/Typography";
import Image from "next/image";
import type { FC } from "react";
import styles from "./ExperiencePositionBox.module.css";

type ExperiencePositionBoxProps = {
  date: string;
  position: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  logoHeight?: number;
  logoWidth?: number;
};

export const ExperiencePositionBox: FC<ExperiencePositionBoxProps> = ({
  date,
  position,
  company,
  logoSrc,
  logoAlt,
  logoHeight,
  logoWidth,
}) => {
  return (
    <div className={styles.container}>
      <Typography>{date}</Typography>
      <Typography variant="h2">{position}</Typography>

      <div className={styles.companyContainer}>
        <Typography>{company}</Typography>
        <Image
          src={logoSrc}
          alt={logoAlt}
          height={logoHeight}
          width={logoWidth}
        />
      </div>
    </div>
  );
};
