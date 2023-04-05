import styles from "./ExperiencePositionBox.module.css";

import { Typography } from "@/components/Typography/Typography";

type ExperiencePositionBoxProps = {
  date: string;
  position: string;
  company: string;
  description: string;
};

export const ExperiencePositionBox = ({
  date,
  position,
  company,
  description,
}: ExperiencePositionBoxProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="small-paragraph" className={styles.date}>
        {date}
      </Typography>

      <div className={styles.companyContainer}>
        <Typography className={styles.position}>{position}</Typography>
        <Typography>{company}</Typography>
      </div>

      <div className={styles.companyContainer}>
        <Typography opacity>{description}</Typography>
      </div>
    </div>
  );
};
